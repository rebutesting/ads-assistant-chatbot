# 🤖 Ads Assistant - Advanced Chatbot UI

A modern, feature-rich chatbot interface for managing and optimizing advertising campaigns. Built with React, TypeScript, and Tailwind CSS.

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)
![React](https://img.shields.io/badge/React-18.3-blue.svg)
![TypeScript](https://img.shields.io/badge/TypeScript-5.7-blue.svg)

## ✨ Features

- **🎨 Beautiful UI**: Modern, clean design with smooth animations and transitions
- **💬 Conversation Flows**: Pre-built workflows for common ad management tasks
- **📊 Rich Components**: Metrics displays, campaign lists, performance cards, and more
- **🎯 Quick Actions**: Easy access to frequently used features
- **📱 Responsive**: Optimized for mobile-first experience (max-width: 440px)
- **♿ Accessible**: Built with accessibility in mind using Radix UI primitives
- **⚡ Fast**: Powered by Vite for lightning-fast development and builds

## 🚀 Quick Start

### Prerequisites

- Node.js >= 18.0.0
- npm >= 9.0.0

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

The application will be available at `http://localhost:3000`

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── MessageBubble.tsx
│   ├── QuickActions.tsx
│   ├── OptionsButtons.tsx
│   ├── DataTable.tsx
│   ├── SuccessMessage.tsx
│   ├── CampaignList.tsx
│   ├── SuggestionsList.tsx
│   ├── PerformanceCard.tsx
│   └── MetricsDisplay.tsx
├── lib/                # Utility functions
│   └── utils.ts
├── styles/             # Global styles
│   └── globals.css
├── types.ts            # TypeScript type definitions
├── conversationFlows.ts # Pre-defined conversation workflows
├── App.tsx             # Main application component
└── main.tsx            # Application entry point
```

## 🎯 Key Components

### MessageBubble
Displays user and bot messages with support for:
- Rich content (metrics, campaigns, suggestions)
- Interactive options
- Data tables and performance cards

### QuickActions
Bottom action bar with quick access to:
- Fix My Ads
- Edit Campaign
- Get Insights
- Create Campaign
- Optimize Campaigns
- Troubleshoot

### Conversation Flows
Pre-built workflows for:
- **Fix My Ads**: Diagnose and resolve ad delivery issues
- **Edit Campaign**: Modify campaign settings and budgets
- **Get Insights**: View performance analytics and recommendations
- **Create Campaign**: Step-by-step campaign creation wizard
- **Optimize Campaigns**: Portfolio-wide optimization suggestions
- **Troubleshoot**: Debug campaign performance problems

## 🎨 Design System

### Colors
- **Primary**: Purple gradient (`from-purple-500 to-purple-600`)
- **Secondary**: Light gray backgrounds
- **Success**: Green tones
- **Warning**: Amber/yellow tones
- **Error**: Red tones

### Typography
- **Font Family**: System font stack with fallbacks
- **Sizes**: Responsive text sizing (xs, sm, base, lg, xl, 2xl, 3xl, 4xl)
- **Weights**: 400 (normal), 500 (medium), 700 (bold)

### Spacing
- Consistent spacing scale using Tailwind's default spacing
- Border radius: 0.75rem (12px) default

### Animations
- Smooth transitions (300ms ease-out)
- Slide-in animations for messages
- Fade-in animations for components
- Hover states with scale and translate effects

## 🛠️ Tech Stack

- **Framework**: React 18.3
- **Language**: TypeScript 5.7
- **Build Tool**: Vite 6.3
- **Styling**: Tailwind CSS 3.4
- **UI Components**: Radix UI
- **Icons**: Lucide React
- **Utilities**: clsx, tailwind-merge

## 📝 Usage Examples

### Adding a New Conversation Flow

```typescript
// In conversationFlows.ts
export const conversationFlows: ConversationFlows = {
  'Your New Flow': {
    userMessage: "User's initial message",
    steps: [
      {
        botMessage: "Bot's response",
        options: ['Option 1', 'Option 2'],
        // Additional content (metrics, campaigns, etc.)
      },
      // More steps...
    ],
    completionMessage: "Flow completion message"
  },
  // Other flows...
};
```

### Creating a Custom Component

```typescript
import React, { memo } from 'react';
import { cn } from '@/lib/utils';

interface MyComponentProps {
  // Props
}

export const MyComponent = memo(({ ...props }: MyComponentProps) => {
  return (
    <div className={cn(
      "base-classes",
      "hover:hover-classes",
      "animate-in fade-in duration-300"
    )}>
      {/* Component content */}
    </div>
  );
});

MyComponent.displayName = 'MyComponent';
```

## 🔧 Configuration

### Vite Config
See `vite.config.ts` for build and development server configuration.

### TypeScript Config
See `tsconfig.json` for TypeScript compiler options.

### Tailwind Config
See `tailwind.config.ts` for Tailwind CSS customization.

## 🎓 Learning Resources

- [React Documentation](https://react.dev)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Vite Documentation](https://vitejs.dev)
- [Radix UI Documentation](https://www.radix-ui.com)

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 🐛 Issues

If you find a bug or have a feature request, please open an issue on the GitHub repository.

---

**Built with ❤️ using React, TypeScript, and Tailwind CSS**
