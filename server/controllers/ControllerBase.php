<?php

use Phalcon\Mvc\Controller;
use Phalcon\Http\Response;

class ControllerBase extends Controller
{
    protected function _response($data)
    {
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
