# GoDaddy Deployment Instructions for Red Door Management

## Prerequisites
- GoDaddy shared hosting account with cPanel access
- Domain name pointed to GoDaddy hosting
- FTP/File Manager access

## Step 1: Prepare Your Images
Since this project uses Figma assets, you'll need to export and organize your images:

1. **Create an `images` folder** in your project root
2. **Export all Figma assets** as PNG/JPG files with these names:
   - `red-door-logo.png` (main logo)
   - `red-door-text-logo.png` (text logo)
   - `red-door-hero.png` (hero image)
   - `red-door-background.png` (background)
   - `edward-chapman.png` (team photo)
   - `taylor-wilson.png`, `hunter-kubica.png`, `summer-caskey.png` (team photos)
   - `why-choose-us.png`
   - `project-1.png`, `project-2.png`, `project-3.png`, `project-4.png`
   - `before-image.png`, `after-image.png`
   - `phoenix-area-map.png`

## Step 2: Update Image Imports
Replace all `figma:asset/` imports in App.tsx with standard imports:

```typescript
// OLD (Figma imports)
import imgReddoorlogo253E49B0F328WPng from "figma:asset/2f337b1e13c6392ad948406d06081be5232184a4.png";

// NEW (Standard imports)
import imgReddoorlogo253E49B0F328WPng from "./images/red-door-logo.png";
```

## Step 3: Build for Production
1. Run `npm install` to install dependencies
2. Run `npm run build` to create production files
3. This creates a `build` folder with optimized files

## Step 4: Upload to GoDaddy
### Option A: Using File Manager (Recommended)
1. Login to your GoDaddy cPanel
2. Open **File Manager**
3. Navigate to `public_html` folder
4. Upload all contents from your `build` folder to `public_html`
5. Ensure `.htaccess` file is uploaded for proper routing

### Option B: Using FTP
1. Use an FTP client (FileZilla, etc.)
2. Connect to your GoDaddy hosting
3. Upload all `build` folder contents to the root directory
4. Set proper file permissions (644 for files, 755 for folders)

## Step 5: Configure Contact Forms
Since GoDaddy shared hosting supports PHP, create a contact form handler:

1. **Create `contact-handler.php`** in your root directory
2. **Update form action** in your React components to point to this PHP file
3. **Test form submissions** work properly

## Step 6: Test Your Site
1. Visit your domain name
2. Test all navigation links
3. Test responsive design on mobile
4. Test contact form submissions
5. Check page load speeds

## Common GoDaddy Issues & Solutions

### 1. Client-Side Routing Not Working
- Ensure `.htaccess` file is uploaded and configured
- Check if mod_rewrite is enabled in your hosting plan

### 2. Images Not Loading
- Verify image file paths are correct
- Check file permissions (should be 644)
- Ensure images are in the correct directory

### 3. CSS/JS Not Loading
- Check that all build files are uploaded
- Verify file permissions
- Clear browser cache

### 4. Slow Loading
- Enable compression in `.htaccess`
- Optimize image sizes
- Consider using a CDN

## Production Checklist
- [ ] All images exported and placed in `/images` folder
- [ ] All `figma:asset/` imports updated to standard imports
- [ ] `npm run build` completed successfully
- [ ] All files uploaded to GoDaddy public_html
- [ ] `.htaccess` file uploaded for routing
- [ ] Contact form PHP handler created
- [ ] Domain DNS pointed to GoDaddy hosting
- [ ] SSL certificate enabled
- [ ] All pages tested and working
- [ ] Contact forms tested and working
- [ ] Mobile responsiveness verified
- [ ] SEO meta tags added

## Support
- GoDaddy Support: Available 24/7 via phone/chat
- Documentation: help.godaddy.com
- For React-specific issues, consult React documentation

Your Red Door Management website should now be live and fully functional!