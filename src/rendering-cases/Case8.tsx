import { useEffect, useState } from "react";

interface Post {
  id: number;
  title: string;
}

export default function Case8() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts?_limit=5"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch posts. Please try again later.");
        }
        const data: Post[] = await response.json();
        setPosts(data);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  let content;

  if (loading) {
    content = <p>Loading data, please wait...</p>;
  } else if (error) {
    content = <p className="text-red-600">Error: {error}</p>;
  } else if (posts.length > 0) {
    content = (
      <section>
        <h1 className="text-2xl font-bold mb-4">Posts</h1>
        <ul className="list-disc pl-5">
          {posts.map((post) => (
            <li key={post.id} className="mb-2 text-gray-400">
              {post.title}
            </li>
          ))}
        </ul>
      </section>
    );
  } else {
    content = <p className="text-gray-500">No posts available.</p>;
  }

  return <main className="p-6 min-h-screen">{content}</main>;
}
