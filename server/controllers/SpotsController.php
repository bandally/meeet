<?php

use Phalcon\Mvc\Controller;
use Phalcon\Http\Response;

class SpotsController extends Controller
{
    public function index()
    {
        $limit  = $this->request->getQuery('limit', 'int', 10);
        $offset = $this->request->getQuery('offset', 'int', 0);

        $spots = Spots::find([
            'limit'  => $limit,
            'offset' => $offset,
        ]);

        $data = [];
        foreach ($spots as $spot) {
            $data[] = $this->_getDataArray($spot);
        }

        $response = new Response();
        $response->setJsonContent($data);

        return $response;
    }

    public function view($id)
    {
        $spot = Spots::findFirstById($id);

        $data = $this->_getDataArray($spot);

        $response = new Response();
        $response->setJsonContent($data);

        return $response;
    }

    public function add()
    {

    }

    public function edit($id)
    {

    }

    public function delete($id)
    {

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
