'use client';

import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useRef, useState } from 'react'
import Form from './form';
import { supabase } from '../../lib/supabaseClient'
import { useEffect } from 'react';

export default function comments({title, id}) {
    let [isOpen, setIsOpen] = useState(false)
    const [comments, setComments] = useState([]);
    const cancelButtonRef = useRef(null)
    const [session, setSession] = useState(null)
    const [ready, setReady] = useState(false)

    useEffect(() => {
        setSession(supabase.auth.getSession())
        supabase.auth.onAuthStateChange((_event, session) => setSession(session))
        
        const getComments = async () => {
            let { data, error } = await supabase
            .from('gallery')
            .select('comments')
            .eq('id', id+1)
            console.log(JSON.stringify(data[0]["comments"], null, 2))
            setComments(data[0]["comments"])
        }
        getComments()
        
    }, [])
    
    useEffect(() => {
        console.log(comments)

        const send = async () => {
            const { data, error } = await supabase
            .from('gallery')
            .update({ comments: comments })
            .eq('id', id+1)

        }

        if(ready === true) {
            send()
        }
        setReady(false)

    }, [comments])

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  const submit = async (content) => {
    // e.preventDefault();
    setComments((comments) => [
        ...comments,
        {
            name: session.user.email,
            content: content
        },
    ])
    setReady(true)

}

async function handleOAuthLogin(provider) {    
    const { data, error } = await supabase.auth.signInWithOAuth({
        provider: provider,
        redirectTo: '/gallery'
    })
  
    if (error) console.log('Error: ', error.message)
  }

  const handleDelete = async(index) => {
    setComments((comments) => {
        return comments.filter((_, i) => i !== index)
    })
    setReady(true)

  }

  return (
                <>
                <div className="">
                    <button
                    type="button"
                    onClick={openModal}
                    className="w-full rounded bg-black bg-opacity-20 px-4 py-2 text-sm  font-serif text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
                    >
                    View {comments.length} Comments
                    </button>
                </div>
            
                <Transition appear show={isOpen} as={Fragment}>
                    <Dialog as="div" className="relative z-10" onClose={closeModal} initialFocus={cancelButtonRef}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>
            
                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded bg-gray-200 p-6 text-left align-middle shadow-xl transition-all">
                            <Dialog.Title
                                as="h3"
                                className="text-lg font-medium leading-6 text-gray-900"
                            >
                                {title}
                            </Dialog.Title>
                            <div className="mb-2">
                                <p className="text-sm text-gray-500">
                                add your comment!
                                </p>
                                </div>
                                {comments.length === 0 ? (
                                    null
                                ) : (
                                        <div className='mb-4 divide-y divide-gray-400'>
                                        {comments.map((comment, i) => (
                                            <div className='flex flex-row' key={i}>
                                                <h2 className="text-sm text-gray-500 mr-3">{comment.name}:</h2>
                                                <h2 className="text-sm text-gray-500 w-full">{comment.content}</h2>
                                                {session && comment.name == session.user.email ? (
                                                    <div
                                                        onClick={() => handleDelete(i)}
                                                        className='flex justify-end'
                                                    >
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="red" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 self-center">
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                                        </svg>
                                                    </div>
                                                  
                                                ) : (
                                                    null
                                                )

                                                }
                                            </div>
                                        ))}
                                        </div>
                                    )
                                }
                                {
                                    session ? (
                                        <Form onSubmit={submit}/>
                                    ) : (
                                        
                                        <button
                                            onClick={() => handleOAuthLogin('google')}
                                            type="button"
                                            className="py-3 flex flex-row items-center justify-center focus:ring-blue-500 focus:border-blue-500 w-full border-neutral-300 rounded-md bg-gray-100 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100"
                                            
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 32 32"
                                                className="w-4 h-4 fill-current"
                                            >
                                                <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                                            </svg>
                                            <p className="text-xs font-serif ml-2">sign in with Google to leave a comment</p>
                                        </button>

                                    )
                                }

                            </Dialog.Panel>
                        </Transition.Child>
                        </div>
                    </div>
                    </Dialog>
                </Transition>
    </>
  )
}
