<?php
header('Content-Type: application/json');

// 接收 POST 請求中的帳號和密碼
$username = $_POST['username'];
$password = $_POST['password'];

// 模擬檢查帳號和密碼是否正確
if ($username === 'admin' && $password === 'password') {
    // 登入成功
    echo json_encode(['success' => true]);
} else {
    // 登入失敗
    echo json_encode(['success' => false, 'message' => '帳號或密碼錯誤']);
}

?>