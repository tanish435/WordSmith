import React from "react";
import { Link } from "react-router-dom";
import appwriteService from '.../appwrite/config.js'

function Footer() {
    return (
        // absolute
        // <div className=" bg-gray-100 text-gray-400 bottom-0 w-full">
        //     Footer
        // </div>

        <footer className="bg-[#000814] text-white p-8 mt-6">
            <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="flex flex-col items-center w-[150px] md:w-[200px]">
                    <Link to='/'>
                        {/* <h2 className="text-xl font-bold mb-4">WordSmith</h2> */}
                        <img src={appwriteService.getFilePreview('6671bd6c003745faeff3')} alt="WordSmith" />
                    </Link>
                    <p className="text-sm ml-5">&copy;2024 WordSmith. All rights reserved.</p>
                </div>
                <div>
                    <h3 className="font-semibold mb-3">Features</h3>
                    <ul>
                        <li className="mb-2">
                            <Link to='/' className="text-blue-300 hover:underline">
                                Home
                            </Link>
                        </li>
                        <li className="mb-2">
                            <Link to='/all-posts' className="text-blue-300 hover:underline">
                                All post
                            </Link>
                        </li>
                        <li className="mb-2">
                            <Link to='/add-post' className="text-blue-300 hover:underline">
                                Add post
                            </Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-semibold mb-3">Contact me</h3>
                    <ul>
                        <li className="mb-2">
                            <Link to="https://www.linkedin.com/in/tanish-rai-439b03257/" className="text-blue-300 hover:underline">
                                Linkedin
                            </Link>
                        </li>
                        <li className="mb-2">
                            <Link to="https://github.com/tanish435" className="text-blue-300 hover:underline">
                                Github
                            </Link>
                        </li>
                        <li className="mb-2">
                            <Link to="https://leetcode.com/u/user6772zZ/" className="text-blue-300 hover:underline">
                                Leetcode
                            </Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-semibold mb-3">Terms</h3>
                    <ul>
                        <li className="mb-2">
                            <Link to='/privacy-policy' className="text-blue-300 hover:underline">
                                Privacy Policy
                            </Link>
                        </li>
                        <li className="mb-2">
                            <Link to='/' className="text-blue-300 hover:underline">
                                Sitemap
                            </Link>
                        </li>
                        <li className="mb-2">
                            <Link to='user-guide' className="text-blue-300 hover:underline">
                                User Guidelines
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="flex justify-center mt-8 space-x-4">
                <Leetcode className="h-6 w-6 text-yellow-400" />
                <LinkedinIcon className="h-6 w-6 text-blue-300" />
            </div>
        </footer>
    )
}

function Leetcode() {
    return (
        <Link to='https://leetcode.com/u/user6772zZ/'>
            <div className="h-[22px]">
                <svg width="95" height="111" viewBox="0 0 95 111" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-auto max-w-none"><path d="M68.0063 83.0664C70.5 80.5764 74.5366 80.5829 77.0223 83.0809C79.508 85.579 79.5015 89.6226 77.0078 92.1127L65.9346 103.17C55.7187 113.371 39.06 113.519 28.6718 103.513C28.6117 103.456 23.9861 98.9201 8.72653 83.957C-1.42528 74.0029 -2.43665 58.0749 7.11648 47.8464L24.9282 28.7745C34.4095 18.6219 51.887 17.5122 62.7275 26.2789L78.9048 39.362C81.6444 41.5776 82.0723 45.5985 79.8606 48.3429C77.6488 51.0873 73.635 51.5159 70.8954 49.3003L54.7182 36.2173C49.0488 31.6325 39.1314 32.2622 34.2394 37.5006L16.4274 56.5727C11.7767 61.5522 12.2861 69.574 17.6456 74.8292C28.851 85.8169 37.4869 94.2846 37.4969 94.2942C42.8977 99.496 51.6304 99.4184 56.9331 94.1234L68.0063 83.0664Z" fill="#FFA116"></path><path fillRule="evenodd" clipRule="evenodd" d="M41.1067 72.0014C37.5858 72.0014 34.7314 69.1421 34.7314 65.615C34.7314 62.0879 37.5858 59.2286 41.1067 59.2286H88.1245C91.6454 59.2286 94.4997 62.0879 94.4997 65.615C94.4997 69.1421 91.6454 72.0014 88.1245 72.0014H41.1067Z" fill="#B3B3B3"></path><path fillRule="evenodd" clipRule="evenodd" d="M49.9118 2.02335C52.3173 -0.55232 56.3517 -0.686894 58.9228 1.72277C61.494 4.13244 61.6284 8.17385 59.2229 10.7495L16.4276 56.5729C11.7768 61.552 12.2861 69.5738 17.6453 74.8292L37.4088 94.2091C39.9249 96.6764 39.968 100.72 37.505 103.24C35.042 105.761 31.0056 105.804 28.4895 103.337L8.72593 83.9567C-1.42529 74.0021 -2.43665 58.0741 7.1169 47.8463L49.9118 2.02335Z" fill="white"></path></svg>
            </div>
        </Link>
    )
}


function LinkedinIcon(props) {
    return (
        <Link to='https://www.linkedin.com/in/tanish-rai-439b03257/'>
            <svg
                {...props}
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
            </svg>
        </Link>
    )
}

export default Footer