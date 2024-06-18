import React from 'react'

export const VideoCard = ({info}) => {
  const {snippet, statistics } = info ;
  const {channelTitle, title, thumbnails } = snippet;
  return (
    
    <div className='p-2 m-2 w-72 shadow-lg'>
      <img className='rounded-lg' src={thumbnails.medium.url} alt="thumbnail" />
      <ul>
        <li className='font-bold'>{title}</li>
        <li>{channelTitle}</li>
        <li>{statistics.viewCount} views</li>

      </ul>

    </div>
  )
}
 export const AdvideoCard =(VideoCard) => {

  return(
    <div  className='p-1 m-1 border border-red-900'>
      <VideoCard />
    </div>
  );

 }
