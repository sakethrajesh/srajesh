'use client';

import { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabaseClient'

export default function Auth({}) {

  const [session, setSession] = useState(null)

  useEffect(() => {
    setSession(supabase.auth.getSession())
    supabase.auth.onAuthStateChange((_event, session) => setSession(session))
  }, [])

  async function signout() {
    const { error } = await supabase.auth.signOut()
    if (error) console.log('Error: ', error.message)

  }

  async function handleOAuthLogin(provider) {    
    const { data, error } = await supabase.auth.signInWithOAuth({
        provider: provider,
        redirectTo: '/gallery'
    })
  
    if (error) console.log('Error: ', error.message)
  }

  return (
    <div className="my-2 ml-2 flex flex-row">
      {
        !session ? (
          <button
                onClick={() => handleOAuthLogin('google')}
                type="button"
                className="flex items-center justify-center py-2 px-5 border border-gray-600 rounded-md focus:ring-2 focus:ring-offset-1 focus:ring-violet-600"
              >
                  <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 32 32"
                      className="w-3 h-3 fill-current"
                  >
                      <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                  </svg>
                <p className="text-xs font-serif ml-2">sign in with Google</p>
              </button>
        ) : (
              <button
                onClick={() => signout()}
                type="button"
                className="flex items-center justify-center py-2 px-5 border border-gray-600 rounded-md focus:ring-2 focus:ring-offset-1 focus:ring-violet-600"
              >
                <p className="text-xs font-serif">sign out</p>
              </button>
        )
      }
    </div>
  )
}
