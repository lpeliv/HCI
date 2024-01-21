import ContactForm from "@/components/ContactForm";

export default function Contact() {
  return (
    <main className="justify-between items-center pt-16">
      <section className="justify-centermx-auto bg-blue-800">
        <div className="text-center text-brand-blue-50 text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl p-5">
          <div className="flex flex-col items-center justify-start gap-5">
            <div className="text-center font-bold p-5" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
              <h1 className="text-5xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-8xl text-brand-blue-100 pb-5">
                Have any questions?
              </h1>
              <p className="font-roboto whitespace-break-spaces text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-blue-50 p-8" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
                Feel free to ask us anything!
              </p>
            </div>
          </div>
        </div>
        <ContactForm />
      </section>
    </main>
  );
}