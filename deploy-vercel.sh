#!/bin/bash

echo "🚀 Deploying Ads Assistant Chatbot to Vercel"
echo "============================================="
echo ""

# Navigate to project directory
cd "$(dirname "$0")"

# Install dependencies
echo "📦 Step 1/3: Installing dependencies..."
npm install
echo ""

# Build to verify everything works
echo "🔨 Step 2/3: Building project..."
npm run build
echo ""

# Deploy to Vercel
echo "🌐 Step 3/3: Deploying to Vercel..."
echo ""
echo "⚠️  You may be prompted to:"
echo "   - Log in to Vercel (or create free account)"
echo "   - Confirm project settings"
echo ""
echo "Just press Enter to accept defaults!"
echo ""
read -p "Press Enter to continue with deployment..."
echo ""

npx vercel --prod

echo ""
echo "✅ Deployment complete!"
echo ""
echo "📋 Your chatbot is now live and public!"
echo "Share the URL with anyone! 🎉"

