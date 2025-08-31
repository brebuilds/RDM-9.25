<?php
// Public API endpoint for the main website to fetch CMS content
// This file should be in your main website root directory

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET');
header('Access-Control-Allow-Headers: Content-Type');

require_once 'admin/database.php';

$db = new CMSDatabase('admin/cms_data.sqlite');
$action = $_GET['action'] ?? '';

try {
    switch ($action) {
        case 'content':
            $section = $_GET['section'] ?? null;
            echo json_encode($db->getContent($section));
            break;
            
        case 'team':
            echo json_encode($db->getTeamMembers());
            break;
            
        case 'all':
            $result = [
                'content' => $db->getContent(),
                'team' => $db->getTeamMembers()
            ];
            echo json_encode($result);
            break;
            
        default:
            http_response_code(400);
            echo json_encode(['error' => 'Invalid action']);
    }
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(['error' => 'Database error: ' . $e->getMessage()]);
}
?>