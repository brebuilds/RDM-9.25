// Deployment helper script for Red Door Management
// Run with: node deploy.js

const fs = require('fs');
const path = require('path');

console.log('🚀 Red Door Management - GoDaddy Deployment Helper\n');

// Check if all required images exist
const requiredImages = [
  'red-door-text-logo.png',
  'red-door-logo.png',
  'edward-chapman.png',
  'taylor-wilson.png',
  'hunter-kubica.png',
  'summer-caskey.png',
  'why-choose-us.png',
  'project-1.png',
  'project-2.png',
  'project-3.png',
  'project-4.png',
  'before-image.png',
  'after-image.png',
  'red-door-hero.png',
  'red-door-footer-logo.png',
  'red-door-background.png'
];

function checkImages() {
  console.log('📸 Checking required images...');
  const imagesDir = path.join(__dirname, 'images');
  const missingImages = [];

  if (!fs.existsSync(imagesDir)) {
    console.log('❌ /images/ folder not found! Please create it and export your Figma images.');
    return false;
  }

  requiredImages.forEach(imageName => {
    const imagePath = path.join(imagesDir, imageName);
    if (!fs.existsSync(imagePath)) {
      missingImages.push(imageName);
    }
  });

  if (missingImages.length > 0) {
    console.log('❌ Missing images:');
    missingImages.forEach(img => console.log(`   - ${img}`));
    console.log('\n📖 Please check IMAGE-EXPORT-GUIDE.md for export instructions.');
    return false;
  }

  console.log('✅ All required images found!');
  return true;
}

function checkBuildFiles() {
  console.log('\n🔨 Checking build files...');
  const buildDir = path.join(__dirname, 'build');
  
  if (!fs.existsSync(buildDir)) {
    console.log('❌ Build folder not found! Please run: npm run build');
    return false;
  }

  const requiredBuildFiles = ['index.html', 'static'];
  const missingBuildFiles = [];

  requiredBuildFiles.forEach(fileName => {
    const filePath = path.join(buildDir, fileName);
    if (!fs.existsSync(filePath)) {
      missingBuildFiles.push(fileName);
    }
  });

  if (missingBuildFiles.length > 0) {
    console.log('❌ Missing build files:');
    missingBuildFiles.forEach(file => console.log(`   - ${file}`));
    return false;
  }

  console.log('✅ Build files ready!');
  return true;
}

function checkAdminFiles() {
  console.log('\n👤 Checking admin panel files...');
  const adminDir = path.join(__dirname, 'admin');
  
  if (!fs.existsSync(adminDir)) {
    console.log('❌ Admin folder not found!');
    return false;
  }

  const requiredAdminFiles = [
    'index.html',
    'dashboard.html',
    'edit-content.html',
    'auth.php',
    'database.php',
    'api.php',
    'check-auth.php',
    'logout.php'
  ];

  const missingAdminFiles = [];

  requiredAdminFiles.forEach(fileName => {
    const filePath = path.join(adminDir, fileName);
    if (!fs.existsSync(filePath)) {
      missingAdminFiles.push(fileName);
    }
  });

  if (missingAdminFiles.length > 0) {
    console.log('❌ Missing admin files:');
    missingAdminFiles.forEach(file => console.log(`   - ${file}`));
    return false;
  }

  console.log('✅ Admin panel files ready!');
  return true;
}

function checkConfiguration() {
  console.log('\n⚙️  Checking configuration...');
  
  // Check if credentials have been changed
  const authPath = path.join(__dirname, 'admin', 'auth.php');
  if (fs.existsSync(authPath)) {
    const authContent = fs.readFileSync(authPath, 'utf8');
    if (authContent.includes('RedDoor2024!Secure')) {
      console.log('⚠️  WARNING: Default admin password detected in auth.php');
      console.log('   Please change the default credentials before deployment!');
      return false;
    }
  }

  // Check contact handler email
  const contactPath = path.join(__dirname, 'contact-handler.php');
  if (fs.existsSync(contactPath)) {
    const contactContent = fs.readFileSync(contactPath, 'utf8');
    if (contactContent.includes('info@reddoormanagement.com')) {
      console.log('ℹ️  Note: Update email address in contact-handler.php with client\'s email');
    }
  }

  console.log('✅ Configuration checked!');
  return true;
}

function generateDeploymentSummary() {
  console.log('\n📋 DEPLOYMENT SUMMARY');
  console.log('='.repeat(50));
  console.log('Files ready for GoDaddy upload:');
  console.log('');
  console.log('📁 Main Website (upload to public_html/):');
  console.log('   ├── build/index.html');
  console.log('   ├── build/static/ (entire folder)');
  console.log('   ├── images/ (entire folder)');
  console.log('   ├── public/.htaccess');
  console.log('   ├── cms-api.php');
  console.log('   └── contact-handler.php');
  console.log('');
  console.log('👤 Admin Panel (upload to public_html/admin/):');
  console.log('   ├── admin/index.html');
  console.log('   ├── admin/dashboard.html');
  console.log('   ├── admin/edit-content.html');
  console.log('   ├── admin/auth.php');
  console.log('   ├── admin/database.php');
  console.log('   ├── admin/api.php');
  console.log('   ├── admin/check-auth.php');
  console.log('   └── admin/logout.php');
  console.log('');
  console.log('🔗 URLs after deployment:');
  console.log('   Main Site: https://reddoormanagement.com');
  console.log('   Admin Panel: https://reddoormanagement.com/admin/');
  console.log('');
  console.log('📖 Next Steps:');
  console.log('   1. Upload files to GoDaddy via File Manager or FTP');
  console.log('   2. Set file permissions (644 for files, 755 for folders)');
  console.log('   3. Enable SSL certificate in GoDaddy');
  console.log('   4. Test website and admin panel');
  console.log('   5. Provide admin credentials to client');
}

// Run all checks
async function runDeploymentCheck() {
  let allChecksPass = true;

  allChecksPass &= checkImages();
  allChecksPass &= checkBuildFiles();
  allChecksPass &= checkAdminFiles();
  allChecksPass &= checkConfiguration();

  if (allChecksPass) {
    console.log('\n🎉 SUCCESS! Your Red Door Management website is ready for GoDaddy deployment!');
    generateDeploymentSummary();
  } else {
    console.log('\n❌ Please fix the issues above before deploying.');
    console.log('\n📚 Reference guides:');
    console.log('   - IMAGE-EXPORT-GUIDE.md');
    console.log('   - EXPORT-INSTRUCTIONS.md');
    console.log('   - GODADDY-DEPLOYMENT-CHECKLIST.md');
  }
}

// Run the deployment check
runDeploymentCheck();