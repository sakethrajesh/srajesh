import Link from 'next/link';
import Image from 'next/image';
import { getBlogViews, getTweetCount, getStarCount } from 'lib/metrics';
import {
  ArrowIcon,
  GitHubIcon,
  TwitterIcon,
} from 'components/icons';
import { name, about, bio, avatar } from 'lib/info';

export const revalidate = 60;

export default async function HomePage() {
  let starCount, views, tweetCount;

  try {
    [starCount, views, tweetCount] = await Promise.all([
      getStarCount(),
      getBlogViews(),
      getTweetCount(),
    ]);
  } catch (error) {
    console.error(error);
  }

  return (
    <section>
      <h1 className="font-bold text-3xl font-serif">Hey There 👋🏽</h1>
      <h1 className="font-bold text-2xl font-serif">My name is Saketh Rajesh</h1>
        <p className="mr-5 my-5 max-w-[460px] text-neutral-800 dark:text-neutral-200">
          {about()}
        </p>
      <div className="flex items-start md:items-center my-8 flex-col md:flex-row">
        <Image
          alt={name}
          className="rounded mr-5"
          src={avatar}
          placeholder="blur"
          width={100}
          priority
        />
        
      <div className='max-w-[400px]'>

      <ul className="flex flex-col space-x-0 space-y-2 md:space-y-0 font-sm text-neutral-500 dark:text-neutral-400">
        <li>
          <a
            className="flex items-center hover:text-neutral-700 dark:hover:text-neutral-200 transition-all"
            rel="noopener noreferrer"
            target="_blank"
            href="https://twitter.com/leeerob"
          >
            <ArrowIcon />
            <p className="h-7">My Resume</p>
          </a>
        </li>
        <li>
          <a
            className="flex items-center hover:text-neutral-700 dark:hover:text-neutral-200 transition-all"
            rel="noopener noreferrer"
            // target="_blank"
            href="mailto:saketh@vt.edu"
          >
            <ArrowIcon />
            <p className="h-7">Email Me!</p>
          </a>
        </li>
      </ul>
      </div>
      </div>
      <p className="max-w-[600px] text-neutral-800 dark:text-neutral-200">
        {bio()}
      </p>
      <div className="flex items-start md:items-center my-8 flex-col md:flex-row">
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.linkedin.com/in/saketh-rajesh"
            className="flex items-center gap-2"
          >
            <TwitterIcon />
          </a>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/sakethrajesh"
            className="flex items-center gap-2"
          >
            <GitHubIcon />
          </a>
        </div>
    </section>
  );
}
