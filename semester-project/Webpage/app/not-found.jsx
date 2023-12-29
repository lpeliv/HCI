import Link from "next/link";
import Image from "next/image";
import error from "@/public/404-Error-rafiki.png";

export default function NotFound() {
    return (
        <main className="justify-between items-center pt-16">
            <section className="justify-center p-16 mx-auto bg-blue-800">
                <div className="text-center text-brand-blue-50 text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl p-5">
                    <div className="flex flex-col items-center justify-start gap-5">
                        <h2 className="text-5xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-8xl text-brand-blue-100 pb-20 font-bold" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)', maxWidth: '100%' }}>
                            We apologize!
                        </h2>
                        <p className="flex flex-col items-center justify-start gap-5 font-roboto whitespace-break-spaces font-bold text-brand-blue-50 text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl p-5" style={{ textShadow: '0px 0px 4px rgba(0, 0, 0, 0.5)' }}>
                            It seems there is nothing here...</p>
                        <div className="my-0">
                            <Image
                                src={error}
                                alt="Error"
                                layout="responsive"
                                className="rounded-md relative max-w-[800px] w-full aspect-w-4 aspect-h-2"
                                style={{
                                    objectFit: "cover",
                                }}
                            />
                        </div>
                        <a
                            type="submit"
                            className="text-brand-blue-700 py-4 px-8 rounded-md text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl bg-blue-100 hover:bg-blue-900 hover:text-blue-100 hover:shadow-lg transition-all duration-300 ease-in-out font-bold mx-auto"
                        >
                            <Link href="/">Return</Link>
                        </a>
                    </div>
                </div>
            </section>
        </main>
    )
}