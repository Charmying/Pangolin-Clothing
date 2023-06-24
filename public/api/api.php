<?php
require_once("./header.php");   //header設置
require_once("./connect.php");   //DB連線設置

// ========================================   連資料庫   ======================================== //

$submittedEmail = $_POST['loginEmail'];
$submittedPassword = $_POST['loginPassword'];

// 準備查詢語句，使用占位符來防止SQL注入攻擊
$query = "SELECT mem_account, mem_password FROM member WHERE mem_account = $1";
$params = array($submittedEmail);

// 執行查詢
$result = pg_query_params($conn, $query, $params);

// 判斷
if (pg_num_rows($result) > 0) {
    $row = pg_fetch_assoc($result);
    $databasePassword = $row['mem_password'];

    // 密碼判斷
    if ($submittedPassword == $databasePassword) {
        echo "密碼正確";
    } else {
        echo "密碼錯誤";
    }
} else {
    // 帳號錯誤
    echo "帳號錯誤";
}

// 關閉連線
pg_close($conn);


?>