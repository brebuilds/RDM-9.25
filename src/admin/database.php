<?php
// Database initialization and connection
class CMSDatabase {
    private $db;
    private $dbPath;
    
    public function __construct($dbPath = 'cms_data.sqlite') {
        $this->dbPath = $dbPath;
        $this->init();
    }
    
    private function init() {
        try {
            $this->db = new PDO('sqlite:' . $this->dbPath);
            $this->db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            $this->createTables();
            $this->insertDefaultData();
        } catch (PDOException $e) {
            die('Database connection failed: ' . $e->getMessage());
        }
    }
    
    private function createTables() {
        // Content table for website text content
        $this->db->exec("
            CREATE TABLE IF NOT EXISTS content (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                section VARCHAR(50) UNIQUE NOT NULL,
                title TEXT,
                subtitle TEXT,
                description TEXT,
                button_text TEXT,
                updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
            )
        ");
        
        // Team members table
        $this->db->exec("
            CREATE TABLE IF NOT EXISTS team_members (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                name VARCHAR(100) NOT NULL,
                position VARCHAR(100) NOT NULL,
                bio TEXT,
                image_path VARCHAR(255),
                order_index INTEGER DEFAULT 0,
                active BOOLEAN DEFAULT 1,
                created_at DATETIME DEFAULT CURRENT_TIMESTAMP
            )
        ");
        
        // Projects table
        $this->db->exec("
            CREATE TABLE IF NOT EXISTS projects (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                title VARCHAR(100) NOT NULL,
                description TEXT,
                image_path VARCHAR(255),
                category VARCHAR(50),
                order_index INTEGER DEFAULT 0,
                active BOOLEAN DEFAULT 1,
                created_at DATETIME DEFAULT CURRENT_TIMESTAMP
            )
        ");
        
        // Settings table
        $this->db->exec("
            CREATE TABLE IF NOT EXISTS settings (
                key VARCHAR(50) PRIMARY KEY,
                value TEXT,
                updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
            )
        ");
    }
    
    private function insertDefaultData() {
        // Check if default content already exists
        $stmt = $this->db->prepare("SELECT COUNT(*) FROM content");
        $stmt->execute();
        $count = $stmt->fetchColumn();
        
        if ($count == 0) {
            // Insert default content
            $defaultContent = [
                [
                    'section' => 'hero',
                    'title' => 'Professional Property Management Services',
                    'subtitle' => 'Red Door Management',
                    'description' => 'Expert property management solutions in Phoenix, Arizona. We handle everything from tenant screening to maintenance coordination.',
                    'button_text' => 'Get Started'
                ],
                [
                    'section' => 'about',
                    'title' => 'About Red Door Management',
                    'subtitle' => 'Your Trusted Property Management Partner',
                    'description' => 'With years of experience in the Phoenix real estate market, Red Door Management provides comprehensive property management services for both residential and commercial properties.',
                    'button_text' => 'Learn More'
                ],
                [
                    'section' => 'services',
                    'title' => 'Our Services',
                    'subtitle' => 'Comprehensive Property Management Solutions',
                    'description' => 'From multi-family rentals to vacation properties, we offer complete management services tailored to your needs.',
                    'button_text' => 'View Services'
                ],
                [
                    'section' => 'contact',
                    'title' => 'Contact Information',
                    'subtitle' => '',
                    'description' => 'Phone: (555) 123-4567\nEmail: info@reddoormanagement.com\nAddress: 123 Main St, Phoenix, AZ 85001',
                    'button_text' => 'Contact Us'
                ]
            ];
            
            foreach ($defaultContent as $content) {
                $stmt = $this->db->prepare("
                    INSERT INTO content (section, title, subtitle, description, button_text) 
                    VALUES (?, ?, ?, ?, ?)
                ");
                $stmt->execute([
                    $content['section'],
                    $content['title'],
                    $content['subtitle'],
                    $content['description'],
                    $content['button_text']
                ]);
            }
        }
        
        // Check if default team members exist
        $stmt = $this->db->prepare("SELECT COUNT(*) FROM team_members");
        $stmt->execute();
        $count = $stmt->fetchColumn();
        
        if ($count == 0) {
            // Insert default team members
            $defaultTeam = [
                [
                    'name' => 'Edward Chapman',
                    'position' => 'Designated Broker',
                    'bio' => 'Edward brings over 15 years of real estate experience to Red Door Management.',
                    'order_index' => 1
                ],
                [
                    'name' => 'Taylor Wilson',
                    'position' => 'Property Manager',
                    'bio' => 'Taylor specializes in residential property management and tenant relations.',
                    'order_index' => 2
                ],
                [
                    'name' => 'Hunter Kubica',
                    'position' => 'Director of Accounting',
                    'bio' => 'Hunter oversees all financial aspects of property management operations.',
                    'order_index' => 3
                ],
                [
                    'name' => 'Summer Caskey',
                    'position' => 'Accounting',
                    'bio' => 'Summer handles day-to-day accounting and financial reporting.',
                    'order_index' => 4
                ]
            ];
            
            foreach ($defaultTeam as $member) {
                $stmt = $this->db->prepare("
                    INSERT INTO team_members (name, position, bio, order_index) 
                    VALUES (?, ?, ?, ?)
                ");
                $stmt->execute([
                    $member['name'],
                    $member['position'],
                    $member['bio'],
                    $member['order_index']
                ]);
            }
        }
    }
    
    public function getContent($section = null) {
        if ($section) {
            $stmt = $this->db->prepare("SELECT * FROM content WHERE section = ?");
            $stmt->execute([$section]);
            return $stmt->fetch(PDO::FETCH_ASSOC);
        } else {
            $stmt = $this->db->prepare("SELECT * FROM content ORDER BY section");
            $stmt->execute();
            return $stmt->fetchAll(PDO::FETCH_ASSOC);
        }
    }
    
    public function updateContent($section, $data) {
        $stmt = $this->db->prepare("
            UPDATE content 
            SET title = ?, subtitle = ?, description = ?, button_text = ?, updated_at = CURRENT_TIMESTAMP
            WHERE section = ?
        ");
        return $stmt->execute([
            $data['title'],
            $data['subtitle'],
            $data['description'],
            $data['button_text'],
            $section
        ]);
    }
    
    public function getTeamMembers() {
        $stmt = $this->db->prepare("SELECT * FROM team_members WHERE active = 1 ORDER BY order_index");
        $stmt->execute();
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }
    
    public function addTeamMember($data) {
        $stmt = $this->db->prepare("
            INSERT INTO team_members (name, position, bio, image_path, order_index) 
            VALUES (?, ?, ?, ?, ?)
        ");
        return $stmt->execute([
            $data['name'],
            $data['position'],
            $data['bio'],
            $data['image_path'] ?? null,
            $data['order_index'] ?? 0
        ]);
    }
    
    public function updateTeamMember($id, $data) {
        $stmt = $this->db->prepare("
            UPDATE team_members 
            SET name = ?, position = ?, bio = ?, image_path = ?, order_index = ?
            WHERE id = ?
        ");
        return $stmt->execute([
            $data['name'],
            $data['position'],
            $data['bio'],
            $data['image_path'],
            $data['order_index'],
            $id
        ]);
    }
    
    public function deleteTeamMember($id) {
        $stmt = $this->db->prepare("UPDATE team_members SET active = 0 WHERE id = ?");
        return $stmt->execute([$id]);
    }
    
    public function getDB() {
        return $this->db;
    }
}
?>