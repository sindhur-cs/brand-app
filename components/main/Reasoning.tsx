"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain } from "lucide-react";
import useStore from "@/app/store/store";

const Reasoning = () => {
  const { chatAnalysis } = useStore();

  let parsedAnalysis: { reasoning?: string[] } = {};
  try {
    parsedAnalysis = JSON.parse(chatAnalysis);
  } catch (error) {
    console.error("Failed to parse chatAnalysis:", error);
  }

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
            {parsedAnalysis?.reasoning?.map((item, index) => (
              <li key={index} className="px-2">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

export default Reasoning;
