import React, { useEffect, useState } from "react";
import appwriteService from '../appwrite/config'
import { useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Button, Container } from "../components";
import parse from 'html-react-parser'
import LikeBtn from "../components/LikeBtn";
import toast, { Toaster } from "react-hot-toast";

function Post() {
    const userData = useSelector(state => state.auth.userData)
    const { slug } = useParams()
    const [post, setPost] = useState(null)
    const navigate = useNavigate()
    const [isLiked, setIsLiked] = useState(false)
    const [likeCount, setLikeCount] = useState(0)

    if (userData === undefined) {
        toast.error('Network error!! Relaod the page.')
    }

    const isAuthor = post && userData ? post.userId === userData.$id : false

    const deletePost = () => {
        appwriteService.deletePost(post.$id).then((status) => {
            if (status) {
                appwriteService.deleteFile(post.featuredImage)
                navigate('/')
            }
        })
    }

    const findId = (arr, str) => {
        return arr.includes(str)
    }

    const handleLikes = async () => { // async 
        if (post) {
            const updatedLikes = isLiked
                ? post.likes.filter((id) => id !== userData.$id)
                : [...post.likes, userData.$id]

            setIsLiked((prev) => !prev)

            const find = findId(post.likes, userData.$id)
            setLikeCount(
                !isLiked && !find
                    ? post.likes.length + 1
                    : isLiked && find
                        ? post.likes.length - 1
                        : post.likes.length
            )

            await appwriteService.updatePost(post.$id, {
                ...post,
                likes: updatedLikes
            })
        }
    }

    useEffect(() => {
        if (slug) {
            appwriteService.getPost(slug).then((post) => {
                if (post) {
                    setPost(post)
                    const find = findId(post.likes, userData.$id)
                    setIsLiked(find)
                    setLikeCount(post.likes.length)
                } else {
                    navigate('/')
                }
            })
        } else {
            navigate('/')
        }
    }, [slug, navigate])

    return post ? (
        <Container classname={'flex flex-col mb-12'}>
            <Toaster />
            <div className="flex flex-col">

                <div className="flex justify-center items-center mt-9">
                    <div className=" object-cover flex justify-center w-[80%]">
                        <img src={appwriteService.getFilePreview(post.featuredImage)} alt={post.title} className="lg:w-4/6 w-5/6 mb-6 sm:mb-10 object-contain max-h-96 object-center ml-2 rounded-lg" />
                    </div>

                    {isAuthor && (
                        <div className="absolute text-sm md:text-md top-14 md:top-24 right-2 md:right-6">
                            <Link to={`/edit-post/${post.$id}`}>
                                <Button className="p-1 md:p-2 rounded m-1 w-14 md:w-16">
                                    Edit
                                </Button>
                            </Link>

                            <Button className="bg-red-500 p-1 md:p-2 rounded m-1 w-14 md:w-16" onClick={deletePost}>
                                Delete
                            </Button>
                        </div>
                    )}
                </div>

                <div className="flex justify-center">
                    <h1 className=" font-bold text-xl md:text-4xl ml-3 my-3">{post.title}</h1>
                </div>

                <div className="mx-4 md:mx-20 text-sm md:text-lg">
                    <div>{parse(post.content)}</div>
                </div>

                <div className="m-4 md:flex-row md:mx-20 md:mt-5">

                    <div>
                        <h2 className="text-md font-semibold md:text-xl">Published By: - <span className="font-bold hover:text-gray-600">{post.username}</span></h2>
                    </div>

                    <div className="mt-2">
                        <LikeBtn
                            likeCount={likeCount}
                            handleLikes={handleLikes}
                            isLiked={isLiked}
                        />
                    </div>
                </div>
            </div>

        </Container>
    ) : null
}

export default Post