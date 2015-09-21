<?php

class UsersController extends ControllerBase
{
    public function index()
    {
        $limit  = $this->request->getQuery('limit', 'int', 10);
        $offset = $this->request->getQuery('offset', 'int', 0);

        $users = Users::find([
            'limit'  => $limit,
            'offset' => $offset,
        ]);

        $data = [];
        foreach ($users as $user) {
            $data[] = $this->_getDataArray($user);
        }

        return $this->_response($data);
    }

    public function view($id)
    {
        $user = Users::findFirstById($id);

        $data = $this->_getDataArray($user);

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
