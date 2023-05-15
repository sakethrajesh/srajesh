import { allBlogs } from 'contentlayer/generated';

export default async function sitemap() {
  // const blogs = allBlogs.map((post) => ({
  //   url: `https://leerob.io/blog/${post.slug}`,
  //   lastModified: post.publishedAt,
  // }));

  const routes = ['', '/about', '/projects', '/guestbook', '/uses'].map(
    (route) => ({
      url: `https://srajesh.vercel.app/${route}`,
      lastModified: new Date().toISOString().split('T')[0],
    })
  );

  return [...routes];
}
