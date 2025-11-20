import { useState, useEffect } from "react";
import { ContentCard } from "./ContentCard";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { Search, X } from "lucide-react";
import { motion } from "motion/react";

interface SearchResultsPageProps {
  onNavigate: (page: string) => void;
  initialQuery?: string;
}

const allContent = [
  {
    id: 1,
    title: "Achieving Net-Zero: Deloitte's 2030 Roadmap",
    description:
      "Discover our comprehensive strategy for reaching carbon neutrality by 2030, including renewable energy investments and sustainable operations.",
    category: "Climate Action",
    readTime: "8 min read",
    imageUrl: "https://images.unsplash.com/photo-1628206554160-63e8c921e398?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZW5ld2FibGUlMjBlbmVyZ3klMjBzb2xhciUyMHBhbmVsc3xlbnwxfHx8fDE3NjM1NjcyOTZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    keywords: ["carbon", "neutrality", "net-zero", "2030", "climate"],
  },
  {
    id: 2,
    title: "Sustainable Procurement Best Practices",
    description:
      "Learn how to integrate sustainability into your supply chain decisions and work with eco-conscious suppliers.",
    category: "Supply Chain",
    readTime: "5 min read",
    imageUrl: "https://images.unsplash.com/photo-1741119354246-c3176c6abfee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXN0YWluYWJsZSUyMGJ1c2luZXNzJTIwZ3JlZW4lMjBvZmZpY2V8ZW58MXx8fHwxNzYzNjA3ODMyfDA&ixlib=rb-4.1.0&q=80&w=1080",
    keywords: ["procurement", "supply chain", "suppliers", "sustainable"],
  },
  {
    id: 3,
    title: "Understanding ESG Reporting Frameworks",
    description:
      "A comprehensive guide to environmental, social, and governance reporting standards including GRI, SASB, and TCFD.",
    category: "ESG Reporting",
    readTime: "6 min read",
    imageUrl: "https://images.unsplash.com/photo-1492370396726-bc8def10d9f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aW5kJTIwdHVyYmluZXMlMjBjbGVhbiUyMGVuZXJneXxlbnwxfHx8fDE3NjM1NjY2ODV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    keywords: ["esg", "reporting", "gri", "sasb", "tcfd", "governance"],
  },
  {
    id: 4,
    title: "Circular Economy Principles for Business",
    description:
      "Explore how circular economy models can reduce waste, save costs, and create sustainable value chains.",
    category: "Waste Management",
    readTime: "7 min read",
    imageUrl: "https://images.unsplash.com/photo-1605050714263-e8b7d424d945?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWN5Y2xpbmclMjBzdXN0YWluYWJpbGl0eSUyMHdhc3RlfGVufDF8fHx8MTc2MzY1MjI1Mnww&ixlib=rb-4.1.0&q=80&w=1080",
    keywords: ["circular economy", "waste", "recycling", "reduction"],
  },
  {
    id: 5,
    title: "Carbon Offsetting Strategies",
    description:
      "Learn about effective carbon offset programs and how to calculate and neutralize your carbon footprint.",
    category: "Climate Action",
    readTime: "6 min read",
    imageUrl: "https://images.unsplash.com/photo-1763216337057-63e7ff50f58f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb3Jlc3QlMjBjb25zZXJ2YXRpb24lMjBuYXR1cmV8ZW58MXx8fHwxNzYzNjUyMjUyfDA&ixlib=rb-4.1.0&q=80&w=1080",
    keywords: ["carbon", "offsetting", "footprint", "neutralize"],
  },
  {
    id: 6,
    title: "Renewable Energy Implementation Guide",
    description:
      "Step-by-step guide to transitioning to renewable energy sources in your operations and facilities.",
    category: "Renewable Energy",
    readTime: "8 min read",
    imageUrl: "https://images.unsplash.com/photo-1628206554160-63e8c921e398?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZW5ld2FibGUlMjBlbmVyZ3klMjBzb2xhciUyMHBhbmVsc3xlbnwxfHx8fDE3NjM1NjcyOTZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    keywords: ["renewable", "energy", "solar", "wind", "clean"],
  },
  {
    id: 7,
    title: "Green Building Standards Overview",
    description:
      "Navigate LEED, BREEAM, and other green building certifications to create sustainable workspaces.",
    category: "Green Building",
    readTime: "5 min read",
    imageUrl: "https://images.unsplash.com/photo-1741119354246-c3176c6abfee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXN0YWluYWJsZSUyMGJ1c2luZXNzJTIwZ3JlZW4lMjBvZmZpY2V8ZW58MXx8fHwxNzYzNjA3ODMyfDA&ixlib=rb-4.1.0&q=80&w=1080",
    keywords: ["green building", "leed", "breeam", "standards"],
  },
  {
    id: 8,
    title: "Sustainable Travel Policies",
    description:
      "Best practices for reducing travel-related emissions and implementing sustainable business travel programs.",
    category: "Climate Action",
    readTime: "6 min read",
    imageUrl: "https://images.unsplash.com/photo-1593941707874-ef25b8b4a92b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpYyUyMHZlaGljbGUlMjBjaGFyZ2luZ3xlbnwxfHx8fDE3NjM2MzcxMDZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    keywords: ["sustainable", "travel", "emissions", "business"],
  },
];

