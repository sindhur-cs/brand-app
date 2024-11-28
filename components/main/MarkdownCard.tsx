import React from 'react';
import { Card, CardContent } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import MarkdownRenderer from './MarkdownRenderer';

interface MarkdownCardProps {
  content: string;
}

const MarkdownCard: React.FC<MarkdownCardProps> = ({ content }) => {
  return (
    <Card className="w-full">
      <CardContent className="p-6">
        <ScrollArea className="w-full">
          <div className="pr-6">
            <MarkdownRenderer content={content} />
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
};

export default MarkdownCard;







