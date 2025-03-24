"use client"

import * as React from "react";
import { useState, useEffect } from 'react';
import { Volunteer } from "@prisma/client";

interface VolunteerInfoDisplayProps {
    volunteer: Volunteer;
}

export default function CommentsDisplay({volunteer}: VolunteerInfoDisplayProps) {
    
    const [comments, setComments] = useState<any>([]);
    const [newComment, setNewComment] = useState<any>('');

    useEffect(() => {
        const fetchComments = async () => {
            try {
                const respone = await fetch(`/api/comments/${volunteer.id}`);
                if (respone.ok) {
                    const data = await respone.json();
                    setComments(data);
                }
            } catch (error) {
                console.error(error);
              }
        };

        fetchComments();
    }, [volunteer.id]);

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        if(!newComment.trim()) return;

        try {
            const response = await fetch(`/api/comments/${volunteer.id}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({content: newComment})
            });
    
            if(response.ok) {
                const newCommentData = await response.json();
                setComments((prevComments: any) => [newCommentData, ...prevComments]);
                setNewComment('');
            }
            
            } catch (error) {
                console.error(error);
            }
    }
    return(
       <>
            {/* add new comment form */}
            <div>
                <form onSubmit={handleSubmit}>
                    <textarea
                        className='w-full p-2 border rounded-md '
                        value={newComment}
                        onChange={(e) => setNewComment(e.target.value)}
                        placeholder='Give feedback here...'
                    />
                    <button type='submit' className='btn'>
                        Give feedback
                    </button>
                </form>
            </div>
            {/* show existing comments list */}
            <div>
                {comments.length > 0 ? (
                    comments.map((comment: any) => (
                        <div key={comment.id}
                        className="ml-auto mr-auto border-[#48752C] border-2 rounded-md mt-5 p-2"
                        > 
                            <p>{comment.content}</p>
                            <small>{new Date(comment.createdAt).toLocaleString()}</small>
                        </div>
                    ))
                ) : (
                    <p>No feedback yet for this volunteer</p>
                )}
            </div>
       </>
    )
}