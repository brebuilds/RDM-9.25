# 🚀 GoDaddy Deployment Checklist - Red Door Management

## PRE-DEPLOYMENT CHECKLIST ✅

### Phase 1: Prepare Your Files
- [ ] **Images exported** from Figma (16 total images)
- [ ] **Images placed** in `/images/` folder with correct filenames
- [ ] **App.tsx updated** with standard imports (not figma:asset)
- [ ] **Production build** completed (`npm run build`)
- [ ] **Build folder** contains all necessary files
- [ ] **Admin credentials** changed in `auth.php`

### Phase 2: GoDaddy Account Setup
- [ ] **GoDaddy hosting account** active
- [ ] **Domain name** pointed to hosting
- [ ] **cPanel access** confirmed
- [ ] **SSL certificate** available/enabled
- [ ] **PHP support** confirmed (for CMS)

## DEPLOYMENT STEPS 📤

### Step 1: Upload Main Website
**Upload to `public_html/`:**
- [ ] **index.html** (from build folder)
- [ ] **static/** folder (CSS, JS files from build)
- [ ] **images/** folder (your exported images)
- [ ] **.htaccess** file (for client-side routing)
- [ ] **cms-api.php** (CMS integration)
- [ ] **contact-handler.php** (contact forms)

### Step 2: Upload CMS Admin Panel
**Create `public_html/admin/` and upload:**
- [ ] **index.html** (admin login page)
- [ ] **dashboard.html** (admin dashboard)
- [ ] **edit-content.html** (content editor)
- [ ] **auth.php** (authentication)
- [ ] **database.php** (database functions)
- [ ] **api.php** (API endpoints)
- [ ] **check-auth.php** (session validation)
- [ ] **logout.php** (logout functionality)

### Step 3: File Permissions
**Set correct permissions:**
- [ ] **Folders: 755** (public_html, admin, static, images)
- [ ] **HTML files: 644**
- [ ] **PHP files: 644**
- [ ] **CSS/JS files: 644**
- [ ] **Images: 644**
- [ ] **Database file: 666** (cms_data.sqlite when created)

### Step 4: Configuration
- [ ] **Edit contact-handler.php** with client's email
- [ ] **Update admin credentials** in auth.php
- [ ] **Test PHP functionality** (create test.php with `<?php phpinfo(); ?>`)
- [ ] **Verify .htaccess** is working (test direct page URLs)

## POST-DEPLOYMENT TESTING 🧪

### Website Functionality
- [ ] **Homepage loads** correctly
- [ ] **All navigation** works (Home, About, Services, Contact)
- [ ] **Images display** properly
- [ ] **Mobile responsive** design works
- [ ] **Before/After slider** functions
- [ ] **Contact forms** submit successfully
- [ ] **Page routing** works (direct URLs)

### Admin Panel Testing
- [ ] **Admin login** accessible at `/admin/`
- [ ] **Login credentials** work
- [ ] **Dashboard loads** without errors
- [ ] **Content editing** functions work
- [ ] **Team management** works
- [ ] **Database operations** successful
- [ ] **Session management** working (logout/timeout)

### Performance & Security
- [ ] **SSL certificate** working (https://)
- [ ] **Page load speed** acceptable (<3 seconds)
- [ ] **Mobile performance** good
- [ ] **Admin panel security** (password protection)
- [ ] **Database file** not publicly accessible

## FINAL CONFIGURATION ⚙️

### Domain Settings
- [ ] **DNS pointed** to GoDaddy hosting
- [ ] **www redirect** configured (www to non-www or vice versa)
- [ ] **SSL force redirect** (http → https)
- [ ] **Custom error pages** configured (optional)

### Contact Form Setup
**In contact-handler.php, update:**
```php
$to = 'info@reddoormanagement.com'; // ← Client's email
```

### Admin Credentials
**In auth.php, set secure credentials:**
```php
define('ADMIN_USERNAME', 'client_chosen_username');
define('ADMIN_PASSWORD', 'SecurePassword123!');
```

## CLIENT HANDOVER 👥

### Documentation to Provide
- [ ] **Website URL**: https://reddoormanagement.com
- [ ] **Admin panel URL**: https://reddoormanagement.com/admin/
- [ ] **Login credentials** (username/password)
- [ ] **Admin user guide** (how to edit content)
- [ ] **Backup instructions** (download cms_data.sqlite)

### Training Checklist
- [ ] **Show admin login** process
- [ ] **Demonstrate content editing** (hero, about, services)
- [ ] **Explain team management** (add/edit/remove members)
- [ ] **Show project management**
- [ ] **Explain backup importance**

## BACKUP & MAINTENANCE 🔧

### Regular Backups
- [ ] **Setup automated backups** (if available in hosting plan)
- [ ] **Monthly manual backup** of database file
- [ ] **Quarterly full site backup**

### Monitoring
- [ ] **Set up uptime monitoring** (optional)
- [ ] **Google Analytics** installation (optional)
- [ ] **Google Search Console** setup (optional)

## TROUBLESHOOTING REFERENCE 🆘

### Common Issues:
1. **Images not loading** → Check file paths and permissions
2. **Admin panel 500 error** → Check PHP file permissions
3. **Contact forms not working** → Verify PHP mail() function
4. **Pages not routing** → Check .htaccess file upload
5. **SSL warnings** → Force HTTPS in hosting settings

### Emergency Contacts:
- **GoDaddy Support**: 24/7 via phone/chat
- **Your hosting cPanel**: Access via GoDaddy dashboard

## SUCCESS METRICS 🎯

**Your deployment is successful when:**
- ✅ Main website fully functional
- ✅ Admin panel secure and working
- ✅ Client can edit content independently
- ✅ Contact forms deliver emails
- ✅ Mobile experience is excellent
- ✅ Page load times under 3 seconds
- ✅ SSL certificate active

**🎉 Congratulations! Red Door Management is live on GoDaddy with full CMS functionality!**