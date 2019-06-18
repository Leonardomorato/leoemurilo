<?php

    include "conexao.php";
    
    $pdo = Database::connect();
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $email = $_GET['email']; 
    $senha = $_GET['senha']; 

    $consulta = $pdo->prepare("SELECT * FROM usuario where email = ? and senha = ?");
    $consulta->bindParam(1, $_GET['email'], PDO::PARAM_STR);
    $consulta->bindParam(2, $_GET['senha'], PDO::PARAM_STR);

    $consulta->execute();
    $linha = $consulta->fetch(PDO::FETCH_ASSOC); 
 
    $emailBanco = $linha['email']; 
    $senhaBanco = $linha['senha']; 
    Database::disconnect();    


     if ($emailBanco ==$email && $senhaBanco ==$senha ){
         session_start();
     
     $_SESSION['email']=$_GET['email']; 
     $_SESSION['senha']=$senha;
     echo "<script> window.location='perfil.html';</script>";
     }
     else{
         echo "<script> alert('DADOS INVALIDOS');</script>";
        echo "<script> window.location='http://localhost//';</script>";   //colocar direcionamento   
     }
    

     
?>     