import { FC } from "react";
import Link from 'next/link';

const Logo: FC = () => (
    <div className="flex items-center justify-between max-w-min gap-2 ">
        <span className="text-brand-blue-900 font-roboto-condensed font-bold text-6xl whitespace-nowrap transition-all duration-300 ease-in-out hover:text-blue-400">
            <Link href="/">
                GameDev
            </Link>
        </span>
    </div>
);

export default Logo;