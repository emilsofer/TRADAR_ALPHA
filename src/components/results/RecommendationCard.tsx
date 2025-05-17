
import React from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

interface RecommendationCardProps {
  title: string;
  platform: string;
  description?: string;
  isPrimary?: boolean;
}

export function RecommendationCard({ 
  title, 
  platform, 
  description,
  isPrimary = false 
}: RecommendationCardProps) {
  return (
    <Card className={`overflow-hidden card-hover border ${isPrimary ? 'border-tradar-400 shadow-lg hover:shadow-tradar-300/20' : ''}`}>
      <div className={`h-1.5 ${isPrimary ? 'bg-tradar-500' : 'bg-gray-200'}`} />
      <CardHeader className="px-6 py-4">
        <h3 className={`font-medium ${isPrimary ? 'text-lg' : 'text-base text-foreground/80'}`}>
          {title}
        </h3>
      </CardHeader>
      <CardContent className="px-6 pb-6">
        <h2 className={`font-display font-bold ${isPrimary ? 'text-3xl' : 'text-2xl'}`}>
          {platform}
        </h2>
        {description && (
          <p className="mt-3 text-foreground/70">
            {description}
          </p>
        )}
      </CardContent>
    </Card>
  );
}
