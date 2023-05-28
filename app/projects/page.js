import { ArrowIcon } from 'components/icons';
import Link from 'next/link';

// export const Metadata = {
//   title: 'Projects',
//   description: 'Check out some of my recent projcts!',
// };

const projects = {
  'The Narrator': {
    body: 'The Narrator is a web application that enables users to dictate their stories and transform them into picture books using OpenAI’s DALL·E Model',
    link: 'https://devpost.com/software/the-narrator',
  },
  'Powered Down': {
    body: 'Powered Down allows users to select a location for the plug, and the plug will turn off when the user leaves that location and turn on when the user arrives at the location.',
    link: 'https://devpost.com/software/project-6ufisdb5k719',
  },
  'Discord Application Tracker': {
    body: 'This Discord Bot allows users to track which companies and roles they have applied to and track the status of their applications.',
    link: 'https://devpost.com/software/application_stack',
  },
  'Grocery Lens': {
    body: 'Track your groceries using a simple app that identifies fruits and vegetables.',
    link: '',
  },
};


export default async function ProjectsPage() {
  return (
    <section>
      <h1 className="font-bold text-3xl font-serif mb-5">Projects</h1>
          <ul role="list" className="divide-y divide-gray-100">
              {Object.entries(projects).map(([name, { body, link }]) => {
                return (
                  <Link
                    key={name}
                    className="flex flex-col space-y-1 mb-4  hover:text-neutral-800 hover:font-bold"
                    href={link}
                   target="_blank"
  
                  >
                    <div className="w-full flex flex-col">
                      <h2 className='font-bold text-2xl font-serif'>{name}</h2>
                      <p className='text-sm text-neuteal-200'>{body}</p>
                      <p className="font-mono text-sm text-neutral-500 tracking-tighter">
                        {link}
                      </p>
                      <ArrowIcon/>
                    </div>
                  </Link>
                );
              })}
          </ul>
    </section>
  );
}
