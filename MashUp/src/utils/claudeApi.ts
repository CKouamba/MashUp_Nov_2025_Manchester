// Claude API Service
// Handles communication with the Anthropic Claude API

const ANTHROPIC_BASE_URL = import.meta.env.VITE_ANTHROPIC_BASE_URL || "https://api.anthropic.com";
const ANTHROPIC_AUTH_TOKEN = import.meta.env.VITE_ANTHROPIC_AUTH_TOKEN;
const ANTHROPIC_MODEL = import.meta.env.VITE_ANTHROPIC_DEFAULT_SONNET_MODEL || "claude-sonnet-4-20250514";

interface ClaudeMessage {
  role: "user" | "assistant";
  content: string;
}

interface ClaudeApiResponse {
  content: Array<{
    type: string;
    text: string;
  }>;
  usage?: {
    input_tokens: number;
    output_tokens: number;
  };
}

export async function sendMessageToClaude(
  userMessage: string,
  conversationHistory: ClaudeMessage[] = []
): Promise<string> {
  if (!ANTHROPIC_AUTH_TOKEN) {
    throw new Error("ANTHROPIC_AUTH_TOKEN is not configured. Please set it in .env.local");
  }

  // Build the messages array with conversation history
  const messages: ClaudeMessage[] = [
    ...conversationHistory,
    {
      role: "user",
      content: userMessage,
    },
  ];

  try {
    const response = await fetch(`${ANTHROPIC_BASE_URL}/v1/messages`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": ANTHROPIC_AUTH_TOKEN,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: ANTHROPIC_MODEL,
        max_tokens: 1024,
        system: `You are a helpful AI sustainability assistant for Deloitte. 
Your role is to provide accurate, actionable information about sustainability, 
environmental responsibility, ESG (Environmental, Social, and Governance) practices, 
and corporate sustainability initiatives. 

Keep responses concise (2-3 sentences), professional, and aligned with Deloitte's 
sustainability commitments. Focus on practical advice and industry best practices.`,
        messages: messages,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(
        `Claude API error: ${response.status} - ${JSON.stringify(errorData)}`
      );
    }

    const data: ClaudeApiResponse = await response.json();

    // Extract the text response from Claude
    const textContent = data.content.find((block) => block.type === "text");
    if (!textContent) {
      throw new Error("No text content in Claude response");
    }

    return textContent.text;
  } catch (error) {
    console.error("Error calling Claude API:", error);
    throw error;
  }
}

export function buildConversationHistory(
  messages: Array<{ isAI: boolean; text: string }>
): ClaudeMessage[] {
  return messages.map((msg) => ({
    role: msg.isAI ? "assistant" : "user",
    content: msg.text,
  }));
}
