import Link from "next/link";

export default function About() {
  return (
    <main className="justify-between items-center pt-16">
      <section className="justify-center items-center p-10 mx-auto bg-blue-300">
        <p className="font-roboto whitespace-break-spaces text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl p-5">
          <div className="flex flex-col items-center justify-start gap-5">
            <div className="relative max-w-[1000px] w-full aspect-w-4 aspect-h-2">
              <p className="font-roboto whitespace-break-spaces text-center font-bold text-brand-blue-50 text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl p-5" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
                Who are{" "}
                <span className="font-roboto-condensed font-bold text-brand-blue-900 whitespace-nowrap">
                  we
                </span>
                ?
                <p className="font-roboto whitespace-break-spaces text-center text-xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl p-5" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
                  We are a small{" "}
                  <span className="font-roboto-condensed font-bold text-brand-blue-900 whitespace-nowrap">
                    indie
                  </span>
                  {" "}game development studio.
                  We aim to create new{" "}
                  <span className="font-roboto-condensed font-bold text-brand-blue-900 whitespace-nowrap">
                    genre
                  </span>
                  {" "}of games and create unique user experience,{" "}
                  <span className="font-roboto-condensed font-bold text-brand-blue-900 whitespace-nowrap">
                    NEVER SEEN
                  </span>
                  {" "}before!
                </p>
              </p>
            </div>
          </div>
        </p>
      </section>
      <section className="justify-center items-center p-10 mx-auto bg-blue-400 h-full">
        <p className="font-roboto whitespace-break-spaces text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl p-5">
          <div className="flex flex-col items-center justify-start gap-5">
            <p className="font-roboto whitespace-break-spaces text-center font-bold text-brand-blue-50 text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl p-5" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
              <p>
                Where can you{" "}
                <span className="font-roboto-condensed font-bold text-brand-blue-900 whitespace-nowrap ">
                  find
                </span>
                {" "}us?
              </p>
              <p className="font-roboto whitespace-break-spaces text-center text-brand-blue-50 text-xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl p-5" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
                <address className="bg-blue-300 rounded-xl p-4 mb-4">
                  <p className="p-4 mb-4">Cesta dr. Franje Tuđmana 1016</p>
                  <p className="p-4 mb-4">Kaštel Lukšić, Kaštela</p>
                  <p className="p-4 mb-4">Phone: +385 99 472 8731</p>
                  <p className="p-4 mb-4">Email: devgame@gmail.com</p>
                </address>
              </p>
            </p>
          </div>
        </p>
      </section>
      <section className="justify-center items-center p-10 mx-auto bg-blue-300">
        <div className="flex flex-col items-center justify-start gap-5">
          <p className="font-roboto whitespace-break-spaces text-center font-bold text-brand-blue-50 text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl p-5" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
            <p>
              Have a{" "}
              <span className="font-roboto-condensed font-bold text-brand-blue-900 whitespace-nowrap ">
                question
              </span>
              {" "}?
            </p>
            <p className="font-roboto whitespace-break-spaces text-center text-xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl p-5" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
                  In case you want to catch up with our{" "}
                  <span className="font-roboto-condensed font-bold text-brand-blue-900 whitespace-nowrap">
                    work
                  </span>
                  {" "}, you can press the button below to write an{" "}
                  <span className="font-roboto-condensed font-bold text-brand-blue-900 whitespace-nowrap">
                    e-mail
                  </span>
                  {" "} and we will answer it as{" "}
                  <span className="font-roboto-condensed font-bold text-brand-blue-900 whitespace-nowrap">
                    fast
                  </span>
                  {" "}as possible!
                </p>
          </p>
          <div className="relative max-w-[1000px] w-full aspect-w-4 aspect-h-2">
          </div>
          <button className="bg-blue-700 text-brand-blue-50 py-4 px-8 sm:w-2/3 md:w-1/3 lg:w-1/4 xl:w-1/5 rounded-full text-base sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl uppercase font-bold transition-all duration-300 ease-in-out hover:bg-blue-900 hover:shadow-lg">
            <Link href="/contact">
              Feedback
            </Link>
          </button>
        </div>
      </section>
    </main>
  );
}
