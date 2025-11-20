import { StatCard } from "./StatCard";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import {
  Leaf,
  Target,
  Users,
  Award,
  Globe,
  Sparkles,
  TrendingUp,
  Heart,
  MessageSquare,
} from "lucide-react";
import { motion } from "motion/react";

interface AboutPageProps {
  onNavigate: (page: string) => void;
  onOpenChat: () => void;
}

const impactStats = [
  {
    title: "Carbon Reduction",
    value: "45%",
    subtitle: "since 2019",
    icon: Leaf,
    trend: { value: "12% this year", positive: true },
    color: "primary" as const,
  },
  {
    title: "Global Offices",
    value: "150+",
    subtitle: "sustainability programs",
    icon: Globe,
    color: "secondary" as const,
  },
  {
    title: "Employee Engagement",
    value: "12,500+",
    subtitle: "active participants",
    icon: Users,
    color: "accent" as const,
  },
  {
    title: "Green Certifications",
    value: "15",
    subtitle: "global standards",
    icon: Award,
    color: "success" as const,
  },
];

const features = [
  {
    icon: Sparkles,
    title: "AI-Powered Insights",
    description:
      "Get instant answers to sustainability questions from our advanced AI assistant trained on Deloitte's best practices.",
  },
  {
    icon: Target,
    title: "Comprehensive Resources",
    description:
      "Access curated content covering climate action, ESG reporting, sustainable procurement, and more.",
  },
  {
    icon: TrendingUp,
    title: "Real-Time Updates",
    description:
      "Stay informed with the latest sustainability trends, regulations, and industry developments.",
  },
  {
    icon: Heart,
    title: "Community-Driven",
    description:
      "Connect with colleagues, share insights, and collaborate on sustainability initiatives.",
  },
];

const milestones = [
  {
    year: "2019",
    title: "Sustainability Commitment",
    description: "Deloitte announces ambitious climate goals and launches internal sustainability program.",
  },
  {
    year: "2021",
    title: "Platform Launch",
    description: "Sustainability Hub goes live, providing centralized resources for all employees.",
  },
  {
    year: "2023",
    title: "AI Integration",
    description: "Advanced AI assistant added to provide personalized sustainability guidance.",
  },
  {
    year: "2025",
    title: "Continuous Innovation",
    description: "Ongoing enhancements and expansion of features based on employee feedback.",
  },
];

export function AboutPage({ onNavigate, onOpenChat }: AboutPageProps) {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-primary/5 via-accent/5 to-background">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center space-y-6"
          >
            <h1>About Sustainability Hub</h1>
            <p className="text-lg text-muted-foreground">
              Empowering Deloitte employees with AI-driven sustainability knowledge
              and resources to make informed decisions and drive positive environmental
              impact.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 border-b">
        <div className="container max-w-4xl">
          <div className="text-center space-y-6">
            <h2>Our Mission</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              The Deloitte Sustainability Hub is designed to democratize access to
              sustainability knowledge across our organization. By combining
              cutting-edge AI technology with comprehensive resources, we enable
              every employee to contribute to our environmental goals and stay
              informed about the latest sustainability practices.
            </p>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="mb-4">Our Impact</h2>
            <p className="text-muted-foreground">
              Measurable progress towards a sustainable future
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {impactStats.map((stat, index) => (
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

      {/* Features */}
      <section className="py-16 lg:py-24">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="mb-4">Platform Features</h2>
            <p className="text-muted-foreground">
              Everything you need for your sustainability journey
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                        <feature.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h4 className="mb-2">{feature.title}</h4>
                        <p className="text-muted-foreground text-sm">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="mb-4">Our Journey</h2>
            <p className="text-muted-foreground">
              Key milestones in building a sustainable future
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block" />

              {/* Timeline Items */}
              <div className="space-y-8">
                {milestones.map((milestone, index) => (
                  <motion.div
                    key={milestone.year}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="relative flex gap-6"
                  >
                    {/* Year Badge */}
                    <div className="flex-shrink-0 w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold z-10">
                      {milestone.year.slice(2)}
                    </div>
                    {/* Content */}
                    <Card className="flex-1">
                      <CardContent className="p-6">
                        <h4 className="mb-2">{milestone.title}</h4>
                        <p className="text-muted-foreground text-sm">
                          {milestone.description}
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24">
        <div className="container">
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-primary to-accent rounded-2xl p-8 lg:p-12 text-center text-white">
            <h2 className="text-white mb-4">Have Questions?</h2>
            <p className="text-lg mb-8 text-white/90">
              Our AI assistant is here to help you with any sustainability-related
              questions or guidance you need.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="secondary"
                onClick={onOpenChat}
                className="gap-2"
              >
                <MessageSquare className="h-5 w-5" />
                Ask the AI Assistant
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => onNavigate("content")}
                className="gap-2 bg-white/10 border-white/20 text-white hover:bg-white/20"
              >
                Browse Resources
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
