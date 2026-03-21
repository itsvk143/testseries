# Quick Start Guide - Authentication & Dashboard

## ⚡ Fast Setup (5 Minutes)

### 1. Install MongoDB Locally (Mac)
```bash
brew install mongodb-community
brew services start mongodb-community
```

### 2. Get Google OAuth Credentials

**Quick Steps:**
1. Visit: https://console.cloud.google.com/
2. Create new project
3. APIs & Services → Credentials → Create Credentials → OAuth 2.0 Client ID
4. Application type: Web application  
5. Authorized redirect URIs: `http://localhost:3000/api/auth/callback/google`
6. Copy Client ID and Client Secret

### 3. Configure Environment

Edit `.env.local` file:
```bash
# Replace these with your actual values:
GOOGLE_CLIENT_ID=your-client-id-here.apps.googleusercontent.com
GOOGLE_CLIENT_SECRET=your-secret-here

# Generate a random secret:
NEXTAUTH_SECRET=$(openssl rand -base64 32)

# Use as-is for local MongoDB:
MONGODB_URI=mongodb://localhost:27017/testseries

# Add your Gmail address (the one you'll login with):
ADMIN_EMAILS=yourname@gmail.com
```

### 4. Restart Server
```bash
# Press Ctrl+C to stop current server
npm run dev
```

### 5. Test It!
1. Open http://localhost:3000
2. Click "Login" button
3. Sign in with Google
4. You'll be redirected to your Dashboard!

---

## 🎯 Quick Feature Tour

### What Students Can Do:
- ✅ Sign in with Google
- ✅ Take tests (all test pages work as before)
- ✅ View personal dashboard with stats
- ✅ See test history and performance analytics
- ✅ Track progress over time

### What Admins Can Do:
- ✅ Everything students can do, PLUS:
- ✅ Access Admin Panel
- ✅ Add/edit/delete questions
- ✅ Manage all tests

### How to Make Someone an Admin:
1. Add their Gmail to `ADMIN_EMAILS` in `.env.local`
2. Restart server
3. They sign out and sign in again
4. They'll now see "Admin Panel" link

---

## 🔍 Testing Checklist

- [ ] MongoDB is running (`brew services list`)
- [ ] `.env.local` has Google credentials
- [ ] Server restarted after env changes
- [ ] Can click "Login" in navbar
- [ ] Google OAuth screen appears
- [ ] After login, see Dashboard
- [ ] Dashboard shows your name and email
- [ ] Can take a test
- [ ] After submitting test, see result in Dashboard history
- [ ] (If admin) Can see "Admin Panel" link
- [ ] (If admin) Can access /admin page

---

## 🐛 Common Issues & Fixes

### "Please add your Mongo URI to .env.local"
**Fix:** 
```bash
# Check if MongoDB is running
brew services list
# If not running:
brew services start mongodb-community
```

### "OAuth error" or "Invalid redirect URI"
**Fix:**
- Go to Google Cloud Console
- Ensure redirect URI is exactly: `http://localhost:3000/api/auth/callback/google`
- No trailing slashes!
- Check Client ID and Secret are correct

### "Not seeing Admin Panel link"
**Fix:**
1. Check `.env.local` has your email in `ADMIN_EMAILS`
2. Email must match EXACTLY (case-sensitive)
3. Restart server
4. Sign out and sign in again

### Changes to `.env.local` not working
**Fix:**
Always restart the dev server after changing `.env.local`:
```bash
# Press Ctrl+C, then:
npm run dev
```

---

## 📂 Quick File Reference

**Need to modify auth flow?**  
→ `/src/app/api/auth/[...nextauth]/route.js`

**Need to modify dashboard?**  
→ `/src/app/dashboard/page.js`

**Need to change navbar?**  
→ `/src/components/Navbar.js`

**Need to modify test result saving?**  
→ `/src/app/test-series/[exam]/[testId]/page.js` (line ~91-150)

---

## 💡 Pro Tips

1. **Development vs Production:**
   - For production, use MongoDB Atlas (cloud)
   - Update `NEXTAUTH_URL` to your domain
   - Never commit `.env.local` to git!

2. **Multiple Admins:**
   ```env
   ADMIN_EMAILS=admin1@gmail.com,admin2@gmail.com,admin3@gmail.com
   ```

3. **View Database:**
   ```bash
   # Install MongoDB Compass (GUI)
   brew install --cask mongodb-compass
   # Connect to: mongodb://localhost:27017
   ```

4. **Check User Data:**
   Database: `testseries`
   Collections:
   - `users` - All registered users
   - `testResults` - All test submissions

---

## 🎬 What Happens When a Student Takes a Test:

1. Student visits test page
2. Clicks "Start Test"
3. Answers questions
4. Clicks "Submit Test"
5. **→ Results calculated**
6. **→ Saved to MongoDB with user email**
7. **→ Student sees analysis page**
8. Student navigates to Dashboard
9. **→ Dashboard fetches their test history**
10. **→ Shows all previous tests with stats**

---

## 🔄 User Flow Diagram

```
┌─────────────┐
│  Homepage   │
└──────┬──────┘
       │
       ├─ Click "Login"
       ↓
┌─────────────┐
│ Google OAuth│
└──────┬──────┘
       │
       ├─ Sign in success
       ↓
┌─────────────┐
│ Dashboard   │ ← Shows test history
└──────┬──────┘
       │
       ├─ Click test series
       ↓
┌─────────────┐
│ Take Test   │
└──────┬──────┘
       │
       ├─ Submit Test
       ↓
┌─────────────┐
│ Results     │ → Saved to DB
└──────┬──────┘
       │
       ├─ Back to Dashboard
       ↓
┌─────────────┐
│ Updated     │ ← New test appears
│ Dashboard   │   in history!
└─────────────┘
```

---

## 📊 What Gets Stored:

**For Each User:**
- Email
- Name  
- Profile picture
- Admin status
- Join date
- Last login

**For Each Test Attempt:**
- Which test
- Which user
- Score achieved
- Time taken
- All answers
- Subject-wise breakdown
- Accuracy percentage
- Date attempted

---

## 🎯 Next Steps After Setup:

1. **Test it yourself** - Take a few tests, check dashboard
2. **Add sample users** - Have friends test it
3. **Customize dashboard** - Modify `/src/app/dashboard/page.js`
4. **Add more features:**
   - Leaderboards
   - Progress graphs
   - Performance comparison
   - Study recommendations

---

## 📞 Need Help?

Check these files for detailed information:
- `IMPLEMENTATION_SUMMARY.md` - Complete feature list
- `AUTHENTICATION_SETUP.md` - Detailed setup guide
- `.env.local.example` - Environment variable template

---

**You're all set! 🚀**  
Once configured, you'll have a fully functional test platform with:
- ✅ Secure authentication
- ✅ Personal dashboards
- ✅ Performance tracking
- ✅ Admin controls
