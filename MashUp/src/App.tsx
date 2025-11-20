import { useState, useEffect } from "react";
import { Header } from "./components/deloitte/Header";
import { Footer } from "./components/deloitte/Footer";
import { HomePage } from "./components/deloitte/HomePage";
import { ContentHubPage } from "./components/deloitte/ContentHubPage";
import { AboutPage } from "./components/deloitte/AboutPage";
import { SearchResultsPage } from "./components/deloitte/SearchResultsPage";
import { ChatInterface } from "./components/deloitte/ChatInterface";
import { Button } from "./components/ui/button";
import { MessageSquare, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

type Page = "home" | "content" | "about" | "search" | "chat";

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>("home");
  const [chatOpen, setChatOpen] = useState(false);

  // Parse URL on mount to support direct navigation
  useEffect(() => {
    const path = window.location.pathname.slice(1);
    if (path && ["home", "content", "about", "search", "chat"].includes(path)) {
      setCurrentPage(path as Page);
    }
  }, []);

  const handleNavigate = (page: string) => {
    // Handle search queries
    if (page.startsWith("search")) {
      setCurrentPage("search");
      window.history.pushState({}, "", `/${page}`);
      return;
    }

    const validPage = page as Page;
    setCurrentPage(validPage);
    window.history.pushState({}, "", `/${validPage}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleOpenChat = () => {
    setChatOpen(true);
  };

  const handleCloseChat = () => {
    setChatOpen(false);
  };

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <HomePage onNavigate={handleNavigate} onOpenChat={handleOpenChat} />;
      case "content":
        return <ContentHubPage onNavigate={handleNavigate} />;
      case "search":
        return <SearchResultsPage onNavigate={handleNavigate} />;
      case "about":
        return <AboutPage onNavigate={handleNavigate} onOpenChat={handleOpenChat} />;
      case "chat":
        return (
          <div className="container py-12">
            <div className="max-w-4xl mx-auto h-[700px] border rounded-lg overflow-hidden bg-card shadow-lg">
              <ChatInterface />
            </div>
          </div>
        );
      default:
        return <HomePage onNavigate={handleNavigate} onOpenChat={handleOpenChat} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Header */}
      <Header
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenChat={handleOpenChat}
      />

      {/* Main Content */}
      <main className="flex-1">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {renderPage()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Floating Chat Widget */}
      <AnimatePresence>
        {chatOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-4 right-4 z-50 w-[90vw] max-w-md h-[600px] bg-card border rounded-lg shadow-2xl overflow-hidden"
          >
            {/* Chat Header */}
            <div className="absolute top-0 right-0 p-2 z-10">
              <Button
                variant="ghost"
                size="icon"
                onClick={handleCloseChat}
                className="rounded-full"
                aria-label="Close chat"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
            
            {/* Chat Interface */}
            <div className="h-full">
              <ChatInterface />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Chat Button (when chat is closed) */}
      <AnimatePresence>
        {!chatOpen && currentPage !== "chat" && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-6 right-6 z-40"
          >
            <Button
              size="lg"
              onClick={handleOpenChat}
              className="rounded-full w-14 h-14 shadow-lg hover:shadow-xl transition-shadow"
              aria-label="Open AI Assistant"
            >
              <MessageSquare className="h-6 w-6" />
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}