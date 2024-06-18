import React from 'react'
import { Comment } from './Comment'

const commentData = [

    {
        name : "John",
        text : "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        replies:[
            {
                name : "John",
                text : "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
                replies:[]
            }
        ]
    },
    {
        name : "John",
        text : "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        replies:[
            {
                name : "John",
                text : "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
                replies:[]
            },
            {
                name : "John",
                text : "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
                replies:[]
            }
        ]
    },
    {
        name : "John",
        text : "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        replies:[{
            name : "John",
            text : "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
            replies:[{
                name : "John",
                text : "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
                replies:[{
                    name : "John",
                    text : "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
                    replies:[]
                }]
            }]
        }]
    }
]

const CommentList =({comments})=>{

    return comments.map((comment,index)=>(
    <div key={index}>
    <Comment  data={comment} />
        <div className='pl-5 border border-l-black'>
        <CommentList comments={comment.replies} />
       </div>


    </div>

)); 
}

export const CommentsContainer = () => {



  return (
    <div className='mx-4 p-1'>
        <h1 className='font-bold'>Comments:</h1>
        {/*<Comment data={commentData[0]} />*/}
        <CommentList comments={commentData} />
    </div>
    
  );
}
