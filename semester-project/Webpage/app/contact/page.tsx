import ContactForm from "@/components/ContactForm";

export default function Contact() {
  return (
    <main className="justify-between items-center pt-16">
      <section className="justify-center p-12 mx-auto bg-blue-300">
        <div className="flex flex-col justify-start gap-5">
          <h1 className="font-roboto-condensed text-6xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-extrabold text-brand-blue-900 whitespace-break-spaces text-center sm:text-center" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
            Have any questions?
          </h1>
          <p className="font-roboto whitespace-break-spaces text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-blue-50 p-8" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
            Feel free to ask us{" "}
            <span className="font-roboto-condensed font-bold text-brand-blue-900 whitespace-nowrap">
              anything
            </span>
            !
          </p>
        </div>
        <ContactForm />
      </section>
    </main>
  );
}
