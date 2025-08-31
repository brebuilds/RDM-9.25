<?php
session_start();

header('Content-Type: application/json');

// Check if user is logged in and session is still valid
$authenticated = false;

if (isset($_SESSION['admin_logged_in']) && $_SESSION['admin_logged_in'] === true) {
    // Check if session is not older than 8 hours
    if (isset($_SESSION['login_time']) && (time() - $_SESSION['login_time']) < 28800) {
        $authenticated = true;
    } else {
        // Session expired
        session_destroy();
    }
}

echo json_encode(['authenticated' => $authenticated]);
?>