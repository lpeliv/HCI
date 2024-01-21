import Link from "next/link";

export default function About() {
  return (
    <main className="justify-between items-center pt-16">
      <section className="justify-center mx-auto bg-blue-800">
        <div className="text-center text-brand-blue-50 text-xl sm:text-3xl md:text-4xl 
        lg:text-5xl xl:text-6xl p-5">
          <div className="flex flex-col items-center justify-start gap-5">
            <div className="relative max-w-[1000px] w-full aspect-w-4 aspect-h-2">
              <div className="text-center font-bold p-5"
                style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
                <h1 className="text-5xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 
                2xl:text-8xl text-brand-blue-100 pb-5">
                  Who are we?
                </h1>
                <p className="sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl">
                  We are a small indie game development studio.
                  We aim to create new genre of games and create unique user experience!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="p-2 mx-auto bg-blue-900">
        <div className="text-brand-blue-50 text-xl sm:text-3xl md:text-4xl 
        lg:text-5xl xl:text-6xl p-5">
          <div className="flex flex-col items-center justify-start gap-5">
            <div className="relative max-w-[1000px] w-full aspect-w-4 aspect-h-2">
              <div className="font-bold p-5" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
                <h1 className="text-center text-5xl sm:text-5xl md:text-6xl 
                lg:text-7xl xl:text-8xl 2xl:text-8xl text-brand-blue-100 pb-10">
                  Where can you find us?
                </h1>
                <p className="sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl">
                  <address className="bg-gradient-to-t from-blue-900 to-blue-600 rounded-xl p-4 mb-4">
                    <ul>
                      <li className="p-4">
                        <span className="text-brand-blue-200">
                          Address:
                        </span><div>Cesta dr. Franje Tuđmana 1016</div></li>
                      <li className="p-4">
                        <span className="text-brand-blue-200">
                          City:
                        </span><div>Kaštel Lukšić, Kaštela</div> </li>
                      <li className="p-4">
                        <span className="text-brand-blue-200">
                          Phone:
                        </span><div> +385 99 472 8731</div></li>
                      <li className="p-4">
                        <span className="text-brand-blue-200">
                          Email:
                        </span><div> devgame@gmail.com</div></li>
                    </ul>
                  </address>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="p-2 mx-auto bg-blue-800">
        <div className="text-center text-brand-blue-50 text-xl 
        sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl p-5">
          <div className="flex flex-col items-center justify-start gap-5">
            <div className="relative max-w-[1000px] w-full aspect-w-4 aspect-h-2">
              <div className="font-bold p-5" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
                <p className="font-roboto-condense whitespace-break-spaces text-center 
                font-bold text-brand-blue-50 text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl p-5"
                  style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
                  <h1 className="text-center text-5xl sm:text-5xl md:text-6xl 
                  lg:text-7xl xl:text-8xl 2xl:text-8xl text-brand-blue-100 pb-10">
                    Have a question?
                  </h1>
                  <p className="text-xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl pb-10">
                    In case you want to catch up with our work, you can press the button below to write
                    an e-mail and we will answer it as fast as possible!
                  </p>
                  <button
                    type="submit"
                    className="uppercase text-brand-blue-700 py-4 px-8 rounded-md text-xl 
                    sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl bg-blue-100 
                    hover:bg-blue-900 hover:text-blue-100 hover:shadow-lg transition-all 
                    duration-500 ease-in-out font-bold mx-auto"
                  >
                    <Link href="/contact">Feedback</Link>
                  </button>
                </p>

              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
