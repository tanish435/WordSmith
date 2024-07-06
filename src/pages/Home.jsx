import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Button, Container, PostCard } from "../components";
import appwriteService from '../appwrite/config'
import { Link, useNavigate } from "react-router-dom";
import { ReactTyped } from "react-typed";

function Home() {
    const userAuth = useSelector(state => state.auth.status)
    const [posts, setPosts] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        if (userAuth === true) {
            appwriteService.getPosts([]).then((posts) => {
                console.log("Home getPosts called");
                if (posts) {
                    setPosts(posts.documents)
                }
            })
        } else {
            navigate('/')
        }
    }, [])

    if (userAuth === true && posts.length === 0) {
        return (
            <Container>
                <div className="h-max">
                    <div className="relative bg-cover bg-center md:bg-center rounded-lg overflow-hidden m-6 mx-9" style={{ backgroundImage: 'url(https://blog.adobe.com/en/publish/2020/11/03/media_1d6ac1c53ff7e499d8d6b51df25d8320b16ce70e9.png?width=2000&format=webply&optimize=medium)', backgroundPosition: 'right' }}>
                        <div className="absolute inset-0 bg-black opacity-50"></div>
                        <div className="relative flex flex-col items-center justify-center h-[24rem] md:h-[36rem] text-white text-center p-6">
                            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4">Welcome to WordSmith</h1>
                            <p className="text-base sm:text-lg md:text-xl mb-6">Share your <ReactTyped
                                strings={[
                                    "insights",
                                    "ideas",
                                    "knowledge",
                                ]}
                                typeSpeed={50}
                                backSpeed={50}
                                
                                loop
                            /> insights and stories. Engage with a community of writers and readers.</p>
                            <div className="flex flex-col sm:flex-row">
                                <Button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-2 mb-2 sm:mb-0" onClick={() => navigate('/add-post')}>
                                    Write
                                </Button>
                                <Button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-2" onClick={() => navigate('/all-posts')}>
                                    Explore
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        )
    } else if (userAuth === false && posts.length == 0) {
        return (
            <Container>
                <div className="h-screen my-10">
                    <div className="relative bg-cover bg-center md:bg-center rounded-lg overflow-hidden m-6 mx-9" style={{ backgroundImage: 'url(https://blog.adobe.com/en/publish/2020/11/03/media_1d6ac1c53ff7e499d8d6b51df25d8320b16ce70e9.png?width=2000&format=webply&optimize=medium)', backgroundPosition: 'right' }}>
                        <div className="absolute inset-0 bg-black opacity-50"></div>
                        <div className="relative flex flex-col items-center justify-center h-[24rem] md:h-[36rem] text-white text-center p-6">
                            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4">Welcome to WordSmith</h1>
                            <p className="text-base sm:text-lg md:text-xl mb-6">Share your <ReactTyped
                                strings={[
                                    "insights",
                                    "ideas",
                                    "knowledge",
                                ]}
                                typeSpeed={50}
                                backSpeed={50}
                                
                                loop
                            />. Engage with a community of writers and readers.</p>
                            <div className="flex flex-col sm:flex-row">
                                <Button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-2 mb-2 sm:mb-0" onClick={() => navigate('/signup')}>
                                    Get started
                                </Button>
                                <Button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-2" onClick={() => navigate('/login')}>
                                    Login
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        )
    }

    return (
        <Container>
            <div className="h-max">
                <div className="relative bg-cover bg-center md:bg-center rounded-lg overflow-hidden m-6 mx-9" style={{ backgroundImage: 'url(https://blog.adobe.com/en/publish/2020/11/03/media_1d6ac1c53ff7e499d8d6b51df25d8320b16ce70e9.png?width=2000&format=webply&optimize=medium)', backgroundPosition: 'right' }}>
                    <div className="absolute inset-0 bg-black opacity-50"></div>
                    <div className="relative flex flex-col items-center justify-center h-[24rem] md:h-[36rem] text-white text-center p-6">
                        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4">Welcome to WordSmith</h1>
                        <p className="text-base sm:text-lg md:text-xl mb-6">Share your <ReactTyped
                                strings={[
                                    "insights",
                                    "ideas",
                                    "knowledge",
                                ]}
                                typeSpeed={50}
                                backSpeed={50}
                                
                                loop
                            />. Engage with a community of writers and readers.</p>
                        <div className="flex flex-col sm:flex-row">
                            <Button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-2 mb-2 sm:mb-0" onClick={() => navigate('/add-post')}>
                                Write
                            </Button>
                            <Button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-2" onClick={() => navigate('/all-posts')}>
                                Explore
                            </Button>
                        </div>
                    </div>
                </div>

                <div className="">
                    <div className="flex justify-center">
                        <h1 className="text-2xl md:text-3xl text-center font-bold border-b border-gray-400 inline-block">Featured Posts</h1>
                    </div>
                    <div className="md:mx-[12rem]">
                        {posts?.slice(0, 3).map((post) => (
                            <div key={post.$id} className="p-2">
                                <PostCard {...post} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default Home