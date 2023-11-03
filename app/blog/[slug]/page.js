"use server";
import Balancer from "react-wrap-balancer";
import { getBlocks, getPage } from "lib/notion";

export default async function Blog({ params }) {
  const blocks = await getBlocks(params.slug);
  const page = await getPage(params.slug);
  const title = page.properties.Name.title[0].plain_text;
  const date = page.properties.Date.date.start;

  return (
    <section>
      <h1 className="max-w-[650px] font-serif text-3xl font-bold">
        <Balancer>{title}</Balancer>
      </h1>
      <div className="mb-8 mt-4 grid max-w-[650px] grid-cols-[auto_1fr_auto] items-center font-mono text-sm">
        <div className="rounded-md bg-neutral-100 px-2 py-1 tracking-tighter dark:bg-neutral-800">
          {date}
        </div>
        <div className="mx-2 h-[0.2em] bg-neutral-50 dark:bg-neutral-800" />
      </div>
      {blocks.results.map((block) => {
        if (block.type === "heading_1" && block.heading_1.rich_text[0]) {
          return (
            <h1 className="my-5 text-2xl text-neutral-800 dark:text-neutral-200">
              {block.heading_1.rich_text[0].plain_text}
            </h1>
          );
        }
        if (block.type === "paragraph" && block.paragraph.rich_text[0]) {
          return (
            <p className="my-5 text-neutral-800 dark:text-neutral-200">
              {block.paragraph.rich_text[0].plain_text}
            </p>
          );
        }
        // Render other block types
      })}
    </section>
  );
}
