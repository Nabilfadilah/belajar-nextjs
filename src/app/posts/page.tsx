import PostList from "@/components/PostList";
import {getAllPosts} from "@/lib/api";

const page = async () => {
  const posts = await getAllPosts();

  return (
    <>
      <div className="main-heading">
        <h2>Daftar Tulisan</h2>
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
};

export default page;
