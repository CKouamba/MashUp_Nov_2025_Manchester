# Deloitte Sustainability Hub

An AI-powered sustainability information website designed for Deloitte employees. This modern, accessible web application provides comprehensive resources, real-time insights, and an intelligent AI assistant to help employees engage with sustainability initiatives.

## Features

### 🏠 Homepage
- Hero section with clear value proposition
- Key impact statistics showcasing Deloitte's sustainability progress
- Featured content cards highlighting important topics
- Trending topics section for quick discovery
- Call-to-action sections to drive engagement

### 📚 Content Hub
- Comprehensive library of sustainability resources
- Category-based filtering (Climate Action, ESG, Supply Chain, etc.)
- Search functionality to find relevant articles
- Sort options (Recent, Popular, Relevant)
- Responsive grid layout for optimal viewing on all devices

### 🔍 Search Results
- Advanced search with keyword matching
- AI suggestion prompts for deeper exploration
- Clear visual feedback for search results
- Empty state handling with helpful suggestions

### 🤖 AI Chat Assistant
- Intelligent AI-powered assistant for instant answers
- Pre-suggested prompts to get started quickly
- Real-time conversation with typing indicators
- Persistent chat history within session
- Available as floating widget or dedicated page
- Smooth animations and transitions

### ℹ️ About Page
- Platform mission and overview
- Impact statistics and metrics
- Feature highlights
- Timeline of sustainability milestones
- Team and contact information

## Design System

### Color Palette
- **Primary Green**: `#86BC25` - Deloitte's signature green
- **Secondary Blue**: `#0076A8` - Professional blue accent
- **Accent Green**: `#00A859` - Sustainability-focused green
- **Success Green**: `#00A859` - Positive actions and metrics
- **Warning Yellow**: `#FDB913` - Alerts and important notices

### Typography
- **Font Family**: Inter (sans-serif)
- **Minimum Size**: 16px (WCAG AA compliance)
- **Scale**: Responsive hierarchy from mobile (28px) to desktop (40px)
- **Weights**: 400 (regular), 500 (medium), 600 (semibold), 700 (bold)

### Spacing System
Based on 8px grid:
- 4px, 8px, 16px, 24px, 32px, 48px, 64px

### Accessibility Features
- WCAG 2.1 AA compliant color contrast
- Semantic HTML structure
- ARIA labels and landmarks
- Focus visible indicators
- Keyboard navigation support
- Reduced motion support for accessibility preferences
- High contrast mode support

## Components

### Navigation
- **Header**: Sticky navigation with search and user menu
- **Footer**: Links, social media, and company information
- **Mobile Menu**: Sheet component for responsive navigation

### Content Cards
- **ContentCard**: Article preview with image, category, and read time
- **StatCard**: Metric display with icon, value, and trend indicator

### Chat
- **ChatInterface**: Full chat experience with message history
- **ChatMessage**: Individual message bubbles for user and AI
- Suggested prompts and quick actions

### Layout
- **Container**: Responsive max-width container
- **Grid System**: Flexible grid layouts (1, 2, 3, 4 columns)
- **Sections**: Properly spaced page sections

## Responsive Breakpoints

- **Mobile**: 320px - 767px
- **Tablet**: 768px - 1023px
- **Desktop**: 1024px+

## Technology Stack

- **React**: UI framework
- **TypeScript**: Type safety
- **Tailwind CSS v4**: Utility-first styling
- **Motion (Framer Motion)**: Smooth animations
- **Lucide React**: Icon library
- **ShadCN UI**: Component library

## Project Structure

```
/
├── components/
│   ├── deloitte/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── HomePage.tsx
│   │   ├── ContentHubPage.tsx
│   │   ├── SearchResultsPage.tsx
│   │   ├── AboutPage.tsx
│   │   ├── ChatInterface.tsx
│   │   ├── ChatMessage.tsx
│   │   ├── ContentCard.tsx
│   │   └── StatCard.tsx
│   ├── ui/ (ShadCN components)
│   └── figma/
│       └── ImageWithFallback.tsx
├── styles/
│   ├── globals.css (Design system tokens)
│   └── fonts.css (Typography)
├── App.tsx (Main application with routing)
└── index.html
```

## Usage

### Navigation
The app uses client-side routing with the following pages:
- `/home` - Homepage
- `/content` - Content Hub
- `/search` - Search Results (with query params)
- `/about` - About page
- `/chat` - AI Assistant (dedicated page)

### Floating Chat Widget
The AI assistant is available as a floating action button on all pages. Click to open the chat widget, which appears as an overlay without navigating away from the current page.

### Search
Use the search bar in the header or navigate to the search page directly. The search functionality supports:
- Title matching
- Description matching
- Category matching
- Keyword matching

### Accessibility
- Use Tab key to navigate between interactive elements
- All buttons and links have proper ARIA labels
- Screen reader friendly with semantic HTML
- Supports keyboard shortcuts (Enter to submit, Shift+Enter for new line in chat)

## Future Enhancements

- User authentication and personalization
- Real-time data integration
- Advanced analytics and reporting
- Multi-language support
- Dark mode toggle (currently light mode)
- Bookmark and save functionality
- Comments and community features
- Newsletter integration
- File downloads (PDFs, reports)
- Calendar integration for events

## Performance Optimizations

- Lazy loading for images
- Optimized animations with reduced motion support
- Efficient re-rendering with React hooks
- Debounced search inputs
- Code splitting for faster initial loads

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

---

Built with ❤️ for a sustainable future