export function SearchResultsPage({ onNavigate, initialQuery = "" }: SearchResultsPageProps) {
  const [searchQuery, setSearchQuery] = useState(initialQuery);
  const [results, setResults] = useState(allContent);

  useEffect(() => {
    // Parse URL for query parameter
    const urlParams = new URLSearchParams(window.location.search);
    const query = urlParams.get("q");
    if (query) {
      setSearchQuery(query);
      performSearch(query);
    }
  }, []);

  const performSearch = (query: string) => {
    if (!query.trim()) {
      setResults(allContent);
      return;
    }

    const lowerQuery = query.toLowerCase();
    const filtered = allContent.filter(
      (item) =>
        item.title.toLowerCase().includes(lowerQuery) ||
        item.description.toLowerCase().includes(lowerQuery) ||
        item.category.toLowerCase().includes(lowerQuery) ||
        item.keywords.some((keyword) => keyword.toLowerCase().includes(lowerQuery))
    );
    setResults(filtered);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    performSearch(searchQuery);
    window.history.pushState({}, "", `/search?q=${encodeURIComponent(searchQuery)}`);
  };

  const handleClearSearch = () => {
    setSearchQuery("");
    setResults(allContent);
    window.history.pushState({}, "", "/search");
  };

  return (
    <div className="w-full py-12">
      <div className="container">
        {/* Header */}
        <div className="mb-8">
          <h1 className="mb-2">Search Results</h1>
          {searchQuery && (
            <p className="text-muted-foreground">
              Results for <strong>"{searchQuery}"</strong>
            </p>
          )}
        </div>

        {/* Search Bar */}
        <form onSubmit={handleSearch} className="mb-8">
          <div className="flex gap-2">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search sustainability topics..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9"
                aria-label="Search"
              />
            </div>
            {searchQuery && (
              <Button
                type="button"
                variant="outline"
                onClick={handleClearSearch}
                aria-label="Clear search"
              >
                <X className="h-4 w-4" />
              </Button>
            )}
            <Button type="submit">Search</Button>
          </div>
        </form>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-sm text-muted-foreground">
            {results.length} {results.length === 1 ? "result" : "results"} found
          </p>
        </div>

        {/* Results Grid */}
        {results.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {results.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <ContentCard
                  title={item.title}
                  description={item.description}
                  category={item.category}
                  readTime={item.readTime}
                  imageUrl={item.imageUrl}
                  onClick={() => onNavigate("content")}
                />
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="max-w-md mx-auto">
              <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="h-8 w-8 text-muted-foreground" />
              </div>
              <h3 className="mb-2">No results found</h3>
              <p className="text-muted-foreground mb-6">
                Try adjusting your search terms or browse our content hub.
              </p>
              <div className="flex gap-2 justify-center">
                <Button variant="outline" onClick={handleClearSearch}>
                  Clear Search
                </Button>
                <Button onClick={() => onNavigate("content")}>
                  Browse Content
                </Button>
              </div>
            </div>
          </div>
        )}

        {/* AI Suggestion Box */}
        {searchQuery && results.length > 0 && (
          <div className="mt-8 p-6 bg-primary/5 border border-primary/20 rounded-lg">
            <h4 className="mb-2">Need more specific information?</h4>
            <p className="text-muted-foreground mb-4">
              Ask our AI assistant for personalized answers to your sustainability questions.
            </p>
            <Button variant="default" onClick={() => onNavigate("chat")}>
              Ask AI Assistant
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
