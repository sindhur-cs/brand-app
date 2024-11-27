import { Skeleton } from "@/components/ui/skeleton";

const Loading = () => {
  return (
    <>
        <div className="flex justify-between w-full items-center">
            <Skeleton className="w-80 h-6 rounded-lg"/>
            <Skeleton className="w-40 h-6 rounded-lg"/>
        </div>
        <div className="flex flex-wrap gap-4 py-10">
            <Skeleton className="w-80 h-80"/>
            <Skeleton className="w-80 h-80"/>
            <Skeleton className="w-80 h-80"/>
            <Skeleton className="w-80 h-80"/>
            <Skeleton className="w-80 h-80"/>
            <Skeleton className="w-80 h-80"/>
        </div>
    </>
  )
}

export default Loading;