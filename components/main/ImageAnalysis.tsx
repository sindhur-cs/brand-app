import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ImageIcon } from "lucide-react";

const ImageAnalysis = ({ selectedImage }: { selectedImage: File }) => {
  const imageUrl = URL.createObjectURL(selectedImage);

  return (
    <Card className="flex-1 p-4">
      <CardHeader className="space-y-1">
        <CardTitle className="flex items-center gap-2">
          <ImageIcon className="h-5 w-5" />
          <span>Image Analysis</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="aspect-video rounded-lg bg-muted/30 overflow-hidden relative">
            <img
              src={imageUrl}
              alt="Analyzed image"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ImageAnalysis;
