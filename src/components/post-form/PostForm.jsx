import React, { useCallback, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import appwriteService from '../../appwrite/config'
import { Input, RTE, Select } from '../index'
import toast from "react-hot-toast";

export default function PostForm({ post }) {
    const { register, handleSubmit, getValues, setValue, watch, control } = useForm({
        defaultValues: {
            title: post?.title || '',
            username: post?.username || '',
            slug: post?.$id || '',
            status: post?.status || 'active',
            content: post?.content || '',
            likes: post?.likes || []
        }
    })

    const buttonRef = useRef(null)
    const navigate = useNavigate()
    const userData = useSelector(state => state.auth.userData)
    const username = useSelector(state => state.auth.userData?.name)

    const submit = async (data) => {
        buttonRef.current.disabled = true
        if (post) {
            const file = data.image[0] ? await appwriteService.uploadFile(data.image[0]) : null

            if (file) {
                appwriteService.deleteFile(post.featuredImage)
            }

            const dbPost = await appwriteService.updatePost(post.$id, {
                ...data,
                featuredImage: file ? file.$id : undefined,
                username: data.status == 'inactive' ? 'Anonymous' : username
            })

            if (dbPost) {
                navigate(`/post/${dbPost.$id}`)
            }

            toast.success("Successfully Updated", {
                style: {
                    borderRadius: '30px'
                }
            })
        } else {
            const file = await appwriteService.uploadFile(data.image[0])
            console.log(file);

            if (file) {
                data.featuredImage = file.$id

                if (data.status == 'inactive') {
                    data.username = 'Anonymous'
                } else {
                    data.username = username
                }

                const dbPost = await appwriteService.createPost({
                    ...data,
                    userId: userData.$id
                })

                if (dbPost) {
                    navigate(`/post/${dbPost.$id}`)
                }

                toast.success("Successfully Posted!", {
                    style: {
                        borderRadius: '30px'
                    }
                })
            }
        }
    }

    const slugTransform = useCallback((value) => {
        if (value && typeof value === "string") {
            return value
                .trim()
                .toLowerCase()
                .replace(/[^a-zA-Z\d\s]+/g, '-')
                .replace(/\s/g, '-')
        }
        return ''
    }, [])

    useEffect(() => {
        const subscription = watch((value, { name }) => {
            if (name === 'title') {
                setValue('slug', slugTransform(value.title), { shouldValidate: true })
            }
        })

        return () => subscription.unsubscribe()
    }, [watch, slugTransform, setValue])

    return (
        <form onSubmit={handleSubmit(submit)} className="flex flex-wrap mx-2 md:mx-12 mt-4">
            <div className="md:w-2/3 px-2">
                <Input
                    type='text'
                    placeholder='Title'
                    label='Title: '
                    className='mb-4 bg-gray-200 dark:bg-white w-full md:w-96 h-12 rounded-md md:ml-5 p-3 dark:text-black'
                    {...register('title', { required: true })}
                />

                <Input
                    label='Slug: '
                    placeholder='Slug (less than 36 characters)'
                    type='text'
                    className='mb-4 bg-gray-200 dark:bg-white dark:text-black w-full md:w-96 h-12 rounded-md md:ml-5 p-3'
                    {...register('slug', { required: true })}
                    onInput={(e) => {
                        setValue('slug', slugTransform(e.currentTarget.value), { shouldValidate: true });
                    }}
                />

                <RTE
                    control={control}
                    label='Content: '
                    defaultValue={getValues('content')}
                    name='content'
                />
            </div>

            <div className="md:w-1/3 px-2">
                <Input
                    label='Featured Image: '
                    type='file'
                    className='mb-4'
                    accept='image/jpeg, image/png, image/gif, image/jpg'
                    {...register('image', { required: !post })}
                />

                {post && (
                    <div className="mb-4 w-full">
                        <img src={appwriteService.getFilePreview(post.featuredImage)} alt={post.title} className="rounded-lg" />
                    </div>
                )}

                <Select
                    options={['active', 'inactive']}
                    className='bg-gray-200 h-12 w-full md:w-96 p-3 mb-4 md:ml-2'
                    label='Status: '
                    {...register('status', { required: true })}
                />

                <button
                    type="submit"
                    ref={buttonRef}
                    disabled={false}
                    className="w-full md:mx-5 text-white bg-green-500 h-12 rounded"
                >
                    {post ? "Update" : "Submit"}
                </button>
            </div>
        </form>
    )
}