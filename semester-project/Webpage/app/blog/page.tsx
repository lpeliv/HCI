import Link from "next/link";
import clsx from "clsx";
import ContentfulData from '@/app/(contentful)/ContentfullData';

// export interface Post {
//   userId: number;
//   id: number;
//   title: string;
//   body: string;
// }

interface Pagination {
  limit: number;
  page: number;
}

// const BASE_API_URL = "https://jsonplaceholder.typicode.com";

// const getPosts = async (
//   pagination: Pagination = {
//     limit: 9999,
//     page: 1,
//   }
// ): Promise<Post[]> => {
//   const data = await fetch(
//     `${BASE_API_URL}/posts?_limit=${pagination.limit}&_page=${pagination.page}`
//   );
//   return data.json();
// };

// const getTotalPosts = async (): Promise<number> => {
//   const response = await fetch(`${BASE_API_URL}/posts?_limit=1`, {
//     method: "HEAD",
//   });

//   return parseInt(response.headers.get("x-total-count") || "1", 10);
// };

export default async function Blog({
  // searchParams,
}: {
  // searchParams: Record<string, string | string[] | undefined>;
}) {
  // const { _limit, _page } = searchParams;
  // const [pageSize, page] = [_limit, _page].map(Number);
  // const totalPosts = await getTotalPosts();
  // const totalPages = Math.ceil(totalPosts / pageSize);

  // const posts = await getPosts({
  //   limit: pageSize,
  //   page: page,
  // });

  return (
    <main className="justify-between items-center pt-16">
      <section className="justify-center p-10 mx-auto bg-blue-300">
        <div className="font-roboto-condensed whitespace-break-spaces text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl p-5 text-blue-100">
          <div className="flex flex-col items-center justify-start gap-5">
            <div className="relative max-w-[1000px] w-full aspect-w-4 aspect-h-2">
              <div className="whitespace-break-spaces font-bold">
                {(
                  //pagination here
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