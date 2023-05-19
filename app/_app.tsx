// 1. import `NextUIProvider` component
import { NextUIProvider } from '@nextui-org/react';
import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs'
import { SessionContextProvider } from '@supabase/auth-helpers-react'
import { useState } from 'react';

function MyApp({ Component, pageProps }) {
  const [supabase] = useState(() => createBrowserSupabaseClient())

  return (
    // 2. Use at the root of your app
    <NextUIProvider>
      <SessionContextProvider supabaseClient={supabase} initialSession={pageProps.initialSession}>
        <Component {...pageProps} />
      </SessionContextProvider>
    </NextUIProvider>
  );
}

export default MyApp;
