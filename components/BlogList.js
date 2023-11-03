"use server";

import { GetPosts } from "lib/notion";
import Link from "next/link";

async function BlogList() {
  const blogs = await GetPosts();

  console.log(blogs.results);

  return (
    <>
      <h1 className="mb-5 font-serif text-3xl font-bold">Blogs</h1>
      {blogs.results.map((post) => (
        <Link
          key={post.id}
          className="mb-4 flex flex-col space-y-1"
          href={{
            pathname: `/blog/${post.id}`,
          }}
        >
          <div className="flex w-full flex-col">
            <p>{post.properties.Name.title[0].plain_text}</p>
            <p>{post.properties.Date.date.start}</p>
          </div>
        </Link>
      ))}
    </>
  );
}

export default BlogList;
