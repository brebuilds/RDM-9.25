# Red Door Management CMS Deployment Guide

## Overview
This guide will help you deploy the Red Door Management Content Management System (CMS) to GoDaddy hosting, allowing your client to edit website content through a secure admin panel.

## What You're Getting
- **Password-protected admin panel** at admin.reddoormanagement.com
- **Easy content editing** for text, team members, and projects
- **Secure database** using SQLite (no additional database setup needed)
- **Responsive design** that works on all devices

## Files Included

### Admin Panel Files (Upload to `/admin/` folder)
- `index.html` - Login page
- `dashboard.html` - Main admin dashboard
- `edit-content.html` - Content editing interface
- `auth.php` - Login authentication
- `database.php` - Database management
- `api.php` - API endpoints for admin functions
- `check-auth.php` - Session validation
- `logout.php` - Logout functionality

### Main Website Integration
- `cms-api.php` - Public API for loading CMS content (place in root)
- `DynamicContent.tsx` - React components for dynamic content

## Installation Steps

### 1. Create Admin Subdomain
1. **Login to GoDaddy cPanel**
2. **Go to Subdomains**
3. **Create subdomain**: `admin` pointing to `/public_html/admin/`
4. **Wait for DNS propagation** (up to 24 hours)

### 2. Upload Admin Files
1. **Create folder** `/public_html/admin/`
2. **Upload all admin files** to this folder
3. **Set permissions**:
   - Files: 644
   - Folders: 755
   - Make sure `cms_data.sqlite` is writable (666)

### 3. Configure Security
1. **Edit `/admin/auth.php`**
2. **Change default credentials**:
   ```php
   define('ADMIN_USERNAME', 'your_username');
   define('ADMIN_PASSWORD', 'your_secure_password');
   ```
3. **Use a strong password** with letters, numbers, and symbols

### 4. SSL Certificate
1. **Enable SSL** in GoDaddy cPanel
2. **Force HTTPS** for the admin subdomain
3. **Test login** at `https://admin.reddoormanagement.com`

### 5. Integrate with Main Website
1. **Upload `cms-api.php`** to your main website root
2. **Update your React components** to use dynamic content
3. **Test content loading** from CMS

## Default Login Credentials
**⚠️ CHANGE THESE IMMEDIATELY AFTER INSTALLATION ⚠️**
- **Username**: `reddoor_admin`
- **Password**: `RedDoor2024!Secure`

## Features Your Client Can Edit

### 1. Website Content
- **Hero section** - Main headline and description
- **About section** - Company description
- **Services** - Service offerings and descriptions
- **Contact info** - Phone, email, address

### 2. Team Management
- **Add/edit/remove** team members
- **Upload photos** for team members
- **Update bios** and positions
- **Reorder team** display

### 3. Project Portfolio
- **Add new projects** with images
- **Edit descriptions** and categories
- **Manage project** display order

## Security Features
- **Session-based authentication** with 8-hour timeout
- **Password protection** for all admin pages
- **Failed login attempt** logging
- **Secure file uploads** with type validation
- **SQL injection protection** with prepared statements

## Backup Instructions
1. **Database backup**: Download `cms_data.sqlite` file
2. **File backup**: Download entire `/admin/` folder
3. **Scheduled backups**: Set up via cPanel if available

## Troubleshooting

### Login Issues
- Check username/password in `auth.php`
- Verify SSL certificate is working
- Clear browser cache and cookies

### Content Not Loading
- Check `cms-api.php` is accessible
- Verify database file permissions
- Test API endpoint: `/cms-api.php?action=all`

### File Upload Problems
- Check folder permissions (755 for folders, 644 for files)
- Verify PHP `upload_max_filesize` setting
- Ensure adequate disk space

## Client Training
1. **Provide login credentials** (after changing defaults)
2. **Walk through admin dashboard** features
3. **Show content editing** process
4. **Demonstrate team management**
5. **Explain backup importance**

## Support
- **GoDaddy Support**: Available 24/7 for hosting issues
- **CMS Issues**: Check error logs in cPanel
- **Updates**: Regular content backups recommended

## Advanced Features (Optional)
- **Google Analytics** integration
- **SEO meta tag** management
- **Email notification** for form submissions
- **Content approval** workflow
- **Multi-user** access levels

Your client now has a professional, easy-to-use content management system that allows them to keep their website current without technical knowledge!