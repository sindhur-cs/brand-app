"use client";

import { useEffect } from "react";
import BrandProfileCard from "./BrandProfileCard"
import useStore from "@/app/store/store";

const BrandsList = ({ brands }: { brands: any[] }) => {
    const { setBrands } = useStore();
    
    useEffect(() => {
        setBrands(brands);
    }, [brands]);

    return (
        <div className="flex flex-wrap gap-4 py-10">
            {brands.map((brand: any) => (
                <BrandProfileCard key={brand.id} name={brand.name} description={brand.description} />
            ))}
        </div>
    )
}

export default BrandsList