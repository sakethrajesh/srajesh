import { ArrowIcon } from "components/icons";
import Link from "next/link";

// export const Metadata = {
//   title: 'Projects',
//   description: 'Check out some of my recent projcts!',
// };

const projects = {
  "Food Snap": {
    body: "Instant recipes-- from just a picture-- to help stop food wastage!",
    link: "https://devpost.com/software/food-snap-q6apl5",
  },
  "The Narrator": {
    body: "The Narrator is a web application that enables users to dictate their stories and transform them into picture books using OpenAI’s DALL·E Model",
    link: "https://devpost.com/software/the-narrator",
  },
  "Powered Down": {
    body: "Powered Down allows users to select a location for the plug, and the plug will turn off when the user leaves that location and turn on when the user arrives at the location.",
    link: "https://devpost.com/software/project-6ufisdb5k719",
  },
  "Discord Application Tracker": {
    body: "This Discord Bot allows users to track which companies and roles they have applied to and track the status of their applications.",
    link: "https://devpost.com/software/application_stack",
  },
};

export default async function ProjectsPage() {
  return (
    <section>
      <h1 className="mb-5 font-serif text-3xl font-bold">Projects</h1>
      <ul role="list" className="divide-y divide-gray-100">
        {Object.entries(projects).map(([name, { body, link }]) => {
          return (
            <Link
              key={name}
              className="mb-4 flex flex-col space-y-1  hover:font-bold hover:text-neutral-800"
              href={link}
              target="_blank"
            >
              <div className="flex w-full flex-col">
                <h2 className="font-serif text-2xl font-bold">{name}</h2>
                <p className="text-neuteal-200 text-sm">{body}</p>
                <p className="font-mono text-sm tracking-tighter text-neutral-500">
                  {link}
                </p>
                <ArrowIcon />
              </div>
            </Link>
          );
        })}
      </ul>
    </section>
  );
}
