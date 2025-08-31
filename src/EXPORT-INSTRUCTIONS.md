# 🚀 Red Door Management - GoDaddy Export Instructions

## COMPLETE DEPLOYMENT CHECKLIST ✅

### STEP 1: Export Images from Figma
You need to export these exact images from your Figma project and save them with these filenames:

**📁 Create `/images/` folder in your project root and export:**

1. **red-door-text-logo.png** (Header logo with text)
2. **red-door-logo.png** (Main logo symbol)  
3. **edward-chapman.png** (Team photo - Edward Chapman)
4. **taylor-wilson.png** (Team photo - Taylor Wilson)
5. **hunter-kubica.png** (Team photo - Hunter Kubica)
6. **summer-caskey.png** (Team photo - Summer Caskey)
7. **why-choose-us.png** (Why choose us section image)
8. **project-1.png** (Project portfolio image 1)
9. **project-2.png** (Project portfolio image 2)
10. **project-3.png** (Project portfolio image 3)
11. **project-4.png** (Project portfolio image 4)
12. **before-image.png** (Before/After slider - Before)
13. **after-image.png** (Before/After slider - After)
14. **red-door-hero.png** (Main hero section image)
15. **red-door-footer-logo.png** (Footer logo)
16. **red-door-background.png** (Background image)

**💡 Export Tips:**
- Use PNG format for logos and images with transparency
- Use JPG format for photos (smaller file size)
- Recommended size: Max width 1200px for hero images, 400px for team photos
- Optimize images for web (use Export for Web in Figma)

### STEP 2: Update Your Project Structure
```
your-project/
├── images/               ← CREATE THIS FOLDER
│   ├── red-door-text-logo.png
│   ├── red-door-logo.png
│   ├── edward-chapman.png
│   └── ... (all other images)
├── App.tsx               ← ALREADY UPDATED
├── package.json          ← ALREADY UPDATED
├── public/
│   ├── .htaccess         ← ALREADY CREATED
│   └── index.html        ← ALREADY UPDATED
└── admin/                ← CMS FILES READY
    ├── index.html
    ├── dashboard.html
    └── ... (all admin files)
```

### STEP 3: Build Your Project
```bash
# Install dependencies
npm install

# Build for production
npm run build
```

This creates a `build/` folder with your production-ready files.

### STEP 4: Prepare Files for GoDaddy

#### A. Main Website Files
Upload contents of `build/` folder to GoDaddy's `public_html/`:
- `index.html`
- `static/` folder (CSS, JS files)
- `images/` folder
- `.htaccess` file
- `cms-api.php` (for CMS integration)
- `contact-handler.php` (for contact forms)

#### B. Admin/CMS Files
Create `public_html/admin/` folder and upload:
- `index.html` (login page)
- `dashboard.html` (admin dashboard)  
- `edit-content.html` (content editor)
- All `.php` files (auth.php, database.php, api.php, etc.)

### STEP 5: GoDaddy Upload Process

#### Option A: File Manager (Recommended)
1. **Login to GoDaddy cPanel**
2. **Open File Manager**
3. **Navigate to public_html**
4. **Upload build folder contents** (drag & drop)
5. **Create admin subfolder**
6. **Upload admin files** to admin folder
7. **Set file permissions**:
   - Files: 644
   - Folders: 755
   - PHP files: 644

#### Option B: FTP Upload
1. **Use FTP client** (FileZilla, Cyberduck, etc.)
2. **Connect to GoDaddy hosting**:
   - Host: Your domain or FTP address
   - Username: Your cPanel username  
   - Password: Your cPanel password
3. **Upload all files** to root directory
4. **Upload admin files** to /admin/ subdirectory

### STEP 6: Configure Admin Panel
1. **Edit `/admin/auth.php`** on the server
2. **Change default login credentials**:
   ```php
   define('ADMIN_USERNAME', 'your_chosen_username');
   define('ADMIN_PASSWORD', 'your_secure_password123!');
   ```
3. **Save the file**

### STEP 7: Set Up SSL & Security
1. **Enable SSL certificate** in GoDaddy cPanel
2. **Force HTTPS redirects**
3. **Test admin login** at: `https://yourdomain.com/admin/`

### STEP 8: Final Testing Checklist
- [ ] **Main website loads** at your domain
- [ ] **All pages work** (Home, About, Services, Contact, etc.)
- [ ] **Images display correctly**
- [ ] **Mobile responsive** design works
- [ ] **Contact forms** submit properly
- [ ] **Admin panel accessible** at /admin/
- [ ] **Admin login works** with new credentials
- [ ] **Content editing** functions in CMS
- [ ] **Before/After slider** works on mobile/desktop
- [ ] **Navigation** works on all pages

### STEP 9: Post-Launch Setup
1. **Set up Google Analytics** (optional)
2. **Submit sitemap** to Google Search Console
3. **Test site speed** and optimize if needed
4. **Create regular backups** of admin/cms_data.sqlite
5. **Train client** on using admin panel

## 🎯 Quick Command Summary
```bash
# 1. Install & Build
npm install
npm run build

# 2. Upload build/* to public_html/
# 3. Upload admin/* to public_html/admin/
# 4. Configure credentials in auth.php
# 5. Test everything!
```

## 🆘 Troubleshooting

### Images Not Loading
- Check image file paths match exactly
- Verify images are in /images/ folder
- Check file permissions (644)

### Admin Panel Not Working  
- Verify all PHP files uploaded
- Check PHP is enabled on hosting plan
- Ensure database file permissions (666 for cms_data.sqlite)

### Contact Forms Not Working
- Upload contact-handler.php to root
- Check PHP mail() function is enabled
- Update email address in contact-handler.php

### Client-Side Routing Issues
- Ensure .htaccess file is uploaded
- Check mod_rewrite is enabled
- Test direct URL access to pages

## 📞 Support Contacts
- **GoDaddy Support**: 24/7 phone/chat support
- **Your Domain**: https://yourdomain.com
- **Admin Panel**: https://yourdomain.com/admin/

**🎉 Your Red Door Management website with CMS is ready for professional hosting!**