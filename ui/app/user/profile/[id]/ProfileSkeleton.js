import { Skeleton } from "@/components/ui/skeleton";

const WorkInfoSkeleton = () => {
    return (
        <div className="mb-6">
            <div className="inline-flex gap-2 items-center justify-center">
                <Skeleton className="mt-2 w-32 h-4 rounded-lg" />
                <Skeleton className="mt-2 w-20 h-6 rounded-lg bg-blue-100" />

            </div>
            <div className="mt-4">
                <Skeleton className="mt-2 w-44 h-2 rounded-lg" />
                <Skeleton className="mt-2 w-p h-2 rounded-lg" />
            </div>
        </div>
    )
}

export function ProfileSkeleton() {
    return (<div className="flex gap-3 ml-4">
        <div className="w-1/3">
            <Skeleton className="w-full h-44" />

            <div className="mt-8">
                <div className="inline-flex items-center justify-center w-full">
                    <Skeleton className="w-32 h-4 rounded-full" />
                    <hr className="ml-2 w-64 h-px bg-gray-200 border-0 dark:bg-gray-700" />
                </div>

                <div className="">
                    <WorkInfoSkeleton />
                    <WorkInfoSkeleton />
                </div>
            </div>
        </div>
        <div className="w-2/3 ml-2">
            <div>
                <div>
                    <Skeleton className="mt-2 w-32 h-4 rounded-full" />
                    <Skeleton className="mt-2 w-24 h-3 rounded-full bg-blue-100" />
                </div>
            </div>

            <div className="mt-8 flex flex-row gap-2">
                <Skeleton className="mt-2 w-20 h-6 rounded-lg bg-blue-100" />
                <Skeleton className="mt-2 w-20 h-6 rounded-lg bg-blue-100" />
                <Skeleton className="mt-2 w-20 h-6 rounded-lg bg-blue-100" />
            </div>

            <div className="mt-24">
                <div className="inline-flex gap-4">
                    <Skeleton className="w-24 h-6 rounded-full mb-2 bg-red-50" />
                    <Skeleton className="w-24 h-6 rounded-full mb-2 bg-red-50" />
                </div>
                <hr className="ml-2 w-full h-px bg-gray-200 border-0 dark:bg-gray-700" />
                <div className="mx-4 my-8">
                    <Skeleton className="mt-2 w-72 h-2 bg-gray-300 rounded-lg " />
                    <Skeleton className="mt-2 w-44 h-2 bg-gray-300 rounded-lg " />
                    <Skeleton className="mt-2 w-60 h-2 bg-gray-300 rounded-lg " />
                    <Skeleton className="mt-2 w-44 h-2 bg-gray-300 rounded-lg " />
                    <Skeleton className="mt-2 w-72 h-2 bg-gray-300 rounded-lg " />
                </div>
            </div>
        </div>
    </div>);
}

