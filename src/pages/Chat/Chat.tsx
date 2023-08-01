import React from 'react'
import { Banner } from '../../components'

import chat from "../../assets/chat.jpg";
import Container from '../../containers/Container/Container';

const Chat = () => {
    return (
        <div>
            <Banner
                title='Chat'
                image={chat}
                bgPosition="bg-center"
                bgNoRepeat='bg-no-repeat'
            />
            <Container>
                <div className='py-6'>
                    <div className='flex gap-6'>
                        <div className='w-1/5 border border-gray-400 h-full'>
                            <div className='w-full'>
                                <button className='bg-blue-400 text-white h-full w-full py-4'>+ New Chat</button>
                            </div>
							<div className='flex border-b border-b-gray-400'>
								<div className='h-[75px] w-1/5 p-2'>
									<div className='bg-red-300 rounded-full h-[40px] w-[40px]'></div>
								</div>
								<div className='p-2'>
                                    <div className='flex items-center justify-between'>
									    <p>$username</p>
                                        <p>$ts</p>
                                    </div>
									<p>Lorem ipsum dolor sit...</p>
								</div>
							</div>
                        </div>
                        <div className='w-4/5 border border-gray-400 h-full'>
                            <div className='text-center py-4 border-b border-b-gray-400'>
                                <p>$username</p>
                            </div>
                            <div className='h-[550px] overflow-auto'>
                                <div className='text-center py-4'>
                                    <p>Today 12:30pm</p>
                                </div>
                                <div className='flex flex-col p-4'>
                                    <div className='w-full border-gray-400 flex justify-start mb-2 last:mb-0'>
                                        <div className='w-1/3 flex justify-start'>
                                            <p className='bg-blue-400 py-1 px-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. ident, quis.</p>
                                        </div>
                                    </div>
                                    <div className='w-full border-gray-400 flex justify-end mb-2 last:mb-0'>
                                        <div className='w-1/3 flex justify-end'>
                                            <p className='bg-gray-400 py-1 px-3'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi praesentium blanditiis quaerat obcaecati neque, dicta, totam quis tempore nulla dolor voluptates odio cupiditate molestias repellat laboriosam ab quidem asperiores ipsum sapiente facere fugiat? Recusandae asperiores dolorum, rerum quidem maiores optio!</p>
                                        </div>
                                    </div>
                                    <div className='w-full border-gray-400 flex justify-end mb-2 last:mb-0'>
                                        <div className='w-1/3 flex justify-end'>
                                            <p className='bg-gray-400 py-1 px-3'>Lorem ipsum dolor sit, amet..</p>
                                        </div>
                                    </div>
                                    <div className='w-full border-gray-400 flex justify-start mb-2 last:mb-0'>
                                        <div className='w-1/3 flex justify-start'>
                                            <p className='bg-blue-400 py-1 px-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, quis.</p>
                                        </div>
                                    </div>
                                    <div className='w-full border-gray-400 flex justify-end mb-2 last:mb-0'>
                                        <div className='w-1/3 flex justify-end'>
                                            <p className='bg-gray-400 py-1 px-3'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi praesentium blanditiis quaerat obcaecati neque, dicta, totam quis tempore nulla dolor voluptates odio cupiditate molestias repellat laboriosam ab quidem asperiores ipsum sapiente facere fugiat? Recusandae asperiores dolorum, rerum quidem maiores optio!</p>
                                        </div>
                                    </div>
                                    <div className='w-full border-gray-400 flex justify-end mb-2 last:mb-0'>
                                        <div className='w-1/3 flex justify-end'>
                                            <p className='bg-gray-400 py-1 px-3'>Lorem ipsum dolor sit, amet..</p>
                                        </div>
                                    </div>
                                    <div className='w-full border-gray-400 flex justify-start mb-2 last:mb-0'>
                                        <div className='w-1/3 flex justify-start'>
                                            <p className='bg-blue-400 py-1 px-3'>Lorem ipsum dolor sit amet!</p>
                                        </div>
                                    </div>
                                    <div className='w-full border-gray-400 flex justify-start mb-2 last:mb-0'>
                                        <div className='w-1/3 flex justify-start'>
                                            <p className='bg-blue-400 py-1 px-3'>Ciao!</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <input className='w-4/5 py-1 px-3' type="text" placeholder='Enter your message'/>
                                <button className='w-1/5 bg-blue-400 py-1 px-3 text-white'>Send message</button>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Chat