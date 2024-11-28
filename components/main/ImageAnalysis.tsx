import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ImageIcon } from "lucide-react";

const ImageAnalysis = () => {
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
          <div className="aspect-video rounded-lg bg-muted/30 overflow-hidden">
            <img 
              src="/placeholder.svg?height=200&width=300" 
              alt="Analyzed image"
              className="w-full h-full object-cover"
            />
          </div>
          <p className="text-sm text-muted-foreground">
            The analyzed image shows a modern design with clean lines and professional composition.
          </p>
        </div>
      </CardContent>
    </Card>
  )
}

export default ImageAnalysis