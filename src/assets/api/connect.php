<?php
    $host = 'dpg-ci6r73p8g3nfuccgas5g-a.oregon-postgres.render.com';
    $port = '5432';
    $dbname = 'pangolin_clothing';
    $user = 'charmying'; // 数据库用户名
    $password = '9pvsdFr2i17DKueeHkTiS8sDGRswPJp9';
    
    $conn = pg_connect("host=$host port=$port dbname=$dbname user=$user password=$password");
?>