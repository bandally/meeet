<?php

error_reporting(E_ALL);
ini_set('display_errors', 'On');

function debug($value) {
    echo '<pre>';
    print_r($value);
    echo '</pre>';
    exit;
}

use Phalcon\Config\Adapter\Ini;
use Phalcon\Loader;
use Phalcon\Mvc\Micro;
use Phalcon\Mvc\Micro\Collection as MicroCollection;
use Phalcon\DI\FactoryDefault;
use Phalcon\Db\Adapter\Pdo\Mysql as PdoMysql;

$config = new Ini('config/config.ini');

$loader = new Loader();
$loader->registerDirs([
    $config->application->controllersDir,
    $config->application->modelsDir,
])->register();

$di = new FactoryDefault();
$di->set('db', function () use ($config) {
    return new PdoMysql([
        'host'     => $config->database->host,
        'username' => $config->database->username,
        'password' => $config->database->password,
        'dbname'   => $config->database->dbname,
        'charset'  => $config->database->charset,
    ]);
});

$app = new Micro($di);

// Users API
$users = new MicroCollection();
$users->setHandler('UsersController', true);
$users->setPrefix('/users');
$users->get('/', 'index');
$users->get('/{id}', 'view');
$users->post('/', 'add');
$users->put('/{id}', 'edit');
$users->delete('/{id}', 'delete');
$app->mount($users);

// 404エラー
$app->notFound(function () use ($app) {
    $app->response->setStatusCode(404, "Not Found")->sendHeaders();
    echo '404 File not Found';
});

$app->handle();
