import { Post } from "../page";

interface Params {
  postId: string;
}

const BASE_API_URL = "https://jsonplaceholder.typicode.com";

const getPost = async (id: string): Promise<Post> => {
  const data = await fetch(`${BASE_API_URL}/posts/${id}`);
  return data.json();
};

export default async function BlogPost({ params }: { params: Params }) {
  const post = await getPost(params.postId);

  return (
    <main className="justify-between items-center pt-16">
      <section className="justify-center min-h-screen p-10 mx-auto bg-blue-300">
        <div className="font-roboto-condensed whitespace-break-spaces text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl p-5">
          <div className="flex flex-col items-center justify-start gap-5">
            <div className="relative max-w-[1000px] w-full aspect-w-4 aspect-h-2">
              <div className="whitespace-break-spaces text-center font-bold text-brand-blue-50 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl p-5" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)', maxWidth: '100%' }}>
                <h1 className="font-extrabold capitalize text-blue-900 text-5xl lg:text-6xl pb-10">
                  <span className="text-5xl lg:text-6xl">Post {post.id}:</span> {post.title}
                </h1>
                <p className="text-4xl lg:text-5xl p-10 text-left bg-blue-200 rounded-lg">{post.body}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );

}