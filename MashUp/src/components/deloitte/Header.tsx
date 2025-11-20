import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Search, Menu, X, MessageSquare, User } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
  onOpenChat?: () => void;
}

export function Header({ currentPage, onNavigate, onOpenChat }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const navItems = [
    { label: "Home", value: "home" },
    { label: "Content Hub", value: "content" },
    { label: "About", value: "about" },
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      onNavigate(`search?q=${encodeURIComponent(searchQuery)}`);
      setSearchQuery("");
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => onNavigate("home")}
          className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          aria-label="Deloitte Sustainability Hub Home"
        >
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-bold">D</span>
          </div>
          <span className="hidden sm:inline font-semibold">Sustainability Hub</span>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6" aria-label="Main navigation">
          {navItems.map((item) => (
            <button
              key={item.value}
              onClick={() => onNavigate(item.value)}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                currentPage === item.value
                  ? "text-primary"
                  : "text-muted-foreground"
              }`}
              aria-current={currentPage === item.value ? "page" : undefined}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Search Bar - Desktop */}
        <form onSubmit={handleSearch} className="hidden lg:flex items-center gap-2 flex-1 max-w-md mx-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search sustainability topics..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-9 h-10"
              aria-label="Search"
            />
          </div>
        </form>

        {/* Right Actions */}
        <div className="flex items-center gap-2">
          {/* Chat Button */}
          <Button
            variant="ghost"
            size="icon"
            onClick={onOpenChat}
            className="hidden sm:inline-flex"
            aria-label="Open AI Assistant"
          >
            <MessageSquare className="h-5 w-5" />
          </Button>

          {/* User Menu */}
          <Button variant="ghost" size="icon" aria-label="User menu">
            <User className="h-5 w-5" />
          </Button>

          {/* Mobile Menu */}
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" aria-label="Open menu">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px]">
              <div className="flex flex-col gap-6 mt-6">
                {/* Mobile Search */}
                <form onSubmit={handleSearch}>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      type="search"
                      placeholder="Search..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-9"
                      aria-label="Search"
                    />
                  </div>
                </form>

                {/* Mobile Navigation */}
                <nav className="flex flex-col gap-4" aria-label="Mobile navigation">
                  {navItems.map((item) => (
                    <button
                      key={item.value}
                      onClick={() => {
                        onNavigate(item.value);
                        setMobileMenuOpen(false);
                      }}
                      className={`text-left py-2 px-3 rounded-lg transition-colors ${
                        currentPage === item.value
                          ? "bg-primary/10 text-primary font-medium"
                          : "text-foreground hover:bg-muted"
                      }`}
                      aria-current={currentPage === item.value ? "page" : undefined}
                    >
                      {item.label}
                    </button>
                  ))}
                  <button
                    onClick={() => {
                      onOpenChat?.();
                      setMobileMenuOpen(false);
                    }}
                    className="text-left py-2 px-3 rounded-lg transition-colors text-foreground hover:bg-muted flex items-center gap-2"
                  >
                    <MessageSquare className="h-4 w-4" />
                    AI Assistant
                  </button>
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
