# Claude AI Integration Guide

## Overview
Your chat interface has been successfully integrated with the Claude API. The assistant now uses real AI responses powered by Anthropic's Claude model instead of mock data.

## Setup Instructions

### 1. Environment Variables
The `.env.local` file has been created with the following template:

```
VITE_ANTHROPIC_BASE_URL=https://pulse.deloitte.com
VITE_ANTHROPIC_AUTH_TOKEN=YOUR_API_KEY
VITE_ANTHROPIC_MODEL=sonnet
VITE_ANTHROPIC_DEFAULT_SONNET_MODEL=claude-sonnet-4-20250514
```

**Important:** Replace `YOUR_API_KEY` with your actual Anthropic API key from `~/.claude/settings.json`

### 2. File Structure
The integration consists of:

- **`.env.local`** - Environment variables for API configuration
- **`src/vite-env.d.ts`** - TypeScript type definitions for environment variables
- **`src/utils/claudeApi.ts`** - Claude API service with:
  - `sendMessageToClaude()` - Sends messages to Claude API
  - `buildConversationHistory()` - Formats message history for the API
- **`src/components/deloitte/ChatInterface.tsx`** - Updated chat component using real Claude API

### 3. Running the Application

```bash
npm run dev
```

The dev server will start on port 3000 and automatically open in your browser.

### 4. Testing the Chat

1. Open the chat interface in the app
2. Type a sustainability-related question
3. The assistant will send your message to Claude API
4. Wait for the response from Claude (2-3 seconds typically)
5. The response will appear in the chat

### 5. Features

- **Conversation History**: The chat maintains conversation context, so Claude understands previous messages
- **Error Handling**: If the API fails, you'll see a clear error message
- **System Prompt**: Claude is configured as a sustainability assistant for Deloitte
- **Suggested Prompts**: Quick-start questions appear when you open the chat

## API Configuration

### System Prompt
The assistant is configured with this system prompt:
```
You are a helpful AI sustainability assistant for Deloitte. 
Your role is to provide accurate, actionable information about sustainability, 
environmental responsibility, ESG (Environmental, Social, and Governance) practices, 
and corporate sustainability initiatives. 

Keep responses concise (2-3 sentences), professional, and aligned with Deloitte's 
sustainability commitments. Focus on practical advice and industry best practices.
```

### Model Settings
- **Model**: Claude Sonnet 4 (claude-sonnet-4-20250514)
- **Max Tokens**: 1024
- **API Version**: 2023-06-01

## Troubleshooting

### "ANTHROPIC_AUTH_TOKEN is not configured"
- Ensure your `.env.local` file contains the correct API key
- Vite requires a server restart after `.env.local` changes
- Make sure the key is from your Deloitte Claude settings

### "Claude API error: 401"
- Your API token is invalid or expired
- Check that you've copied the correct token from `~/.claude/settings.json`

### "No text content in Claude response"
- The API response format was unexpected
- Check the browser console for detailed error logs

### Chat is not updating
- Check that the dev server is running: `npm run dev`
- Clear browser cache and reload
- Check browser DevTools Network tab for failed requests

## Security Notes

⚠️ **Important**: 
- Never commit `.env.local` to version control
- Keep your API key secret
- The file `.env.local` is already in `.gitignore` (verify this)

## Next Steps

1. Update `VITE_ANTHROPIC_AUTH_TOKEN` with your actual API key
2. Run `npm run dev` to start the dev server
3. Test the chat interface with a sustainability question
4. Monitor the browser console for any errors
5. Deploy to production once tested

## Architecture

```
ChatInterface Component
    ↓
handleSend() function
    ↓
sendMessageToClaude() API call
    ↓
Anthropic Claude API
    ↓
Response → buildConversationHistory() 
    ↓
Display in chat
```

The integration maintains full conversation history, allowing Claude to provide contextual responses that reference previous messages.
