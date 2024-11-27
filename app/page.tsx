import BrandsList from "@/components/main/BrandsList";
import { Button } from "@/components/ui/button";
import { PlusCircleIcon } from "lucide-react";
import Link from "next/link";

const Home = async () => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_BACKEND_URL}/api/v1/brands/`);
    const { brands } = await response.json();

    console.log(brands);

    return (
      <div className="flex flex-col">
        <div className="flex justify-between w-full items-center">
          <h1 className="text-3xl font-bold">Brand Profiles</h1>
          <Link href="/create-brand">
            <Button>
              <PlusCircleIcon className="mr-2 h-4 w-4" /> Create New Brand
            </Button>
          </Link>
        </div>
        <BrandsList brands={brands} />
      </div>
    )
  } catch (error) {
    console.error(error);
    return <div>Error fetching brands</div>;
  }
}

export default Home;