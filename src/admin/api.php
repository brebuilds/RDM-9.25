<?php
session_start();

// Check authentication
if (!isset($_SESSION['admin_logged_in']) || $_SESSION['admin_logged_in'] !== true) {
    http_response_code(401);
    echo json_encode(['error' => 'Unauthorized']);
    exit;
}

require_once 'database.php';

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');
header('Access-Control-Allow-Headers: Content-Type');

$db = new CMSDatabase();
$method = $_SERVER['REQUEST_METHOD'];
$path = $_GET['path'] ?? '';

try {
    switch ($method) {
        case 'GET':
            handleGet($db, $path);
            break;
        case 'POST':
            handlePost($db, $path);
            break;
        case 'PUT':
            handlePut($db, $path);
            break;
        case 'DELETE':
            handleDelete($db, $path);
            break;
        default:
            http_response_code(405);
            echo json_encode(['error' => 'Method not allowed']);
    }
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(['error' => $e->getMessage()]);
}

function handleGet($db, $path) {
    switch ($path) {
        case 'content':
            $section = $_GET['section'] ?? null;
            echo json_encode($db->getContent($section));
            break;
        case 'team':
            echo json_encode($db->getTeamMembers());
            break;
        default:
            http_response_code(404);
            echo json_encode(['error' => 'Endpoint not found']);
    }
}

function handlePost($db, $path) {
    $input = json_decode(file_get_contents('php://input'), true);
    
    switch ($path) {
        case 'team':
            $result = $db->addTeamMember($input);
            echo json_encode(['success' => $result]);
            break;
        default:
            http_response_code(404);
            echo json_encode(['error' => 'Endpoint not found']);
    }
}

function handlePut($db, $path) {
    $input = json_decode(file_get_contents('php://input'), true);
    
    switch ($path) {
        case 'content':
            $section = $_GET['section'];
            $result = $db->updateContent($section, $input);
            echo json_encode(['success' => $result]);
            break;
        case 'team':
            $id = $_GET['id'];
            $result = $db->updateTeamMember($id, $input);
            echo json_encode(['success' => $result]);
            break;
        default:
            http_response_code(404);
            echo json_encode(['error' => 'Endpoint not found']);
    }
}

function handleDelete($db, $path) {
    switch ($path) {
        case 'team':
            $id = $_GET['id'];
            $result = $db->deleteTeamMember($id);
            echo json_encode(['success' => $result]);
            break;
        default:
            http_response_code(404);
            echo json_encode(['error' => 'Endpoint not found']);
    }
}
?>