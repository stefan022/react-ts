import React from 'react'
import { Banner, PostForm } from '../../components'
import Container from '../../containers/Container/Container'

const Blogs = () => {
    return (
        <div>
            <Banner
                title='Blogs'
            />
            <Container>
                <div className='py-6'>
                    <PostForm/>
                    <div className='border border-gray-400 flex'>
                        <div className='w-1/12 border border-gray-400'></div>
                        <div className='w-11/12 border border-gray-400 p-4'>
                            <div className='flex justify-between items-center mb-4'>
                                <p>$username</p>
                                <p>Date: $timestamp</p>
                            </div>
                            <div className='mb-4'>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim, numquam! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum ipsam sint vero velit eum odit ab, neque error illum impedit fugiat modi debitis tempore aut ullam quae tempora, pariatur reiciendis?</p>
                            </div>
                            <div className='flex gap-2'>
                                <div>Likes</div>
                                <div>Comments</div>
                            </div>
                        </div>
                    </div>
                    <div className='flex'>
                        <div className='w-1/12'></div>
                        <div className='w-11/12 border border-gray-400 flex'>
                            <div className='w-1/12 border border-gray-400'></div>
                            <div className='w-11/12 p-4'>
                                <div className='flex justify-between items-center mb-4'>
                                    <p>$username</p>
                                    <p>Date: $timestamp</p>
                                </div>
                                <div className='mb-4'>
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim, numquam!</p>
                                </div>
                                <div className='flex gap-2'>
                                    <div>Likes</div>
                                    <div>Replies</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex'>
                        <div className='w-1/12'></div>
                        <div className='w-11/12 border border-gray-400 flex'>
                            <div className='w-1/12 border border-gray-400'></div>
                            <div className='w-11/12 p-4'>
                                <div className='flex justify-between items-center mb-4'>
                                    <p>$username</p>
                                    <p>Date: $timestamp</p>
                                </div>
                                <div className='mb-4'>
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim, numquam!</p>
                                </div>
                                <div className='flex gap-2'>
                                    <div>Likes</div>
                                    <div>Replies</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex'>
                        <div className='w-1/12'></div>
                        <div className='w-11/12 flex'>
                            <div className='w-1/12'></div>
                            <div className='w-11/12 flex'>
                                <div className='w-1/12 border border-gray-400'></div>
                                <div className='w-11/12 border border-gray-400 p-4'>
                                    <div className='flex justify-between items-center mb-4'>
                                        <p>$username</p>
                                        <p>Date: $timestamp</p>
                                    </div>
                                    <div className='mb-4'>
                                        <p>Lorem ipsum dolor sit, amet consectetur</p>
                                    </div>
                                    <div className='flex gap-2'>
                                        <div>Likes</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='border border-gray-400 flex'>
                        <div className='w-1/12 border border-gray-400'></div>
                        <div className='w-11/12 border border-gray-400 p-4'>
                            <div className='flex justify-between items-center mb-4'>
                                <p>$username</p>
                                <p>Date: $timestamp</p>
                            </div>
                            <div className='mb-4'>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim, numquam! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum ipsam sint vero velit eum odit ab, neque error illum impedit fugiat modi debitis tempore aut ullam quae tempora, pariatur reiciendis?</p>
                            </div>
                            <div className='flex gap-2'>
                                <div>Likes</div>
                                <div>Comments</div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Blogs