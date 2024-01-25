"use client"

import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { useCallback } from "react";

export interface TypeCategory {
    label: "Towers" | "Sealife" | "Zombies" | "Futuristic";
}

interface CategoryFilterProps {
    categories: TypeCategory[];
}

const GameFilter = ({ categories }: CategoryFilterProps) => {
    const searchParams = useSearchParams();
    const categoryFilter: string = searchParams.get("_category") || "";
    const router = useRouter();
    const pathname = usePathname();

    const setSearchParam = useCallback(
        (name: string, value: string) => {
            const currentParams = searchParams.toString();
            const params = new URLSearchParams(currentParams);

            params.set(name, value);
            if (currentParams === params.toString()) return;

            router.replace(pathname + "?" + params.toString(), { scroll: false });
        },
        [searchParams, pathname, router]
    );

    const deleteSearchParam = useCallback(
        (name: string) => {
            const currentParams = searchParams.toString();
            const params = new URLSearchParams(currentParams);

            params.delete(name);
            router.replace(`${pathname}?${params.toString()}`, { scroll: false });
        },
        [searchParams, pathname, router]
    );

    return (
        <div>
            <div className="flex flex-wrap">
                {categories.map((category) => (
                    <div
                        key={category?.label}
                        className={`cursor-pointer ${categoryFilter !== "" &&
                            categoryFilter !== category?.label &&
                            "opacity-30"
                            } p-3`}
                        onClick={() => setSearchParam("_category", category?.label as string)}
                    >
                        <span className="font-bold uppercase whitespace-nowrap font-roboto-condensed text-base 
                    px-5 py-2 rounded-lg bg-brand-blue-100 text-brand-blue-900 
                    hover:text-brand-blue-50 hover:bg-brand-blue-900 sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 
                    transition-all duration-300 ease-in-out">
                            {category?.label}
                        </span>
                    </div>

                ))}
                {categoryFilter !== "" && (
                    <div
                        className={`cursor-pointer p-3`}
                        onClick={() => deleteSearchParam("_category")}
                    >
                        <span className="font-bold uppercase whitespace-nowrap font-roboto-condensed text-base 
                    px-5 py-2 rounded-lg bg-brand-blue-400 text-brand-blue-50 
                    hover:text-brand-blue-50 hover:bg-brand-blue-900 sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 
                    transition-all duration-300 ease-in-out">
                            RESET
                        </span>
                    </div>
                )}
            </div>

        </div>
    );
};

export default GameFilter;