import React from "react";
import { Link } from "react-router-dom";
import appwriteService from '../appwrite/config'
import parse from 'html-react-parser'

const truncateText = (text, wordLimit) => {
    const words = text.split(' ');
    if (words.length > wordLimit) {
        return words.slice(0, wordLimit).join(' ') + '...';
    }
    return text;
};

function PostCard({ $id, title, content, featuredImage }) {
    return (
        <Link to={`/post/${$id}`}>
            {/* <div className="flex items-center rounded-lg overflow-hidden my-10 mx-[12rem] h-60">
                <div className="rounded-lg border-none overflow-hidden">
                    <img
                        src={appwriteService.getFilePreview(featuredImage)}
                        alt="Leaf and pens"
                        className="h-auto w-96"
                    />
                </div>
                <div className="p-5">
                    <h2 className="font-bold text-xl">{title}</h2>
                    <p className="text-sm text-gray-600 mb-4">
                        {parse(truncateText(content, 20))}

                    </p>
                    <button className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600">
                        Read more
                    </button>
                </div>
            </div> */}

            <div className={`flex items-center rounded-lg overflow-hidden my-3 md:mb-2 md:mt-6 border dark:border-gray-700 md:h-60`}>
                <img
                    src={appwriteService.getFilePreview(featuredImage)}
                    className="h-32 object-cover md:h-auto w-40 md:w-96 rounded-xl m-4"
                />

                <div className="p-2 md:w-auto md:p-5">
                    <h2 className="font-bold text-lg md:text-xl">{title}</h2>
                    <div className="text-sm text-gray-600 dark:text-[#b3b3b3] mb-4">
                        {parse(truncateText(content, 10))}
                    </div>
                    <button className="p-1 hidden md:block md:px-4 md:py-2 text-white bg-blue-500 rounded hover:bg-blue-600">
                        Read more
                    </button>
                </div>
            </div>
        </Link>
    )
}

export default PostCard