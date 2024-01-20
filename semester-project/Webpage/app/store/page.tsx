import contentfulService from "@/app/lib/contentfulClient";
import { useState } from "react";
import Image from "next/image";

export default async function Store({
}: {
  searchParams: Record<string, string | string[] | undefined>;
}) {
  const items = await contentfulService.fetchStoreData();
//   console.log('Store items fetched:', items);

  return (
    <main className="justify-between items-center pt-16 background-blue-900">
      <section className="justify-center p-16 mx-auto bg-blue-800">
        <div className="text-center text-brand-blue-50 text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl p-5">
          <div className="flex flex-col items-center justify-start gap-5">
            <div className="text-center  font-bold p-5" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
              <h1 className="text-5xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-8xl text-brand-blue-100 pb-10">
                Welcome to the marketplace
              </h1>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {items.map((item) => (
                  <div key={item.id} className="bg-gradient-to-r from-blue-900 to-blue-700 p-3 rounded-l m-2 shadow-lg
                  transition-all duration-500 ease-in-out transform hover:from-blue-200 
                  hover:to-blue-500 hover:shadow-xl hover:scale-110 text-blue-50 hover:text-blue-900"
                  style={{ textShadow: '0px 0px 2px rgba(0, 0, 0, 0.5)' }}>
                    <h2 className="text-lg font-semibold">{item.itemName}</h2>
                    <div className="mt-2 w-full h-32">
                      <Image
                        src={item.url}
                        alt={item.title}
                        objectFit="cover"
                        objectPosition="center"
                        width={100}
                        height={100}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}