import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Lightbulb } from "lucide-react";


const Recommendations = () => {
  const score = 20;
  return (
    <Card className="flex-1 p-4">
    <CardHeader className="space-y-1">
      <CardTitle className="flex items-center gap-2">
        <Lightbulb className="h-5 w-5" />
        <span>Recommendations</span>
      </CardTitle>
    </CardHeader>
    <CardContent>
      <div className="space-y-4">
        <div className={`p-2 rounded-md ${
          score >= 70 
            ? "bg-green-50 text-green-700 dark:bg-green-950/50 dark:text-green-300"
            : score >= 40
            ? "bg-yellow-50 text-yellow-700 dark:bg-yellow-950/50 dark:text-yellow-300"
            : "bg-red-50 text-red-700 dark:bg-red-950/50 dark:text-red-300"
        }`}>
          <p className="text-sm font-medium">
            {score >= 70 
              ? "Image is highly suitable for brand use"
              : score >= 40
              ? "Image needs minor adjustments"
              : "Image requires significant changes"}
          </p>
        </div>
        <ul className="text-[15px] list-disc text-muted-foreground space-y-2">
          {score < 70 && (
            <>
              <li className="px-2">Consider adjusting color balance</li>
              <li className="px-2">Review typography choices</li>
              <li className="px-2">Ensure proper logo placement</li>
            </>
          )}
          {score >= 70 && (
            <>
              <li className="px-2">Maintain current quality standards</li>
              <li className="px-2">Use as reference for future content</li>
              <li className="px-2">Share with team as example</li>
            </>
          )}
        </ul>
      </div>
      </CardContent>
    </Card>
  )
}

export default Recommendations