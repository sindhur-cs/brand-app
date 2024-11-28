"use client";

import { useEffect } from "react";
import BrandProfileCard from "./BrandProfileCard";
import useStore from "@/app/store/store";

const BrandsList = ({ brands }: { brands: any[] }) => {
  const { setBrands } = useStore();

  useEffect(() => {
    setBrands(brands);
  }, [brands]);

  return (
    <div className="flex flex-wrap gap-4 py-10">
      {brands.length > 0 ? (
        brands.map((brand: any) => {
          return (
            <BrandProfileCard
              key={brand.uid}
              uid={brand.uid}
              name={brand.name}
              image={brand.reference_images[0]}
            />
          );
        })
      ) : (
        <div className="flex justify-center text-lg w-full items-center h-[30vh]">
          No brands found. Please create a new brand.
        </div>
      )}
    </div>
  );
};

export default BrandsList;
