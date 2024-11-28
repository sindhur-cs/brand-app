import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { fetchParticularBrand } from "@/sdk";
import {
  ClipboardList,
  ImageIcon,
  BookOpen,
  MessageCircle,
  Type,
  PaintBucket,
  Check,
  X,
  AlertTriangle,
} from "lucide-react";
import Image from "next/image";

const BrandDetails = async ({ params }: { params: { uid: string } }) => {
  try {
    const brand: any = await fetchParticularBrand((await params).uid);

    const guidelines = brand.guidelines
      ? parseGuidelines(brand.guidelines)
      : null;

    return (
      <div className="flex flex-col gap-8 max-w-3xl mx-auto p-4">
        <h1 className="text-3xl font-bold">{brand.name} Details</h1>

        <div className="grid gap-8 max-w-100">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <ClipboardList className="mr-3 text-primary" />
                Brand Guidelines
              </CardTitle>
            </CardHeader>
            <CardContent className="grid gap-6">
              {guidelines ? (
                <>
                  {renderGuidelineSection(
                    "Description",
                    guidelines.Description,
                    BookOpen
                  )}
                  {renderGuidelineSection(
                    "Brand Voice",
                    guidelines["Brand Voice"],
                    MessageCircle
                  )}
                  {renderGuidelineSection(
                    "Typography",
                    guidelines.Typography,
                    Type
                  )}
                  {renderGuidelineSection(
                    "Image Guidelines",
                    guidelines["Image Guidelines"],
                    ImageIcon
                  )}
                  {renderGuidelineSection("Do's", guidelines["Do's"], Check)}
                  {renderGuidelineSection("Don'ts", guidelines["Don'ts"], X)}
                  {renderColorPalette(guidelines["Color Palette"])}
                </>
              ) : (
                <div className="flex items-center text-yellow-500">
                  <AlertTriangle className="mr-2" />
                  <span>No guidelines available for this brand.</span>
                </div>
              )}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <ImageIcon className="mr-3 text-primary" />
                Reference Images
              </CardTitle>
            </CardHeader>
            <CardContent>
              {brand.reference_images && brand.reference_images.length > 0 ? (
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {brand.reference_images.map(
                    (imageUrl: string, index: number) => (
                      <div
                        key={index}
                        className="relative aspect-square overflow-hidden rounded-lg group"
                      >
                        <Image
                          src={imageUrl}
                          alt={`Reference image ${index + 1}`}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-300"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                      </div>
                    )
                  )}
                </div>
              ) : (
                <div className="flex items-center text-yellow-500">
                  <AlertTriangle className="mr-2" />
                  <span>No reference images available for this brand.</span>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    );
  } catch (error) {
    console.error(error);
    return <div className="text-red-500">Error loading brand details</div>;
  }
};

const parseGuidelines = (guidelinesString: string) => {
  const sections = guidelinesString.split("\n\n");
  const guidelines: Record<string, string> = {};

  sections.forEach((section) => {
    const [title, ...content] = section.split("\n");
    guidelines[title.replace("## ", "")] = content
      .join("\n")
      .replace(/^\s+/gm, "");
  });

  return guidelines;
};

const renderGuidelineSection = (
  title: string,
  content: string,
  Icon: React.ComponentType<any>
) => (
  <div>
    <h3 className="text-lg font-semibold flex items-center mb-2">
      <Icon className="mr-2 h-5 w-5 text-primary" />
      {title}
    </h3>
    <p className="text-muted-foreground break-words whitespace-pre-wrap overflow-hidden text-ellipsis">
      {content}
    </p>
  </div>
);

const renderColorPalette = (colors: string) => (
  <div>
    <h3 className="text-lg font-semibold flex items-center mb-2">
      <PaintBucket className="mr-2 h-5 w-5 text-primary" />
      Color Palette
    </h3>
    <div className="flex flex-wrap gap-2">
      {colors.split(",").map((color, index) => (
        <button
          key={`${color}-${index}`}
          className="w-12 h-12 rounded-full overflow-hidden hover:ring-2 ring-offset-2 ring-primary transition-all"
          style={{ backgroundColor: color }}
        ></button>
      ))}
    </div>
  </div>
);

export default BrandDetails;
