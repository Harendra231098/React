import React, { useEffect, useState } from 'react'
import { VideoCard } from './VideoCard'
import { YOUTUBE_VIDEOS_API } from '../utils/constants';

export const VideoContainer = () => {

  //const [videos,setVideos] = useState(null);

    useEffect(()=>{
      getVideos();
    },[])

    const getVideos= async () => {
      const data = await fetch(YOUTUBE_VIDEOS_API);
      const list = await data.json();
      console.log(list);
    }

  return (
    <div className='container'>
        <VideoCard />
    </div>
  )
}
