import ContentfulDataStore from '@/app/(contentful)/ContentfullDataStore';

export default async function Blog() {
    return (
        <main className="justify-between items-center pt-16 background-blue-900">
            <section className="justify-center p-16 mx-auto bg-blue-800">
                <div className="text-center text-brand-blue-50 text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl p-5">
                    <div className="flex flex-col items-center justify-start gap-5">
                        <div className="text-center  font-bold p-5" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
                            <h1 className="text-5xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-8xl text-brand-blue-100 pb-10">
                                Welcome to the marketplace
                            </h1>
                            <ContentfulDataStore />
                        </div>
                    </div>
                </div>
            </section >
        </main >
    );
}