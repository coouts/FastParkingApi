<?php

    namespace App\Core;

    class Controller {

        public function Model($model){
            require_once("../App/Model/" . $model . ".php");
            return new $model;
        }

        public function view($view, $dados = []){
            require_once "../App/View/template.php";
        }
    }