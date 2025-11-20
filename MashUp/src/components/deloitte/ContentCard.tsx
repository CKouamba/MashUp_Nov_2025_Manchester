import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import { Badge } from "../ui/badge";
import { Clock, ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import { ImageWithFallback } from "../figma/ImageWithFallback";

interface ContentCardProps {
  title: string;
  description: string;
  category: string;
  readTime?: string;
  imageUrl?: string;
  featured?: boolean;
  onClick?: () => void;
}

export function ContentCard({
  title,
  description,
  category,
  readTime,
  imageUrl,
  featured = false,
  onClick,
}: ContentCardProps) {
  return (
    <Card
      className={`group overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer h-full flex flex-col ${
        featured ? "border-primary/50" : ""
      }`}
      onClick={onClick}
      role="article"
    >
      {imageUrl && (
        <div className="relative aspect-video overflow-hidden bg-muted">
          <ImageWithFallback
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          {featured && (
            <div className="absolute top-3 left-3">
              <Badge className="bg-primary text-primary-foreground">Featured</Badge>
            </div>
          )}
        </div>
      )}
      <CardHeader className="pb-3">
        <div className="flex items-center gap-2 mb-2">
          <Badge variant="secondary" className="text-xs">
            {category}
          </Badge>
          {readTime && (
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <Clock className="h-3 w-3" />
              <span>{readTime}</span>
            </div>
          )}
        </div>
        <h3 className="line-clamp-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
      </CardHeader>
      <CardContent className="flex-1">
        <p className="text-muted-foreground line-clamp-3">{description}</p>
      </CardContent>
      <CardFooter className="pt-0">
        <Button
          variant="ghost"
          className="group/btn px-0 hover:bg-transparent hover:text-primary"
        >
          Read More
          <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
        </Button>
      </CardFooter>
    </Card>
  );
}
