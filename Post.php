<?php

$dsn = 'mysql:host=localhost;dbname=u444353935_tur';
$username = 'u444353935_adg';
$password ='a05011990';
$nome = ($_POST['nome']);        
$mensagem = ($_POST['mensagem']);
$email = ($_POST['email']);
$telefone = ($_POST['telefone']);
$idade = ($_POST['idade']);
$profissao = ($_POST['profissao']);
$cidade = ($_POST['cidade']);
$estado = ($_POST['estado']);

$db = new PDO($dsn, $username, $password);

if($nome != NULL){
        if($mensagem != NULL){
            if($email != NULL){                

$numRows = $db->exec("INSERT INTO formulario(idFormulario, nome, mensagem, email, telefone, idade, profissao, cidade, estado) values(null, '$nome', '$mensagem', '$email','$telefone','$idade','$profissao','$cidade','$estado')");

$result = $db->query('SELECT idFormulario, nome, mensagem, email, telefone, idade, profissao, cidade, estado  FROM formulario', PDO::FETCH_ASSOC);
foreach ($result as $row) {
   }
 echo "<script type ='text/javascript'> alert('Sua mensagem foi enviada com sucesso.'); window.location.href='index.html';</script>";
                }
            }
        }
$result->closeCursor();

unset($db);                 
  

?>