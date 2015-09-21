<?php

use Phalcon\Mvc\Controller;
use Phalcon\Http\Response;

class UsersController extends Controller
{
    public function index()
    {
        $users = Users::find();
        $data = [];
        foreach ($users as $user) {
            $data[] = $this->_getDataArray($user);
        }

        $response = new Response();
        $response->setJsonContent($data);

        return $response;
    }

    public function view($id)
    {
        $user = Users::find($id);
        $data = $this->_getDataArray($user);

        $response = new Response();
        $response->setJsonContent($data);

        return $response;
    }

    protected function _getDataArray($dataObject)
    {
        $data = [];
        foreach ($dataObject as $column => $value) {
            $data[$column] = $value;
        }
        return $data;
    }
}
