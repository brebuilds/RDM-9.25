<?php
session_start();

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

// Admin credentials - Change these!
define('ADMIN_USERNAME', 'reddoor_admin');
define('ADMIN_PASSWORD', 'RedDoor2024!Secure'); // Client should change this

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed']);
    exit;
}

$input = json_decode(file_get_contents('php://input'), true);

if (!$input || !isset($input['username']) || !isset($input['password'])) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Username and password required']);
    exit;
}

$username = trim($input['username']);
$password = trim($input['password']);

if ($username === ADMIN_USERNAME && $password === ADMIN_PASSWORD) {
    $_SESSION['admin_logged_in'] = true;
    $_SESSION['login_time'] = time();
    
    echo json_encode(['success' => true, 'message' => 'Login successful']);
} else {
    // Log failed attempts
    error_log("Failed admin login attempt for username: " . $username . " from IP: " . $_SERVER['REMOTE_ADDR']);
    
    echo json_encode(['success' => false, 'message' => 'Invalid username or password']);
}
?>