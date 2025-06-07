# Job Portal

A modern job portal application built with React, Vite, and Tailwind CSS.

## Features

- Job search and filtering
- Career roadmaps
- AI Resume Analyzer
- Job insights and analytics
- Course enrollment
- Premium features
- User authentication

## Deployment Instructions

### Deploying to Vercel

1. Create a GitHub repository and push your code:
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin <your-github-repo-url>
git push -u origin main
```

2. Go to [Vercel](https://vercel.com) and sign up/login with your GitHub account

3. Click "New Project" and import your repository

4. Configure the project:
   - Framework Preset: Vite
   - Root Directory: frontend
   - Build Command: npm run build
   - Output Directory: dist

5. Click "Deploy"

Your application will be deployed and you'll get a URL like `https://your-project-name.vercel.app`

### Environment Variables

No environment variables are required for the current setup.

## Local Development

1. Install dependencies:
```bash
cd frontend
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open [http://localhost:5173](http://localhost:5173) in your browser

## Technologies Used

- React
- Vite
- Tailwind CSS
- React Router
- React Hot Toast
- Lucide Icons
- Mermaid.js (for diagrams) 