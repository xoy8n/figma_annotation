import * as React from 'react';
import { Annotation } from '../types';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { Pencil, X } from 'lucide-react';

interface AnnotationCardProps {
  annotation: Annotation;
  onEdit?: (id: string) => void;
  onDelete?: (id: string) => void;
  selected?: boolean;
}

export const AnnotationCard: React.FC<AnnotationCardProps> = ({ 
  annotation, 
  onEdit, 
  onDelete,
  selected = false
}) => {
  return (
    <Card className={cn("mb-2 cursor-pointer transition-colors", selected && "bg-accent")}>
      <CardContent className="flex items-start p-3">
        <div className="flex items-center mr-3">
          <div 
            className="w-6 h-6 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-sm"
          >
            {annotation.number}
          </div>
        </div>
        <div className="flex-1">
          <div className="text-sm text-gray-800">{annotation.description}</div>
        </div>
        <div className="flex items-center space-x-1 ml-2">
          {onEdit && (
            <button 
              className="p-1.5 rounded-md text-muted-foreground hover:bg-accent"
              onClick={(e) => {
                e.stopPropagation();
                onEdit(annotation.id);
              }}
            >
              <Pencil className="h-4 w-4" />
            </button>
          )}
          {onDelete && (
            <button 
              className="p-1.5 rounded-md text-muted-foreground hover:bg-accent"
              onClick={(e) => {
                e.stopPropagation();
                onDelete(annotation.id);
              }}
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}; 