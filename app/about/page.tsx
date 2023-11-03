"use client";
import { usePathname, useRouter } from "next/navigation";

export default function AboutPage() {
  // const r = useRouter()
  const pathname = usePathname();

  return (
    <section>
      <h1 className="font-serif text-3xl font-bold">About Me</h1>
      <p className="my-5 text-neutral-800 dark:text-neutral-200">
        I'm Saketh Rajesh, a driven computer science student graduating from
        Virginia Tech in May 2025. I'm passionate about software engineering and
        building innovative applications. Outside of coding, I'm a huge
        basketball fan and die-hard Bay Area sports fanatic. I also love
        photography - check out my <a href="gallery.html">gallery</a> for some
        of my favorite shots!
      </p>

      <p className="my-5 text-neutral-800 dark:text-neutral-200">
        I'm currently pursuing my B.S. in Computer Science at Virginia Tech with
        an overall GPA of 3.71/4.00. Through my coursework and hands-on
        experience, I've become proficient in languages like Python, Java,
        JavaScript, C/C++, and Go. I have experience building full stack
        applications using frameworks like Spring Boot, React, Node.js, and
        Django.
      </p>

      <p className="my-5 text-neutral-800 dark:text-neutral-200">
        On the backend, I have worked with databases like MySQL, MongoDB, and
        PostgreSQL. I leverage cloud platforms like AWS, Azure, and GCP to
        deploy scalable applications. I'm also familiar with developer tools
        like Linux, Git, Docker, Kubernetes, and CI/CD pipelines.
      </p>

      <p className="my-5 text-neutral-800 dark:text-neutral-200">
        I have professional experience through internships at companies like
        Peraton, IBM/Octo, and SmartTwigs. My roles have included building APIs,
        integrating payment systems, containerizing applications, and optimizing
        workloads. I've also conducted network analysis and machine learning
        research.
      </p>

      <p className="my-5 text-neutral-800 dark:text-neutral-200">
        Outside of work, I serve as a software engineering mentor for teams
        competing in hackathons and challenges like the Microsoft Imagine Cup. I
        enjoy teaching others and helping them build their technical skills.
      </p>

      <p className="my-5 text-neutral-800 dark:text-neutral-200">
        In my free time, you can find me playing pickup basketball at the gym or
        rooting for the Warriors and 49ers. I also love landscape and urban
        photography. I'm always looking for new places to explore and capture
        through my lens.
      </p>

      <p className="my-5 text-neutral-800 dark:text-neutral-200">
        I'm excited to continue growing as a software engineer. I'm a driven,
        quick learner looking to join a collaborative team where I can
        contribute meaningfully.
      </p>
    </section>
  );
}
