import { Card, CardContent } from "../ui/card";
import { LucideIcon } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string;
  subtitle?: string;
  icon?: LucideIcon;
  trend?: {
    value: string;
    positive: boolean;
  };
  color?: "primary" | "secondary" | "accent" | "success";
}

export function StatCard({
  title,
  value,
  subtitle,
  icon: Icon,
  trend,
  color = "primary",
}: StatCardProps) {
  const colorClasses = {
    primary: "bg-primary/10 text-primary",
    secondary: "bg-secondary/10 text-secondary",
    accent: "bg-accent/10 text-accent",
    success: "bg-green-500/10 text-green-600",
  };

  return (
    <Card className="overflow-hidden hover:shadow-md transition-shadow">
      <CardContent className="p-6">
        <div className="flex items-start justify-between">
          <div className="space-y-2 flex-1">
            <p className="text-sm text-muted-foreground">{title}</p>
            <p className="text-3xl font-bold">{value}</p>
            {subtitle && (
              <p className="text-sm text-muted-foreground">{subtitle}</p>
            )}
            {trend && (
              <div
                className={`text-sm font-medium ${
                  trend.positive ? "text-green-600" : "text-red-600"
                }`}
              >
                {trend.positive ? "↑" : "↓"} {trend.value}
              </div>
            )}
          </div>
          {Icon && (
            <div className={`p-3 rounded-lg ${colorClasses[color]}`}>
              <Icon className="h-6 w-6" />
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
