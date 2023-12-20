import ContentfulData from '../(contentful)/ContentfullData';

export default function Contact() {
    return (
        <main className="justify-between items-center pt-16">
            <section className="justify-center p-12 mx-auto bg-blue-300">
                <div className="flex flex-col justify-start gap-5">
                    <div>
                        <h1>Your Next.js Contentful App</h1>
                        <ContentfulData />
                    </div>
                </div>
            </section>
        </main>
    );
}
