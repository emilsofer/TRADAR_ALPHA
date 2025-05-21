import React from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

interface RecommendationCardProps {
  title: string;
  platform: string;
  description?: string;
  isPrimary?: boolean;
  onClick?: () => void;
}

const RecommendationCard = ({
  title,
  platform,
  description,
  isPrimary = false,
  onClick
}: RecommendationCardProps) => {
  return (
    <Card
      onClick={onClick}
      className={`overflow-hidden border transition-all duration-200 ${
        isPrimary
          ? 'border-tradar-500 bg-tradar-50 shadow-lg hover:shadow-tradar-300/20'
          : 'border-gray-200 hover:shadow-md hover:ring-2 hover:ring-tradar-300'
      } ${onClick ? 'cursor-pointer' : ''}`}
    >
      <div className={`h-1.5 ${isPrimary ? 'bg-tradar-500' : 'bg-gray-200'}`} />
      
      <CardHeader className="px-6 py-4 pointer-events-none">
        <h3 className={`font-medium ${isPrimary ? 'text-lg text-tradar-700' : 'text-base text-foreground/80'}`}>
          {title}
        </h3>
      </CardHeader>

      <CardContent className="px-6 pb-6 pointer-events-none">
        <h2 className={`font-display font-bold ${isPrimary ? 'text-3xl' : 'text-2xl'}`}>
          {platform}
        </h2>
        {description && (
          <p className="mt-3 text-foreground/70">{description}</p>
        )}
      </CardContent>
    </Card>
  );
};

export default RecommendationCard;
