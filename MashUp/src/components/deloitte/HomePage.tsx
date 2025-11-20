import { Button } from "../ui/button";
import { ContentCard } from "./ContentCard";
import { StatCard } from "./StatCard";
import { Badge } from "../ui/badge";
import { Leaf, TrendingUp, Users, Award, Search, MessageSquare, ArrowRight } from "lucide-react";
import { motion } from "motion/react";

interface HomePageProps {
  onNavigate: (page: string) => void;
  onOpenChat: () => void;
}

const featuredContent = [
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
    category: "ESG",
    readTime: "6 min read",
    imageUrl: "https://images.unsplash.com/photo-1492370396726-bc8def10d9f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aW5kJTIwdHVyYmluZXMlMjBjbGVhbiUyMGVuZXJneXxlbnwxfHx8fDE3NjM1NjY2ODV8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
];

const stats = [
  {
    title: "Carbon Reduction",
    value: "45%",
    subtitle: "since 2019",
    icon: Leaf,
    trend: { value: "12% this year", positive: true },
    color: "primary" as const,
  },
  {
    title: "Employee Engagement",
    value: "12,500+",
    subtitle: "active participants",
    icon: Users,
    color: "secondary" as const,
  },
  {
    title: "Sustainable Projects",
    value: "250+",
    subtitle: "initiatives launched",
    icon: TrendingUp,
    trend: { value: "50 this quarter", positive: true },
    color: "accent" as const,
  },
  {
    title: "Certifications",
    value: "15",
    subtitle: "global standards",
    icon: Award,
    color: "success" as const,
  },
];

const trendingTopics = [
  "Carbon Offsetting",
  "Circular Economy",
  "Green Building Standards",
  "Renewable Energy",
  "Waste Reduction",
  "Sustainable Travel",
];

export function HomePage({ onNavigate, onOpenChat }: HomePageProps) {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 overflow-hidden bg-gradient-to-br from-primary/5 via-accent/5 to-background">
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center space-y-6"
          >
            <Badge className="mb-4" variant="secondary">
              AI-Powered Sustainability Hub
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl">
              Building a Sustainable Future{" "}
              <span className="text-primary">Together</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Access AI-powered insights, best practices, and resources to drive
              sustainability across Deloitte. Get instant answers from our
              intelligent assistant.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button
                size="lg"
                onClick={onOpenChat}
                className="gap-2"
              >
                <MessageSquare className="h-5 w-5" />
                Ask AI Assistant
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => onNavigate("content")}
                className="gap-2"
              >
                <Search className="h-5 w-5" />
                Explore Content
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -top-1/2 -right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-1/2 -left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 border-y bg-muted/30">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <StatCard {...stat} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Content */}
      <section className="py-16 lg:py-24">
        <div className="container">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2>Featured Content</h2>
              <p className="text-muted-foreground mt-2">
                Curated sustainability insights and best practices
              </p>
            </div>
            <Button
              variant="ghost"
              onClick={() => onNavigate("content")}
              className="hidden sm:flex gap-2"
            >
              View All
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredContent.map((content, index) => (
              <motion.div
                key={content.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <ContentCard
                  {...content}
                  onClick={() => onNavigate("content")}
                />
              </motion.div>
            ))}
          </div>

          <div className="mt-8 text-center sm:hidden">
            <Button
              variant="outline"
              onClick={() => onNavigate("content")}
              className="gap-2"
            >
              View All Content
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Trending Topics */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="mb-4">Trending Topics</h2>
            <p className="text-muted-foreground mb-8">
              Explore what Deloitte employees are learning about
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              {trendingTopics.map((topic, index) => (
                <motion.div
                  key={topic}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <Badge
                    variant="secondary"
                    className="text-base py-2 px-4 cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
                    onClick={() => onNavigate(`search?q=${encodeURIComponent(topic)}`)}
                  >
                    {topic}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24">
        <div className="container">
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-primary to-accent rounded-2xl p-8 lg:p-12 text-center text-white">
            <h2 className="text-white mb-4">Ready to Make an Impact?</h2>
            <p className="text-lg mb-8 text-white/90">
              Start your sustainability journey today with our AI-powered
              assistant and comprehensive resources.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="secondary"
                onClick={onOpenChat}
                className="gap-2"
              >
                <MessageSquare className="h-5 w-5" />
                Chat with AI
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => onNavigate("about")}
                className="gap-2 bg-white/10 border-white/20 text-white hover:bg-white/20"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
