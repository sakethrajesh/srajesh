'use client'
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

import Balancer from 'react-wrap-balancer';
import { supabase } from 'lib/supabaseClient';
import { blocks, page } from 'lib/notion';

export default function Blog() {
  const [id, setId] = useState('')
  const pathname = usePathname();

  const [post, setPost] = useState('');
  const [title, setTitle] = useState('')
  const [date, setDate] = useState('')
  const [loading, setLoading] = useState(true);
  const [session, setSession] = useState(null)

  
  useEffect(() => {
    setSession(supabase.auth.getSession())
    supabase.auth.onAuthStateChange((_event, session) => setSession(session))
    
    const getPosts = async (id) => {
        const data = await blocks(pathname.substring(6))
        const p = await page(pathname.substring(6))
        setTitle(p.properties.Name.title[0].plain_text)
        setDate(p.properties.Date.date.start)
        console.log(data.results[0].paragraph)
        setPost(data.results[0].paragraph.rich_text[0].plain_text)
    }
    getPosts().then(() => setLoading(false))

  }, [])

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <section>
      <h1 className="font-bold text-3xl font-serif max-w-[650px]">
        <Balancer>{title}</Balancer>
      </h1>
      <div className="grid grid-cols-[auto_1fr_auto] items-center mt-4 mb-8 font-mono text-sm max-w-[650px]">
        <div className="bg-neutral-100 dark:bg-neutral-800 rounded-md px-2 py-1 tracking-tighter">
          {date}
        </div>
        <div className="h-[0.2em] bg-neutral-50 dark:bg-neutral-800 mx-2" />
      </div>
      <p>{post}</p>
  </section>
  );
}
