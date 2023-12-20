"use client"
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
              <div className=" whitespace-break-spaces text-center font-bold text-brand-blue-50 whitespace-nowrap text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl p-5 text-blue-100" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)', maxWidth: '100%' }}>
                {(
                  <>
                    {/* <div className="pb-10 text-blue-50">
                      <div className="pb-10">
                        Page {page} of {totalPages}
                      </div>
                      <div className="flex gap-4 justify-center items-center">
                        <Link
                          href={{
                            pathname: "/blog",
                            query: { _page: 1, _limit: pageSize },
                          }}
                          className="rounded border bg-gray-100 px-3 py-1 text-blue-800"
                        >
                          First
                        </Link>
                        <Link
                          href={{
                            pathname: "/blog",
                            query: { _page: page > 1 ? page - 1 : 1, _limit: pageSize },
                          }}
                          className={clsx(
                            "rounded border bg-gray-100 px-3 py-1 text-blue-800",
                            page === 1 && "pointer-events-none opacity-50"
                          )}
                        >
                          Previous
                        </Link>
                        <Link
                          href={{
                            pathname: "/blog",
                            query: { _page: page + 1, _limit: pageSize },
                          }}
                          className={clsx(
                            "rounded border bg-gray-100 px-3 py-1 text-blue-800",
                            page === totalPages && "pointer-events-none opacity-50"
                          )}
                        >
                          Next
                        </Link>
                        <Link
                          href={{
                            pathname: "/blog",
                            query: { _page: totalPages, _limit: pageSize },
                          }}
                          className="rounded border bg-gray-100 px-3 py-1 text-blue-800"
                        >
                          Last
                        </Link>
                      </div>
                    </div> */}
                    {/* <ul className="flex flex-col gap-8 p-4">
                      {posts.map((post) => (
                        <li key={post.id} className="bg-blue-100 p-2 rounded-lg">
                          <Link href={`blog/${post.id}`}>
                            <span className="text-3xl text-blue-900">Post {post.title}</span>
                          </Link>
                        </li>
                      ))}
                    </ul> */}
                    <ContentfulData />
                    {/* <div className="pb-10 text-blue-50">
                      <div className="pb-10">
                        Page {page} of {totalPages}
                      </div>
                      <div className="flex gap-4 justify-center items-center">
                        <Link
                          href={{
                            pathname: "/blog",
                            query: { _page: 1, _limit: pageSize },
                          }}
                          className="rounded border bg-gray-100 px-3 py-1 text-blue-800"
                        >
                          First
                        </Link>
                        <Link
                          href={{
                            pathname: "/blog",
                            query: { _page: page > 1 ? page - 1 : 1, _limit: pageSize },
                          }}
                          className={clsx(
                            "rounded border bg-gray-100 px-3 py-1 text-blue-800",
                            page === 1 && "pointer-events-none opacity-50"
                          )}
                        >
                          Previous
                        </Link>
                        <Link
                          href={{
                            pathname: "/blog",
                            query: { _page: page + 1, _limit: pageSize },
                          }}
                          className={clsx(
                            "rounded border bg-gray-100 px-3 py-1 text-blue-800",
                            page === totalPages && "pointer-events-none opacity-50"
                          )}
                        >
                          Next
                        </Link>
                        <Link
                          href={{
                            pathname: "/blog",
                            query: { _page: totalPages, _limit: pageSize },
                          }}
                          className="rounded border bg-gray-100 px-3 py-1 text-blue-800"
                        >
                          Last
                        </Link>
                      </div>
                    </div> */}
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