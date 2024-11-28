"use client";

import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Button } from "../ui/button"
import Image from "next/image";
import { useRouter } from "next/navigation";

const BrandProfileCard = ({ uid, name, image }: { uid: string, name: string, image: string }) => {
    const router = useRouter();

    return (
        <Card className="relative w-80 h-80">
            <CardHeader>
                <CardTitle className="text-xl font-bold">{name}</CardTitle>
            </CardHeader>
            <CardContent className="relative w-full h-[50%] flex justify-center items-center p-4">
                <Image
                    src={image}
                    alt={name}
                    fill
                    objectFit="cover"
                    objectPosition="center"
                />
            </CardContent>
            <CardFooter>
                <Button variant="outline" className="absolute bottom-5 right-5" 
                onClick={() => {
                    router.push(`/brand/${uid}`);
                }}>View Details</Button>
            </CardFooter>
        </Card>

    )
}

export default BrandProfileCard