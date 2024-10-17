"use client";
import React, { useState } from 'react';
import Image from 'next/image';

export default function About() {
    const [loading, setLoading] = useState(false);
    const [imageLoaded, setImageLoaded] = useState(false);

    const handleImageClick = () => {
        setLoading(true);
        setImageLoaded(false);
        setTimeout(() => {
            setLoading(false);
            setImageLoaded(true);
        }, 2000);
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-[#A6B37D] p-6">
            <h1 className="text-4xl font-bold text-black mb-4">About Me</h1>
            
            {loading ? (
                <div className="flex items-center justify-center">
                    <p className="text-lg text-black">Loading image...</p>
                </div>
            ) : (
                <div onClick={handleImageClick} className="cursor-pointer">
                    {imageLoaded ? (
                        <Image 
                            src="/images/girl.png"
                            alt=""
                            width={500}
                            height={300}
                            className="border border-black rounded-xl mb-6"
                        />
                    ) : (
                        <p className="text-lg text-black">Click the image to load it.</p>
                    )}
                </div>
            )}

            <p className="text-lg text-black max-w-2xl text-center">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae, aliquam molestiae aspernatur quis, eligendi saepe autem corporis doloribus harum, 
                beatae consectetur officia. Nobis, quia fugit.
            </p>
        </div>
    );
}