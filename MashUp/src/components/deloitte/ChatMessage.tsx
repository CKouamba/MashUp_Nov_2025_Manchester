import { Bot, User } from "lucide-react";
import { motion } from "motion/react";

interface ChatMessageProps {
  message: string;
  isAI: boolean;
  timestamp?: string;
}

export function ChatMessage({ message, isAI, timestamp }: ChatMessageProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={`flex gap-3 ${isAI ? "" : "flex-row-reverse"}`}
    >
      {/* Avatar */}
      <div
        className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
          isAI ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground"
        }`}
        aria-hidden="true"
      >
        {isAI ? <Bot className="h-4 w-4" /> : <User className="h-4 w-4" />}
      </div>

      {/* Message Content */}
      <div
        className={`flex-1 max-w-[80%] ${
          isAI ? "items-start" : "items-end"
        } flex flex-col gap-1`}
      >
        <div
          className={`rounded-2xl px-4 py-3 ${
            isAI
              ? "bg-muted text-foreground rounded-tl-sm"
              : "bg-primary text-primary-foreground rounded-tr-sm"
          }`}
        >
          <p className="whitespace-pre-wrap break-words">{message}</p>
        </div>
        {timestamp && (
          <span className="text-xs text-muted-foreground px-2">
            {timestamp}
          </span>
        )}
      </div>
    </motion.div>
  );
}
