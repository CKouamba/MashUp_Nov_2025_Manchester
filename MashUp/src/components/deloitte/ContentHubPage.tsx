import { useState } from "react";
import { ContentCard } from "./ContentCard";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { Search, Filter, SlidersHorizontal } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { motion } from "motion/react";

interface ContentHubPageProps {
  onNavigate: (page: string) => void;
}

const categories = [
  "All Topics",
  "Climate Action",
  "ESG Reporting",
  "Supply Chain",
  "Renewable Energy",
  "Waste Management",
  "Social Impact",
  "Green Building",
  "Sustainable Finance",
];

const allArticles = [
  {
    id: 1,
    title: "Achieving Net-Zero: Deloitte's 2030 Roadmap",
    description:
      "Discover our comprehensive strategy for reaching carbon neutrality by 2030, including renewable energy investments and sustainable operations.",
    category: "Climate Action",
    readTime: "8 min read",
    imageUrl: "https://images.unsplash.com/photo-1628206554160-63e8c921e398?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZW5ld2FibGUlMjBlbmVyZ3klMjBzb2xhciUyMHBhbmVsc3xlbnwxfHx8fDE3NjM1NjcyOTZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    featured: true,
  },
  {
    id: 2,
    title: "Sustainable Procurement Best Practices",
    description:
      "Learn how to integrate sustainability into your supply chain decisions and work with eco-conscious suppliers.",
    category: "Supply Chain",
    readTime: "5 min read",
    imageUrl: "https://images.unsplash.com/photo-1741119354246-c3176c6abfee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXN0YWluYWJsZSUyMGJ1c2luZXNzJTIwZ3JlZW4lMjBvZmZpY2V8ZW58MXx8fHwxNzYzNjA3ODMyfDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 3,
    title: "Understanding ESG Reporting Frameworks",
    description:
      "A comprehensive guide to environmental, social, and governance reporting standards including GRI, SASB, and TCFD.",
    category: "ESG Reporting",
    readTime: "6 min read",
    imageUrl: "https://images.unsplash.com/photo-1492370396726-bc8def10d9f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aW5kJTIwdHVyYmluZXMlMjBjbGVhbiUyMGVuZXJneXxlbnwxfHx8fDE3NjM1NjY2ODV8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 4,
    title: "Circular Economy Principles for Business",
    description:
      "Explore how circular economy models can reduce waste, save costs, and create sustainable value chains.",
    category: "Waste Management",
    readTime: "7 min read",
    imageUrl: "https://images.unsplash.com/photo-1605050714263-e8b7d424d945?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWN5Y2xpbmclMjBzdXN0YWluYWJpbGl0eSUyMHdhc3RlfGVufDF8fHx8MTc2MzY1MjI1Mnww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 5,
    title: "Forest Conservation and Biodiversity",
    description:
      "Learn about the critical role of forests in climate regulation and how we can support conservation efforts.",
    category: "Climate Action",
    readTime: "6 min read",
    imageUrl: "https://images.unsplash.com/photo-1763216337057-63e7ff50f58f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb3Jlc3QlMjBjb25zZXJ2YXRpb24lMjBuYXR1cmV8ZW58MXx8fHwxNzYzNjUyMjUyfDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 6,
    title: "Electric Vehicles in Corporate Fleets",
    description:
      "Transitioning to electric vehicles: implementation strategies, cost-benefit analysis, and infrastructure planning.",
    category: "Renewable Energy",
    readTime: "8 min read",
    imageUrl: "https://images.unsplash.com/photo-1593941707874-ef25b8b4a92b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpYyUyMHZlaGljbGUlMjBjaGFyZ2luZ3xlbnwxfHx8fDE3NjM2MzcxMDZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 7,
    title: "Green Building Certifications Guide",
    description:
      "Navigate LEED, BREEAM, and other green building standards to create sustainable workspaces.",
    category: "Green Building",
    readTime: "5 min read",
    imageUrl: "https://images.unsplash.com/photo-1741119354246-c3176c6abfee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXN0YWluYWJsZSUyMGJ1c2luZXNzJTIwZ3JlZW4lMjBvZmZpY2V8ZW58MXx8fHwxNzYzNjA3ODMyfDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 8,
    title: "Community Engagement for Sustainability",
    description:
      "Best practices for engaging stakeholders and communities in sustainability initiatives.",
    category: "Social Impact",
    readTime: "6 min read",
    imageUrl: "https://images.unsplash.com/photo-1628206554160-63e8c921e398?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZW5ld2FibGUlMjBlbmVyZ3klMjBzb2xhciUyMHBhbmVsc3xlbnwxfHx8fDE3NjM1NjcyOTZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 9,
    title: "Sustainable Finance and Green Bonds",
    description:
      "Understanding green financing instruments and how they support environmental projects.",
    category: "Sustainable Finance",
    readTime: "9 min read",
    imageUrl: "https://images.unsplash.com/photo-1492370396726-bc8def10d9f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aW5kJTIwdHVyYmluZXMlMjBjbGVhbiUyMGVuZXJneXxlbnwxfHx8fDE3NjM1NjY2ODV8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
];

export function ContentHubPage({ onNavigate }: ContentHubPageProps) {
  const [selectedCategory, setSelectedCategory] = useState("All Topics");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("recent");

  const filteredArticles = allArticles.filter((article) => {
    const matchesCategory =
      selectedCategory === "All Topics" || article.category === selectedCategory;
    const matchesSearch =
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="w-full py-12">
      <div className="container">
        {/* Header */}
        <div className="mb-8">
          <h1 className="mb-2">Content Hub</h1>
          <p className="text-muted-foreground">
            Browse our comprehensive library of sustainability resources
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          {/* Search Bar */}
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9"
                aria-label="Search articles"
              />
            </div>
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-full sm:w-[180px]">
                <SlidersHorizontal className="h-4 w-4 mr-2" />
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="recent">Most Recent</SelectItem>
                <SelectItem value="popular">Most Popular</SelectItem>
                <SelectItem value="relevant">Most Relevant</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Badge
                key={category}
                variant={selectedCategory === category ? "default" : "secondary"}
                className="cursor-pointer hover:opacity-80 transition-opacity"
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-sm text-muted-foreground">
            {filteredArticles.length} {filteredArticles.length === 1 ? "article" : "articles"} found
            {searchQuery && ` for "${searchQuery}"`}
          </p>
        </div>

        {/* Articles Grid */}
        {filteredArticles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredArticles.map((article, index) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <ContentCard
                  {...article}
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
              <h3 className="mb-2">No articles found</h3>
              <p className="text-muted-foreground mb-6">
                Try adjusting your search or filter to find what you're looking for.
              </p>
              <Button
                variant="outline"
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("All Topics");
                }}
              >
                Clear Filters
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
