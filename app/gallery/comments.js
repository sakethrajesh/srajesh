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
        setReady(true)
        
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
    
      


  }

  return (
    <>
        {
            session ? (
                <>
                <div className="">
                    <button
                    type="button"
                    onClick={openModal}
                    className="rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
                    >
                    Open Comments
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
                            <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
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
                                        <div className='mb-4'>
                                        {comments.map((comment, i) => (
                                            <div className='flex flex-row' key={i}>
                                                <h2 className="text-sm text-gray-500 mr-3">{comment.name}:</h2>
                                                <h2 className="text-sm text-gray-500">{comment.content}</h2>
                                            </div>
                                        ))}
                                        </div>
                                    )
                                }
                                <Form onSubmit={submit}/>
            
            
                            <div className="mt-4">
                                {/* <button
                                type="button"
                                className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                onClick={submit}
                                >
                                test comment
                                </button> */}
                            </div>
                            </Dialog.Panel>
                        </Transition.Child>
                        </div>
                    </div>
                    </Dialog>
                </Transition>
                </>
            ) : (
                <div className="">
                    <button
                    type="button"
                    onClick={() => {}}
                    className="rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
                    >
                    Sign in to View Comments
                    </button>
                </div>
            )
        }
    </>
  )
}
