'use client';

import { useRouter } from 'next/navigation';
import { useState, useTransition } from 'react';

export default function Form({onSubmit}) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [isFetching, setIsFetching] = useState(false);
  const isMutating = isFetching || isPending;

  const [comment, setComment] = useState("")

  // async function onSubmit() {
  //   e.preventDefault();
  //   setIsFetching(true);

  // }

  return (
    <div
      style={{ opacity: !isMutating ? 1 : 0.7 }}
      className="relative max-w-[500px] text-sm"
      >
      <input
        aria-label="Your message"
        placeholder="Your comment..."
        disabled={isPending}
        name="entry"
        type="text"
        required
        className="pl-4 pr-32 py-2 mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full border-neutral-300 rounded-md bg-gray-100 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100"
        value={comment}
        onChange={(e) =>
          setComment(e.target.value)
        }
      />
      <button
        onClick={() => {
          onSubmit(comment)
          setComment('')
        }}
        className="flex items-center justify-center absolute right-1 top-1 px-2 py-1 font-medium h-7 bg-neutral-200 dark:bg-neutral-700 text-neutral-900 dark:text-neutral-100 rounded w-16"
        disabled={isMutating}
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
        </svg>
      </button>
    </div>
  );
}
