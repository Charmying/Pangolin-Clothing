<?php

$Origin = isset($_SERVER['HTTP_ORIGIN'])?$_SERVER['HTTP_ORIGIN']:"*";
header("Access-Control-Allow-Origin: {$Origin}");
header("Access-Control-Allow-Methods:POST,GET,OPTIONS");
header("Access-Control-Allow-Credentials:true");



header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type:application/json;charset=utf-8");
header("Content-Type: application/json");
?>