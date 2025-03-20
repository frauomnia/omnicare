"use client"

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
                        placeholder='add a comment'
                    />
                    <button type='submit' className='btn'>
                        Add Comment
                    </button>
                </form>
            </div>
            {/* show existing comments list */}
            <div>
                {comments.length > 0 ? (
                    comments.map((comment: any) => (
                        <div key={comment.id}> 
                            <p>{comment.content}</p>
                            <small>{new Date(comment.createdAt).toLocaleString()}</small>
                        </div>
                    ))
                ) : (
                    <p>No comments yet</p>
                )}
            </div>
       </>
    )
}