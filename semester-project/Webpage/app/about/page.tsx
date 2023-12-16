import Link from "next/link";

export default function About() {
  return (
    <main className="justify-between items-center pt-16">
      <section className="justify-center p-10 mx-auto bg-blue-300">
        <div className="font-roboto-condensed whitespace-break-spaces text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl p-5">
          <div className="flex flex-col items-center justify-start gap-5">
            <div className="relative max-w-[1000px] w-full aspect-w-4 aspect-h-2">
              <div className=" whitespace-break-spaces text-center font-bold text-brand-blue-50 whitespace-nowrap text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl p-5" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
                <h1 className="text-5xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-8xl text-brand-blue-900">
                  Who are we?
                </h1>
                <p className="sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl p-5 ">
                  We are a small{" "}
                  <span className="text-brand-blue-900">
                    indie
                  </span>
                  {" "}game development studio.
                  We aim to create new{" "}
                  <span className="text-brand-blue-900">
                    genre
                  </span>
                  {" "}of games and create unique user experience,{" "}
                  <span className="text-brand-blue-900">
                    NEVER SEEN
                  </span>
                  {" "}before!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="justify-center items-center p-10 mx-auto bg-blue-400 h-full">
        <div className="font-roboto-condensed text-xl sm:text-xl md:text-4xl lg:text-5xl xl:text-6xl p-5">
          <div className="flex flex-col items-center justify-start gap-5">
            <div className="font-bold text-brand-blue-50 text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl p-5" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
              <h1 className="text-5xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-8xl font-extrabold text-brand-blue-900 whitespace-break-spaces text-center sm:text-center">
                Where can you find us?
              </h1>
              <p className="sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl p-5">
                <address className="bg-blue-300 rounded-xl p-4 mb-4">
                  <ul>
                    <li className="p-4">
                      <span className="text-brand-blue-900">
                        Address:
                      </span><div>Cesta dr. Franje Tuđmana 1016</div></li>
                    <li className="p-4">
                      <span className="text-brand-blue-900">
                        City:
                      </span><div>Kaštel Lukšić, Kaštela</div> </li>
                    <li className="p-4">
                      <span className="text-brand-blue-900">
                        Phone:
                      </span><div> +385 99 472 8731</div></li>
                    <li className="p-4">
                      <span className="text-brand-blue-900">
                        Email:
                      </span><div> devgame@gmail.com</div></li>
                  </ul>
                </address>
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="justify-center items-center p-10 mx-auto bg-blue-500">
        <div className="flex flex-col items-center justify-start gap-5">
          <p className="font-roboto-condense whitespace-break-spaces text-center font-bold text-brand-blue-50 text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl p-5" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
            <h1 className="text-5xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-8xl font-bold text-brand-blue-50 whitespace-break-spaces text-center sm:text-center">
              Have a question?
            </h1>
            <p className="whitespace-break-spaces text-xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl p-5">
              In case you want to catch up with our{" "}
              <span className="text-brand-blue-900 whitespace-nowrap">
                work
              </span>
              {" "}, you can press the button below to write an{" "}
              <span className="text-brand-blue-900 whitespace-nowrap">
                e-mail
              </span>
              {" "} and we will answer it as{" "}
              <span className="text-brand-blue-900 whitespace-nowrap">
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
