import React, { useState, useEffect } from "react";

import { IconButton } from "@material-tailwind/react";
import 'font-awesome/css/font-awesome.min.css';

import Header from '../components/Header';
import User from '../components/User';

export default function Feed() {
  
    const [posts, setPosts] = useState([]);
    const [searchItem, setSearchItem] = useState('');

    const fetchPosts = async () => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts')
                .then((response) => response.json());

            const postsWithLikes = response.map(post => ({
                ...post,
                like: false,
            }));

            setPosts(postsWithLikes);
            
            console.log(response);
        } catch (error) {
            console.log(error);
        }
    };

    const handleLikeClick = (postId) => {
        setPosts((prevPosts) =>
            prevPosts.map((post) =>
                post.id === postId ? { ...post, like: !post.like } : post
            )
        );
    };

    useEffect(() => {
        fetchPosts();
    }, []);

    const filteredPosts = posts.filter((post) => {
        const searchString = `${post.title} ${post.body}`.toLowerCase();
        return searchString.includes(searchItem.toLowerCase());
    });


    return (
      
    <div className="app bg-gradient-to-tr from-gray-100 to-orange-300">
        <Header name="Lorem Ipsum" searchItem={searchItem} onSearch={setSearchItem} />
        <div className="grid place-items-center h-screen overflow-y-auto no-scrollbar">
            <div>
                {filteredPosts.map((post) => (
                <div className="max-w-xl mt-5 relative rounded overflow-hidden shadow-lg bg-white bg-opacity-100" key={post.id}>
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">{post.title}</div>
                        <p className="text-gray-700 text-base">
                            {post.body}                 
                        </p>
                    </div>
                    <div className="px-6 pt-4 pb-2">
                        <div>
                            <span className="inline-block bg-orange-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Lorem</span>
                            <span className="inline-block bg-orange-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Ipsum</span>
                            <span className="inline-block bg-orange-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#dolor</span>
                        </div>
                        <div className="flex mb-2 ">
                            <User user={post.userId} />
                            <LikeIcon isLiked={post.like} onLikeClick={() => handleLikeClick(post.id)}/>
                        </div>
                    </div>
                </div>
                ))}
            </div>
        </div>
    </div>

    )
}
  

function LikeIcon({ isLiked, onLikeClick }) {
    return (
        <IconButton variant="outlined" className="flex rounded-full justify-center w-11 h-11 shrink-0 grow-0 outline-none" onClick={onLikeClick}>
            <i className={`fas fa-heart ${isLiked ? 'text-red-500' : 'text-gray-500'}`} />
        </IconButton>
    );
}
