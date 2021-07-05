<?php


use App\Core\Model;

class preco
{

    public $idPreco;
    public $precoInicial;
    public $precoPorHora;
    public $precoAdicionalPorHora;
    

    public function listarTodos()
    {
        $sql = " SELECT p.*, c.descricao as categoria FROM tblPreco p
                 INNER JOIN tblCadastro c ON p.cadastro_id = c.id ORDER BY p.id DESC ";

        //preparamos a consulta
        $stmt = Model::getConexao()->prepare($sql);
        //executamos a consulta
        $stmt->execute();

        //quantidade de linhas
        if ($stmt->rowCount() > 0) {
            //resultados em forma de lista de objetos
            $resultado = $stmt->fetchAll(\PDO::FETCH_OBJ);

            //retornamos o resultado
            return $resultado;
        } else {
            return [];
        }
    }
}
