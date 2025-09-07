# Deploying to Hostinger

## Step 1: Build the Project
The project has been built and all static files are now in the `dist` folder.

## Step 2: Upload Files to Hostinger
1. Log in to your Hostinger control panel
2. Go to **File Manager** or use **FTP/SFTP**
3. Navigate to your domain's `public_html` folder
4. Upload ALL contents from the `dist` folder to `public_html`
   - index.html
   - assets folder (contains CSS and JS files)
   - vite.svg
   - Any other files in the dist folder

## Step 3: File Structure on Hostinger
Your `public_html` folder should look like this:
```
public_html/
├── index.html
├── vite.svg
└── assets/
    ├── index-[hash].css
    └── index-[hash].js
```

## Step 4: Configure Domain (if needed)
- If using a subdomain, make sure it points to the correct folder
- If using the main domain, files should be in the root `public_html` folder

## Step 5: Test Your Website
Visit your domain to see the spa website live!

## Important Notes:
- The admin dashboard will work at: `yourdomain.com/admin`
- All contact forms and booking forms are currently frontend-only
- For full functionality, you may need to add backend services later

## Troubleshooting:
- If images don't load, check that all files uploaded correctly
- If the site doesn't load, ensure `index.html` is in the root `public_html` folder
- Clear browser cache if you see old content

## File Upload Methods:
1. **File Manager**: Use Hostinger's built-in file manager
2. **FTP**: Use FileZilla or similar FTP client
3. **SFTP**: More secure option if available

## Next Steps (Optional):
- Set up contact form backend
- Add real payment processing
- Connect to a database for bookings
- Set up email notifications