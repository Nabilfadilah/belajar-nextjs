import Image from "next/image";
import Link from "next/link";
import {getLastPost} from "../lib/api";
import PostList from "@/components/PostList";

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
        <PostList posts={posts} />
      </div>
    </>
  );
}
