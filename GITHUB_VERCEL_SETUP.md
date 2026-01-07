# 🚀 GitHub + Vercel Setup (3 Easy Steps)

✅ **Git repository is ready!** All files are committed.

---

## Step 1️⃣: Create GitHub Repository (1 minute)

1. Go to: **https://github.com/new**
2. Fill in:
   - **Repository name:** `ads-assistant-chatbot` (or any name you like)
   - **Description:** "Modern chatbot UI for ads management"
   - **Public** ✅ (so anyone can see it)
   - **DO NOT** initialize with README (we already have files)
3. Click **"Create repository"**

---

## Step 2️⃣: Push Code to GitHub (30 seconds)

After creating the repo, GitHub will show you commands. Use these:

```bash
git remote add origin https://github.com/YOUR-USERNAME/ads-assistant-chatbot.git
git branch -M main
git push -u origin main
```

**Or just run this in Cursor terminal (Cmd + J):**

```bash
cd "/Users/ajinkya.b/Desktop/CURSOR/Helpcentre - Chatbot/Chatbot UI Prototype Design"
# Replace YOUR-USERNAME with your GitHub username
git remote add origin https://github.com/YOUR-USERNAME/ads-assistant-chatbot.git
git branch -M main
git push -u origin main
```

---

## Step 3️⃣: Deploy on Vercel (30 seconds)

1. Go to: **https://vercel.com/new**
2. Click **"Continue with GitHub"**
3. You'll see your `ads-assistant-chatbot` repository
4. Click **"Import"**
5. **Don't change any settings** - just click **"Deploy"**
6. Wait 30 seconds...
7. **🎉 Done!** You'll get your public URL!

---

## 🌐 Your Public URL

You'll get something like:
```
https://ads-assistant-chatbot.vercel.app
```

or

```
https://ads-assistant-chatbot-username.vercel.app
```

**This URL is:**
- ✅ Public (anyone can access)
- ✅ Permanent (stays online forever, free)
- ✅ Fast (global CDN)
- ✅ Automatic updates (push to GitHub = auto redeploy)

---

## 🔄 To Update Later

Just commit and push changes:
```bash
git add .
git commit -m "Updated feature X"
git push
```

Vercel will automatically redeploy! 🚀

---

## 📋 Summary

1. ✅ Git repo ready (already done!)
2. 📤 Create GitHub repo → Push code (1 minute)
3. 🚀 Import to Vercel → Deploy (30 seconds)

**Total time: ~2 minutes to get your public link!**

