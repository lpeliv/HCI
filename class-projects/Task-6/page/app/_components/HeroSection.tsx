import Image from "next/image";
import unrealPreview from "@/public/hero/UnrealGameImage1.png";
import hammer from "@/public/hero/hammer.png";

const HeroSection = () => (
    <div className="pt-16">
        <section className="justify-center items-center p-10 mx-auto bg-blue-200">
            <p className="flex flex-col items-center justify-start gap-5">
                <h1 className="font-roboto-condensed text-6xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-extrabold text-brand-blue-900 whitespace-break-spaces text-center sm:text-center" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
                    Welcome to the GameDev
                </h1>
                <div className="relative max-w-[1000px] w-full aspect-w-4 aspect-h-2">
                    <Image
                        src={unrealPreview}
                        alt="Unreal Preview"
                        layout="responsive"
                        className="rounded-md"
                        style={{
                            objectFit: "cover",
                        }}
                    />
                </div>
                <p className="font-roboto whitespace-break-spaces text-brand-blue-50 font-bold text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl p-5" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
                    Homepage of the{" "}
                    <span className="font-roboto-condensed font-bold text-brand-blue-900 whitespace-nowrap">
                        GameDev
                    </span>
                    , indie game studio.
                </p>
            </p>
        </section>
        <section className="justify-center items-center p-10 mx-auto bg-blue-300">
            <p className="font-roboto whitespace-break-spaces text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl p-5">
                <div className="flex flex-col items-center justify-start gap-5">
                    <p className="font-roboto whitespace-break-spaces font-bold text-brand-blue-50 text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl p-5" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
                        Check our market for{" "}
                        <span className="font-roboto-condensed font-bold text-brand-blue-900 whitespace-nowrap">
                            free
                        </span>
                        {" "}and paid assets!
                    </p>
                    <div className="relative max-w-[1000px] w-full aspect-w-4 aspect-h-2">
                        <Image
                            src={hammer}
                            alt="Unreal Preview"
                            layout="responsive"
                            className="rounded-md"
                            style={{
                                objectFit: "cover",
                            }}
                        />
                    </div>
                    <button className="bg-blue-700 text-brand-blue-50 py-4 px-8 sm:w-2/3 md:w-1/3 lg:w-1/4 xl:w-1/5 rounded-full text-base sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl uppercase font-bold transition-all duration-300 ease-in-out hover:bg-blue-900 hover:shadow-lg" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
                        <a href="/store" className="">Store</a>
                    </button>
                </div>
            </p>
        </section>
        <section className="justify-center items-center p-10 mx-auto bg-blue-400">
        <p className="font-roboto whitespace-break-spaces text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl p-5">
                <div className="flex flex-col items-center justify-start gap-5">
                    <p className="font-roboto whitespace-break-spaces text-center font-bold text-brand-blue-50 text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl p-5" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
                        Browse our {" "}
                        <span className="font-roboto-condensed font-bold text-brand-blue-900 whitespace-nowrap">
                            collection
                        </span>
                        {" "}and choose what fits your style!
                    </p>
                    <div className="relative max-w-[1000px] w-full aspect-w-4 aspect-h-2">
                    </div>
                    <button className="bg-blue-700 text-brand-blue-50 py-4 px-8 sm:w-2/3 md:w-1/3 lg:w-1/4 xl:w-1/5 rounded-full text-base sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl uppercase font-bold transition-all duration-300 ease-in-out hover:bg-blue-900 hover:shadow-lg">
                        <a href="/games" className="">GAMES</a>
                    </button>
                </div>
            </p>
        </section>
        <section className="justify-center items-center p-10 mx-auto bg-blue-500">
            <p className="font-roboto whitespace-break-spaces text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl p-5">
                <div className="flex flex-col items-center justify-start gap-5">
                    Continuation 3
                </div>
            </p>
        </section>
    </div>
);

export default HeroSection;
