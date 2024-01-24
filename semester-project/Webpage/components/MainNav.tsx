"use client";

import Link from "next/link"
import { usePathname } from "next/navigation";
import { cn } from "../app/lib/utils"
import { Page } from "@/components/Navbar";

const MainNav = ({ pages }: { pages: Page[] }) => {
    const pathName = usePathname();
    return (
        <nav className="flex items-center justify-center p-4 gap-2 bg-blue-50">
            <ul className="flex gap-2 font-black">
                {pages.map(({ href, title }) => (
                    <li key={href}>
                        <Link href={href}>
                            <span
                                className={cn(
                                    "uppercase whitespace-nowrap font-roboto-condensed text-base px-5 py-3 rounded-sm text-brand-blue-900 hover:bg-brand-blue-200 text-2xl transition-all duration-300 ease-in-out",
                                    {
                                        "bg-brand-blue-900 text-brand-blue-100 pointer-events-none":
                                            (pathName === '/' && href === '/') || (pathName.startsWith(href) && href !== '/'),
                                    }
                                )}
                            >
                                {title}
                            </span>

                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default MainNav;