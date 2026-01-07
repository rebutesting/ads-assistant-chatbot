#!/bin/bash

# Chatbot UI Development Server Launcher
# This script will install dependencies and start the development server

echo "🚀 Starting Ads Assistant Chatbot UI..."
echo ""

# Navigate to project directory
cd "$(dirname "$0")"

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
    echo ""
fi

# Start development server
echo "🌟 Starting development server..."
echo "📱 The app will open at http://localhost:3000"
echo ""
npm run dev

