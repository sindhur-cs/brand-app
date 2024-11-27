import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Button } from "../ui/button"

const BrandProfileCard = ({ name, description }: { name: string, description: string }) => {
    console.log(name);

    return (
        <Card className="relative w-80 h-80">
            <CardHeader>
                <CardTitle className="text-xl font-bold">{name}</CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-justify">{description?.length > 200? description.substring(0, 200) + "..." : description}</p>
            </CardContent>
            <CardFooter>
                <Button variant="outline" className="absolute bottom-5 right-5">View Details</Button>
            </CardFooter>
        </Card>
    )
}

export default BrandProfileCard