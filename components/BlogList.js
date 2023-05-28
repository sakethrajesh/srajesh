'use client';

import Link from 'next/link';
import React, { useState } from 'react'
import { useEffect } from 'react'
import { supabase } from '../lib/supabaseClient'
import { posts } from 'lib/notion';

function BlogList({list}) {
    const [session, setSession] = useState(null)
    const [blogs, setBlogs] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setSession(supabase.auth.getSession())
        supabase.auth.onAuthStateChange((_event, session) => setSession(session))
        
        const getPosts = async () => {
            // let { data, error } = await supabase
            // .from('blog_posts')
            // .select('*')
            // console.log(JSON.stringify(data, null, 2))

            const data = await posts()
            console.log(data.results)
            setBlogs(data.results)
        }
        getPosts()
        setLoading(false)
        
    }, [])

    if (loading) {
        return (
            <>
                <h1 className="font-bold text-3xl font-serif mb-5">Blogs</h1>
                <div>Loading...</div>
            </>
            );
      }

  return (
    <>
        <h1 className="font-bold text-3xl font-serif mb-5">Blogs</h1>
        {blogs
            .map((post) => (
            <Link
                key={post.id}
                className="flex flex-col space-y-1 mb-4"
                href={{
                    pathname: `/blog/${post.id}`,
                }}
            >
                <div className="w-full flex flex-col">
                <p>{post.properties.Name.title[0].plain_text}</p>
                <p>{post.properties.Date.date.start}</p>
                </div>
            </Link>
            ))}
    </>
  )
}

export default BlogList