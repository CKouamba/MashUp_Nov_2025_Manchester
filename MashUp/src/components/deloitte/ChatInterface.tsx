import { useState, useRef, useEffect } from "react";
import { ChatMessage } from "./ChatMessage";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";
import { Send, Sparkles, AlertCircle } from "lucide-react";
import { Badge } from "../ui/badge";
import { ScrollArea } from "../ui/scroll-area";
import { sendMessageToClaude, buildConversationHistory } from "../../utils/claudeApi";

interface Message {
  id: string;
  text: string;
  isAI: boolean;
  timestamp: string;
}

const suggestedPrompts = [
  "What is Deloitte's carbon neutrality goal?",
  "How can I reduce my carbon footprint?",
  "Tell me about sustainable procurement",
  "What are ESG reporting standards?",
];

export function ChatInterface() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hello! I'm your AI sustainability assistant powered by Claude. How can I help you today?",
      isAI: true,
      timestamp: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    if (scrollRef.current) {
      const scrollElement = scrollRef.current.querySelector('[data-radix-scroll-area-viewport]');
      if (scrollElement) {
        scrollElement.scrollTop = scrollElement.scrollHeight;
      }
    }
  }, [messages, isTyping]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: input,
      isAI: false,
      timestamp: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);
    setError(null);

    try {
      // Build conversation history for Claude
      const conversationHistory = buildConversationHistory(messages);
      
      // Call Claude API
      const response = await sendMessageToClaude(input, conversationHistory);
      
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: response,
        isAI: true,
        timestamp: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      };
      setMessages((prev) => [...prev, aiResponse]);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "Failed to get response from Claude";
      setError(errorMessage);
      console.error("Chat error:", err);
      
      // Add error message to chat
      const errorResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: `Sorry, I encountered an error: ${errorMessage}. Please check your API configuration and try again.`,
        isAI: true,
        timestamp: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      };
      setMessages((prev) => [...prev, errorResponse]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handlePromptClick = (prompt: string) => {
    setInput(prompt);
    textareaRef.current?.focus();
  };

  return (
    <div className="flex flex-col h-full">
      {/* Chat Header */}
      <div className="border-b p-4 bg-muted/30">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
            <Sparkles className="h-5 w-5 text-primary-foreground" />
          </div>
          <div>
            <h3 className="font-semibold">AI Sustainability Assistant</h3>
            <p className="text-sm text-muted-foreground">
              Powered by Claude AI
            </p>
          </div>
        </div>
      </div>

      {/* Error Alert */}
      {error && (
        <div className="border-b p-4 bg-destructive/10 text-destructive flex gap-2">
          <AlertCircle className="h-5 w-5 flex-shrink-0 mt-0.5" />
          <div className="text-sm">{error}</div>
        </div>
      )}

      {/* Messages Area */}
      <ScrollArea ref={scrollRef} className="flex-1 p-4">
        <div className="space-y-4 pb-4">
          {messages.map((message) => (
            <ChatMessage
              key={message.id}
              message={message.text}
              isAI={message.isAI}
              timestamp={message.timestamp}
            />
          ))}
          {isTyping && (
            <div className="flex gap-3">
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                <Sparkles className="h-4 w-4 text-primary-foreground" />
              </div>
              <div className="bg-muted rounded-2xl rounded-tl-sm px-4 py-3">
                <div className="flex gap-1">
                  <div className="w-2 h-2 bg-muted-foreground/50 rounded-full animate-bounce" />
                  <div
                    className="w-2 h-2 bg-muted-foreground/50 rounded-full animate-bounce"
                    style={{ animationDelay: "0.1s" }}
                  />
                  <div
                    className="w-2 h-2 bg-muted-foreground/50 rounded-full animate-bounce"
                    style={{ animationDelay: "0.2s" }}
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </ScrollArea>

      {/* Suggested Prompts */}
      {messages.length === 1 && (
        <div className="px-4 pb-2">
          <p className="text-sm text-muted-foreground mb-2">Suggested questions:</p>
          <div className="flex flex-wrap gap-2">
            {suggestedPrompts.map((prompt, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
                onClick={() => handlePromptClick(prompt)}
              >
                {prompt}
              </Badge>
            ))}
          </div>
        </div>
      )}

      {/* Input Area */}
      <div className="border-t p-4 bg-background">
        <div className="flex gap-2">
          <Textarea
            ref={textareaRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Ask about sustainability..."
            className="min-h-[60px] max-h-[120px] resize-none"
            disabled={isTyping}
            aria-label="Message input"
          />
          <Button
            onClick={handleSend}
            disabled={!input.trim() || isTyping}
            size="icon"
            className="h-[60px] w-[60px] flex-shrink-0"
            aria-label="Send message"
          >
            <Send className="h-5 w-5" />
          </Button>
        </div>
        <p className="text-xs text-muted-foreground mt-2">
          Press Enter to send, Shift + Enter for new line
        </p>
      </div>
    </div>
  );
}
