import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Lightbulb } from "lucide-react";
import useStore from "@/app/store/store";

const Recommendations = () => {
  const { chatAnalysis } = useStore();

  // Parse the chatAnalysis string to JSON
  interface Analysis {
    brand_compliance_score: number;
    recommendations?: string[];
  }

  let parsedAnalysis: Analysis = {
    brand_compliance_score: 0,
  };

  try {
    parsedAnalysis = JSON.parse(chatAnalysis);
  } catch (error) {
    console.error("Failed to parse chatAnalysis:", error);
  }

  const score = parsedAnalysis?.brand_compliance_score || 0;
  const recommendations = parsedAnalysis?.recommendations || [];

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
          <div
            className={`p-2 rounded-md ${
              score >= 70
                ? "bg-green-50 text-green-700 dark:bg-green-950/50 dark:text-green-300"
                : score >= 40
                ? "bg-yellow-50 text-yellow-700 dark:bg-yellow-950/50 dark:text-yellow-300"
                : "bg-red-50 text-red-700 dark:bg-red-950/50 dark:text-red-300"
            }`}
          >
            <p className="text-sm font-medium">
              {score >= 70
                ? "Excellent compliance with brand guidelines."
                : score >= 40
                ? "Moderate compliance with brand guidelines."
                : "Low compliance with brand guidelines."}
            </p>
          </div>
          <ul className="text-[15px] list-disc text-muted-foreground space-y-2">
            {recommendations.length > 0 ? (
              recommendations.map((item, index) => (
                <li key={index} className="px-2">
                  {item}
                </li>
              ))
            ) : (
              <></>
            )}
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

export default Recommendations;
