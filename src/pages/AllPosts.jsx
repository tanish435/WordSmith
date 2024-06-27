import React, { useEffect, useState } from "react";
import appwriteService from '../appwrite/config'
import { Container, PostCard } from "../components";

function AllPosts() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        appwriteService.getPosts([]).then((posts) => {
            if (posts) {
                setPosts(posts.documents)
            }
        })
    }, [])

    return (
        <div className="w-full mt-4 pb-9 px-4 md:px-[12rem]">
            <Container classname={`flex justify-center flex-col`}>
                <div className="flex justify-center">
                    <h1 className="text-2xl md:text-3xl text-center font-bold border-b border-gray-400 inline-block">All Posts</h1>
                </div>

                {posts.map((post) => (
                    <div key={post.$id} className="">
                        <PostCard {...post} />
                    </div>
                ))}
            </Container>
        </div>
    )

    // return (
    //     <div className="w-full px-9 py-5">
    //         <Container>
    //             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    //                 {posts.map((post) => (
    //                     <PostCard key={post.$id} {...post} />
    //                 ))}
    //             </div>
    //         </Container>
    //     </div>
    // )

}

export default AllPosts