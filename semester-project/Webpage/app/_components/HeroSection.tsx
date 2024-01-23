import Image from "next/image";
import enemy from "@/public/hero/Enemy.png";
import tower from "@/public/hero/Tower.png";
import hammer from "@/public/hero/hammerHDTilted.png";
import background from "@/public/hero/Screen.png";
import Link from "next/link";

const HeroSection = () => (

  <div className="pt-20">
    <section className="relative flex flex-col justify-center items-center pb-48 pt-48 mx-auto bg-blue-900">
      <div className="absolute inset-0 w-full h-full bg-cover bg-center filter blur-sm opacity-20">
        <Image
          src={background}
          alt="Background Image"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>
      <div className="relative z-10">
        <h1 className="font-roboto-condensed text-6xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-8xl 
          font-extrabold text-brand-blue-50 text-center sm:text-center p-10 md:p-20 mt-16">
          Welcome to the GameDev
        </h1>
      </div>
    </section>
    <section className="justify-center items-center pb-10 pt-2 bg-blue-800">
      <div className="flex flex-col items-center justify-start gap-20 font-roboto whitespace-break-spaces 
        font-bold text-brand-blue-50 text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl p-5"
        style={{ textShadow: '0px 3px 4px rgba(0, 0, 0, 0.5)' }}>
        <Image
          src={enemy}
          alt="Enemy"
          layout="responsive"
          className="rounded-md relative max-w-[300px] w-full aspect-w-4 aspect-h-2"
          style={{ objectFit: "cover" }}
        />
        <p className="font-roboto whitespace-break-spaces text-center font-bold text-brand-blue-50 text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl p-5" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
          Check our own game models!
        </p>
        <Link href="/showcase">
          <span className="uppercase whitespace-nowrap font-roboto-condensed text-base 
            px-20 py-7 rounded-lg bg-brand-blue-100 text-brand-blue-900 
            hover:bg-brand-blue-300 sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl transition-all duration-300 ease-in-out">
            SHOWCASE
          </span>
        </Link>
      </div>
    </section>
    <section className="justify-center items-center pb-10 pt-2 mx-auto bg-blue-900">
      <div className="flex flex-col items-center justify-start gap-20 font-roboto whitespace-break-spaces 
        font-bold text-brand-blue-50 text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl p-5"
        style={{ textShadow: '0px 3px 4px rgba(0, 0, 0, 0.5)' }}>
        <div className="">
          <Image
            src={tower}
            alt="Tower"
            layout="responsive"
            className="rounded-md relative max-w-[300px] w-full aspect-w-4 aspect-h-2"
            style={{ objectFit: "cover" }}
          />
        </div>
        <p className="font-roboto whitespace-break-spaces text-center font-bold text-brand-blue-50 text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl p-5" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
          Browse our collection and choose what fits your style!
        </p>
        <div className="relative max-w-[1000px] w-full aspect-w-4 aspect-h-2">
        </div>
        <Link href="/games">
          <span className="uppercase whitespace-nowrap font-roboto-condensed text-base 
            px-20 py-7 rounded-lg bg-brand-blue-100 text-brand-blue-900 
            hover:bg-brand-blue-300 sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl transition-all duration-300 ease-in-out">
            GAMES
          </span>
        </Link>
      </div>
    </section>
    <section className="justify-center items-center pb-10 pt-2 mx-auto bg-blue-800">
      <div className="flex flex-col items-center justify-start gap-20 font-roboto whitespace-break-spaces 
        font-bold text-brand-blue-50 text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl p-5"
        style={{ textShadow: '0px 3px 4px rgba(0, 0, 0, 0.5)' }}>
        <div className="">
          <Image
            src={hammer}
            alt="Hammer"
            layout="responsive"
            className="rounded-md relative max-w-[300px] w-full aspect-w-4 aspect-h-2"
            style={{ objectFit: "cover" }}
          />
        </div>
        <p className="font-roboto whitespace-break-spaces text-center font-bold text-brand-blue-50 text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl p-5" style={{ textShadow: '0px 3px 4px rgba(0, 0, 0, 0.5)' }}>
          Give us your thoughts!
        </p>
        <div className="relative max-w-[1000px] w-full aspect-w-4 aspect-h-2">
        </div>
        <Link href="/contact">
          <span className="uppercase whitespace-nowrap font-roboto-condensed text-base 
            px-20 py-7 rounded-lg bg-brand-blue-100 text-brand-blue-900 
            hover:bg-brand-blue-300 sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl transition-all duration-300 ease-in-out">
            FEEDBACK
          </span>
        </Link>

      </div>
    </section>
  </div>
);
export default HeroSection;