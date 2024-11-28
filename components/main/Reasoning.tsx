import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain } from "lucide-react";

const Reasoning = () => {
  return (
    <Card className="flex-1 p-4">
            <CardHeader className="space-y-1">
              <CardTitle className="flex items-center gap-2">
                <Brain className="h-5 w-5" />
                <span>Reasoning</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <ul className="list-disc text-[15px] text-muted-foreground space-y-2 text-start">
                  <li className="px-2">Color palette aligns with brand guidelines and also Color palette aligns with brand linesalette aligns with brand guidelines</li>
                  <li className="px-2">Typography matches brand standards</li>
                  <li className="px-2">Visual elements follow brand style</li>
                </ul>
              </div>
            </CardContent>
          </Card>
  )
}

export default Reasoning