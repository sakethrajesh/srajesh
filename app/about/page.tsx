'use client'
import { useRouter } from 'next/router';


export default function AboutPage() {
  const r = useRouter()

  return (
    <section>
      <h1 className="font-bold text-3xl font-serif">About Me</h1>
      <p className="my-5 text-neutral-800 dark:text-neutral-200">
        I am currently pursuing my Bachelor of Science in Computer Science at Virginia Tech, with an expected graduation date of May 2025. I have previous experience as a FullStack Software Engineer Intern at SmartTwigs/Sesto Labs, where I developed a modular, reusable React component-based front end for a social media/awareness web and mobile app. I also implemented Stripe API for payment/donation services and payment error handling, designed and built a commenting service used by over 1000 daily users, and leveraged Sentry Analytics to identify performance issues and crashes.

<br/><br/>In my most recent position as a Research Fellow at Raytheon Technologies, I gained hands-on ITAR-level traineeship in tools and techniques for applied machine learning and cybersecurity. In my upcoming role as an Incoming Machine Learning Engineering Intern at Octo (IBM), I will be working on machine learning and cybersecurity research.

I have also completed several exciting projects, including The Narrator, a platform that empowers and preserves oral traditions and stories passed down from generation to generation, using Next.js, OpenAI-Dalle Model, MongoDB, and Vercel. I also created Powered Down, a web app that automatically turns lights on/off based on location and time of day, using React, SocketIO, Flask, and Firebase, which won Best Web Hack Using Flask and Best use of Google Cloud at HackViolet.
<br /><br/>
I am an active member of various clubs and organizations, such as the Hokie Electric Vehicle Team, where I am Integrating ACC, lane centering, and automatic intersection navigation into 2023 Cadillac LYRIQ for EcoCAR EV Challenge. I am also a Software Engineering Mentor at the Archimedes Society, where I advise freshman software design teams and teach software development fundamentals in building cloud applications.

      </p>
      <p>{r.asPath}</p>
    </section>
  );
}
