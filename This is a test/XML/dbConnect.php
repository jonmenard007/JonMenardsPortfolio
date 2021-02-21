<?php
session_start();
$host = "localhost";
$dbUsername = "id12311001_jonmenard007";
$dbPassword = "123jonny123";
$dbname = "4thyear";

$conn = new mysqli($host,$dbUsername,$dbPassword, $dbname);

if($conn -> connect_errno){
    die("Connection failed: " . $conn->connect_error);
}else{
    echo "worked";
}

$sql2 = "INSERT INTO Users (firstName, lastName, email, username, password, level_id) 
VALUES ('$fName','$lName','$email', '$username','$password','$levelId')";

if($conn->query($sql2)){

?>