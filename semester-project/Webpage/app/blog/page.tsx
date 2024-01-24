import ContentfulData from '@/app/(contentful)/ContentfullData';

export default async function Blog({
}: {
  }) {

  return (
    <main className="justify-between items-center pt-16">
      <section className="justify-center pt-10 mx-auto bg-blue-800">
        <div className="font-roboto-condensed whitespace-break-spaces 
        text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl p-5 text-blue-100">
          <div className="flex flex-col items-center justify-start gap-5">
            <div className="relative max-w-[1000px] w-full aspect-w-4 aspect-h-2">
              <div className="whitespace-break-spaces font-bold">
                {(
                  <>
                    <ContentfulData />
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}