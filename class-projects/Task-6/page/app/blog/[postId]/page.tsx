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
    <main className="flex min-h-screen flex-col items-center p-10">
      <h1 className="text-3xl font-bold p-10 capitalize">
      <span className="text-blue-900">Post {post.id}:</span> {post.title}
      </h1>
      <p className="text-xl p-10">{post.body}</p>
    </main>
  );
}