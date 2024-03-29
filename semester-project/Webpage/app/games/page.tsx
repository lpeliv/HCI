import contentfulService, { GameIcon } from "@/app/lib/contentfulClient";
import Image from "next/image";
import { FC } from "react";
import GameFilter from "../(contentful)/GameFilter";

export type SearchParams = {
  searchParams: Record<string, string | string[] | undefined>;
};

export interface TypeCategory {
  label: "Towers" | "Sealife" | "Zombies" | "Futuristic";
}

const Games: FC<SearchParams> = async ({ searchParams }) => {

  const gammes = await contentfulService.fetchGamesData();
  const gameTags: TypeCategory[] = [
    { label: "Towers" },
    { label: "Sealife" },
    { label: "Futuristic" },
    { label: "Zombies" },
  ];

  const gameFilter: string | string[] | undefined = searchParams._category;

  const filteredGames = typeof gameFilter === 'string'
    ? gammes.filter((item) => item.filterLabel === gameFilter)
    : gammes;


  return (
    <main className="justify-between items-center pt-16 background-blue-900">
      <section className="justify-center mx-auto bg-blue-800">
        <div className="text-center text-brand-blue-50 text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl p-5">
          <div className="flex flex-col items-center justify-start gap-5">
            <div className="text-center  font-bold p-5" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
              <h1 className="text-5xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-8xl text-brand-blue-100 pb-10">
                Our game library
              </h1>
              <p className="sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl pb-10">
                Games we are releasing are listed below.
              </p>
              <GameFilter categories={gameTags} />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-10">
                {filteredGames.map((item) => {
                  return (
                    <div
                      key={item.id}
                      className="bg-gradient-to-r from-blue-900 to-blue-700 p-3 pb-32 rounded-l shadow-lg
                    transition-all duration-500 ease-in-out transform hover:from-blue-200 
                    hover:to-blue-500 hover:shadow-xl hover:scale-110 text-blue-50 hover:text-blue-900 group"
                      style={{ textShadow: '0px 0px 2px rgba(0, 0, 0, 0.5)' }}
                    >
                      <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-5xl pb-5">
                        {item.gameName}
                      </h2>
                      <div className="hidden absolute inset-0 bg-gradient-to-r
                    p-3 rounded-md shadow-lg transition-all duration-500 ease-in-out transform 
                    group-hover:from-blue-200 group-hover:to-blue-500 group-hover:shadow-xl hover:text-blue-900 
                    group-hover:block text-1xl sm:text-1xl md:text-2xl lg:text-2xl 
                    xl:text-3xl 2xl:text-3xl">
                        <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-5xl pb-5">
                          {item.gameName}
                        </h2>
                        <h3 className="text-blue-100">
                          {item.shortDescription}
                        </h3>
                      </div>
                      <div className="mt-2 ">
                        <Image
                          src={item.url}
                          alt={item.title}
                          objectFit="cover"
                          objectPosition="center"
                          width={500}
                          height={100}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Games;