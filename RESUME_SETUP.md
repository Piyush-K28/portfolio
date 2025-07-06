# Resume Setup Instructions

## How to Add Your Resume to the Portfolio

### Method 1: PDF Resume (Recommended)
1. **Save your resume as a PDF file** named `Piyush_Khopade_Resume.pdf`
2. **Place the PDF file** in the `public/` folder of your React project
3. **The button will automatically work** - it will open your resume in a new tab when clicked

### Method 2: Custom Resume File Name
If you want to use a different file name:
1. Place your resume PDF in the `public/` folder
2. Update the file path in `src/components/About.js`:
   ```javascript
   const handleResumeClick = () => {
     window.open('/YOUR_RESUME_NAME.pdf', '_blank');
   };
   ```

### Method 3: Online Resume Link
If your resume is hosted online (Google Drive, OneDrive, etc.):
1. Get a direct link to your resume
2. Update the `handleResumeClick` function:
   ```javascript
   const handleResumeClick = () => {
     window.open('https://your-resume-link.com', '_blank');
   };
   ```

### Method 4: Download Resume
If you want users to download the resume instead of viewing it:
1. Place your resume PDF in the `public/` folder
2. Update the button to use an anchor tag:
   ```jsx
   <a 
     href="/Piyush_Khopade_Resume.pdf" 
     download="Piyush_Khopade_Resume.pdf"
     className="resume-btn"
   >
     Download Resume
   </a>
   ```

## Current Setup
- The button is currently set to open `/Piyush_Khopade_Resume.pdf`
- Simply add your resume PDF with this exact name to the `public/` folder
- The button will work immediately!

## File Structure
```
public/
├── Piyush_Khopade_Resume.pdf  ← Add your resume here
├── index.html
├── favicon.ico
└── ...
```

## Tips
- Keep the file size under 5MB for better loading performance
- Use a professional file name
- Make sure the PDF is high quality and readable
- Test the button after adding your resume

---

**Note**: The "View Resume" button is already implemented and styled. You just need to add your resume PDF to the public folder!