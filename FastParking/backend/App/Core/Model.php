<?php

namespace App\Core;

class Model
{
    //padrão de projeto Singleton
    private static $conexao;

    public static function getConexao()
    {
        //criar conexão 
        if(!isset($conexao)){
            
            self::$conexao = new \PDO("mysql:host=localhost;port=3306;dbname=estacionamentoApi;", "root", "Enrolados21");
        }

        //retornamos
        return self::$conexao;
    }
}
