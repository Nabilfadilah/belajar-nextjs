import Image from "next/image";
import Link from "next/link";

async function getLastPost() {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=5"
  );
  const posts = await res.json();
  return posts;
}

export default async function Home() {
  const posts = await getLastPost();

  return (
    <>
      <div className="main-heading">
        <h1>Selamat Datang di NextJS News</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat in
          modi vitae dolor. Pariatur perferendis quos quam similique asperiores.
          Nulla maxime fugit id distinctio libero tenetur sit commodi modi
          nihil.
        </p>
      </div>

      <div className="post-list">
        {posts.map((post: any) => (
          <div className="post-item" key={post.id}>
            <h2>
              <Link href="/">{post.title}</Link>
            </h2>
          </div>
        ))}
      </div>
    </>
  );
}
