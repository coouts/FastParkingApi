<?php

use App\Core\Model;
  
class cadastro{

    public $idCadastro;
    public $nomeCliente;
    public $horaEntrada;
    public $horaSaida;

    public function listarTodas()
    {
        $sql = "SELECT * FROM tblCadastro";
        //preparamos
        $stmt = Model::getConexao()->prepare($sql);
        //executamos a consulta
        $stmt->execute();

        
        if ($stmt->rowCount() > 0) {
            
            $resultado = $stmt->fetchAll(\PDO::FETCH_OBJ);

            
            return $resultado;
        } else {
            return [];
        }
    }
}
