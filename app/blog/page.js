import Link from 'next/link';
import ViewCounter from './view-counter';
import { supabase } from '../../lib/supabaseClient'
import BlogList from '../../components/BlogList';

export default async function BlogPage() {

  return (
    <section>
      <BlogList/>
    </section>
  );
}