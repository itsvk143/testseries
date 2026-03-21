# Authentication & Dashboard Setup Guide

## Overview
Your TestSeries application now includes:
- ✅ Google OAuth authentication with NextAuth.js
- ✅ Student dashboard with test history and analytics
- ✅ Admin-only access to the admin panel
- ✅ Automatic test result storage in MongoDB
- ✅ User session management

## Setup Instructions

### 1. Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```env
# Google OAuth Credentials
GOOGLE_CLIENT_ID=your_google_client_id_here
GOOGLE_CLIENT_SECRET=your_google_client_secret_here

# NextAuth Configuration
NEXTAUTH_SECRET=your_secret_key_here
NEXTAUTH_URL=http://localhost:3000

# MongoDB Connection
MONGODB_URI=mongodb://localhost:27017/testseries

# Admin Emails (comma-separated)
ADMIN_EMAILS=admin@example.com,another_admin@example.com
```

### 2. Get Google OAuth Credentials

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing project
3. Enable "Google+ API"
4. Go to "Credentials" → "Create Credentials" → "OAuth 2.0 Client ID"
5. Configure consent screen if prompted
6. Application type: "Web application"
7. Add authorized redirect URIs:
   - `http://localhost:3000/api/auth/callback/google` (for development)
   - `https://yourdomain.com/api/auth/callback/google` (for production)
8. Copy Client ID and Client Secret to `.env.local`

### 3. Generate NextAuth Secret

Run this command to generate a secure secret:
```bash
openssl rand -base64 32
```

Copy the output to `NEXTAUTH_SECRET` in `.env.local`

### 4. Setup MongoDB

**Option A: Local MongoDB**
```bash
# Install MongoDB (macOS with Homebrew)
brew install mongodb-community
brew services start mongodb-community

# Create database (it will be created automatically on first connection)
```

**Option B: MongoDB Atlas (Cloud)**
1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create free cluster
3. Get connection string
4. Replace `MONGODB_URI` in `.env.local` with your connection string

### 5. Configure Admin Users

Add your email (the one you'll use with Google login) to `ADMIN_EMAILS` in `.env.local`:
```env
ADMIN_EMAILS=your.email@gmail.com
```

### 6. Start the Application

```bash
npm run dev
```

## Features Explanation

### For Students:
1. **Sign in with Google** - Click "Login" in navbar
2. **Access Dashboard** - View test history, stats, and analytics
3. **Take Tests** - All test results are automatically saved
4. **Track Progress** - See scores, accuracy, time taken for each test

### For Admins:
1. **Admin Panel Access** - Only visible to users in `ADMIN_EMAILS`
2. **Manage Questions** - Add, edit, delete questions for all tests
3. **Same Dashboard** - Admins also have student dashboard access

## How It Works

### Authentication Flow:
1. User clicks "Login" → Redirected to Google OAuth
2. After successful login → User data saved to MongoDB
3. Session created with NextAuth
4. User redirected to Dashboard

### Test Submission Flow:
1. Student completes test and clicks "Submit"
2. Test results calculated (score, subject-wise stats, time taken)
3. Results saved to MongoDB with:
   - User email and name
   - Test ID and exam type
   - Detailed answers and statistics
   - Timestamp
4. User can view all their test results in Dashboard

### Admin Protection:
- `/admin` route checks if user is logged in AND is an admin
- Non-admins are redirected to dashboard
- Admin panel link only shows in navbar for admin users

## Database Collections

### `users` Collection
```javascript
{
  email: "student@example.com",
  name: "Student Name",
  image: "profile_image_url",
  isAdmin: false,
  createdAt: ISODate(),
  lastLogin: ISODate()
}
```

### `testResults` Collection
```javascript
{
  userEmail: "student@example.com",
  userName: "Student Name",
  testId: "neet-PYQ-1",
  examType: "neet",
  score: 120,
  totalMarks: 720,
  totalQuestions: 180,
  correctAnswers: 32,
  answers: { questionId: selectedOption, ... },
  timeTaken: 7200, // in seconds
  subjectStats: {
    Physics: { total: 45, attempted: 40, correct: 30, score: 110 },
    // ... other subjects
  },
  attemptedAt: ISODate()
}
```

## Troubleshooting

### "Error: There is no default export" 
- Make sure you have `'use client'` at the top of client components

### MongoDB Connection Issues
- Check if MongoDB is running: `brew services list`
- Verify connection string in `.env.local`
- For Atlas, check IP whitelist settings

### Google OAuth Errors
- Verify redirect URIs match exactly
- Check Client ID and Secret are correct
- Ensure Google+ API is enabled

### Admin Panel Not Accessible
- Verify your email is in `ADMIN_EMAILS`
- Check spelling and case sensitivity
- Sign out and sign in again

## Next Steps

You can now:
- ✅ Test the authentication by signing in
- ✅ Take a test and see results saved
- ✅ View your dashboard with test history
- ✅ Access admin panel (if you're an admin)
- ✅ Add more admin users by updating `ADMIN_EMAILS`

## Production Deployment

For production deployment:
1. Update `NEXTAUTH_URL` to your production domain
2. Add production redirect URI in Google Console
3. Use MongoDB Atlas for production database
4. Keep `NEXTAUTH_SECRET` secure and never commit it
5. Update `ADMIN_EMAILS` with production admin emails
