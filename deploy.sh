#!/bin/bash

echo "🚀 Chatbot UI - Deployment Script"
echo "=================================="
echo ""

# Navigate to project directory
cd "$(dirname "$0")"

# Check if dependencies are installed
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
    echo ""
fi

# Build the project
echo "🔨 Building production version..."
npm run build
echo ""

echo "✅ Build complete!"
echo ""
echo "📤 Choose your deployment option:"
echo ""
echo "1. Vercel (Recommended - Fastest)"
echo "   Run: npx vercel --prod"
echo ""
echo "2. Netlify"
echo "   Run: npx netlify-cli deploy --prod --dir=dist"
echo ""
echo "3. Manual Upload"
echo "   Upload the 'dist' folder to any static hosting service"
echo ""

# Ask user which option
read -p "Enter option number (1-3) or press Enter to skip: " option

case $option in
    1)
        echo ""
        echo "🚀 Deploying to Vercel..."
        npx vercel --prod
        ;;
    2)
        echo ""
        echo "🚀 Deploying to Netlify..."
        npx netlify-cli deploy --prod --dir=dist
        ;;
    3)
        echo ""
        echo "📁 Your build is ready in the 'dist' folder"
        echo "Upload it to any static hosting service!"
        ;;
    *)
        echo ""
        echo "ℹ️  Build ready! Run one of the deployment commands above when ready."
        ;;
esac

