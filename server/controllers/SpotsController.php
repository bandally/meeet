<?php

class SpotsController extends ControllerBase
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

        return $this->_response($data);
    }

    public function view($id)
    {
        $spot = Spots::findFirstById($id);

        $data = $this->_getDataArray($spot);

        return $this->_response($data);
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
}
