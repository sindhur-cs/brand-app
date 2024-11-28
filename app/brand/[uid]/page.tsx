import MarkdownRenderer from "@/components/main/MarkdownRenderer";
import Markdown from "react-markdown"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { fetchParticularBrand } from "@/sdk";
import { ClipboardList, ImageIcon } from "lucide-react";
import Image from "next/image";

// interface BrandDetailsProps {
//   brand: {
//     name: string;
//     guidelines: string;
//     referenceImages: string[];
//   };
// }

const BrandDetails = async ({ params }: { params: { uid: string }  }) => {
  try {
    console.log((await params).uid);
    const brand: any = await fetchParticularBrand((await params).uid);

    // console.log(JSON.parse(brand));

    return (
      <div className="flex flex-col gap-8 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold">{brand.name} Details</h1>
      
      <div className="grid gap-8">
        {/* Brand Guidelines */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <ClipboardList className="mr-3 text-primary" />
              Brand Guidelines
            </CardTitle>
          </CardHeader>
          <CardContent className="flex w-10">
        <Markdown>{brand.guidelines}</Markdown>
            {/* <MarkdownRenderer content={brand.guidelines} /> */}
          </CardContent>
        </Card>
        {/* <MarkdownRenderer content={brand.guidelines} /> */}
        {/* <Markdown>{brand.guidelines}</Markdown> */}

        {/* Reference Images */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <ImageIcon className="mr-3 text-primary" />
              Reference Images
            </CardTitle>
          </CardHeader>
          <CardContent>
          <div className="grid grid-cols-3 gap-4">
              {brand.reference_images.map((imageUrl: any, index: any) => (
                <div 
                  key={index} 
                  className="relative aspect-square overflow-hidden rounded-lg group"
                >
                  <Image
                    src={imageUrl} 
                    alt={`Reference image ${index + 1}`} 
                    fill
                    className="object-cover hover:scale-110 transition-transform"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
    )
  } catch (error) {
    console.log(error);
  }
}

export default BrandDetails;