<?php

use App\Core\Model;
  
class cadastro
{

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

    public function inserir()
    {

        $sqlInsert = " INSERT INTO tblCadrasto (descricao) 
                        VALUES (?) ";

        $stmt = Model::getConexao()->prepare($sqlInsert);
        $stmt->bindValue(1, $this->descricao);
        //executamos a consulta
        if ($stmt->execute()) {
            //atribuir o id inserido a instância desta classe
            $this->id = Model::getConexao()->lastInsertId();
            return $this;
        } else {
            return false;
        }
    }

    public function buscarPorId($id)
    {

        $sql = " SELECT * FROM tblCadastro WHERE id = ? ";

        $stmt = Model::getConexao()->prepare($sql);
        $stmt->bindValue(1, $id);
        $stmt->execute();

        if ($stmt->rowCount() > 0) {
            $categoria = $stmt->fetch(PDO::FETCH_OBJ);

            $this->id = $categoria->id;
            $this->descricao = $categoria->descricao;
            return $this;
        } else {
            return false;
        }
    }

    public function atualizar()
    {

        $sql = " UPDATE tblCadastro SET descricao = ? WHERE id = ? ";

        $stmt = Model::getConexao()->prepare($sql);
        $stmt->bindValue(1, $this->descricao);
        $stmt->bindValue(2, $this->id);

        return $stmt->execute();
    }

    public function deletar()
    {

        $sql = " DELETE FROM tblCadastro WHERE id = ? ";

        $stmt = Model::getConexao()->prepare($sql);
        $stmt->bindValue(1, $this->id);

        return $stmt->execute();
    }
}
