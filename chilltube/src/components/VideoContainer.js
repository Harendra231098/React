import React, { useEffect, useState } from 'react'
import { VideoCard } from './VideoCard'
import { YOUTUBE_VIDEOS_API } from '../utils/constants';
import { Link } from 'react-router-dom';

export const VideoContainer = () => {

  const [videos,setVideos] = useState(null);

    useEffect(()=>{
      getVideos();
    },[])

    const getVideos= async () => {
      const data = await fetch(YOUTUBE_VIDEOS_API);
      const list = await data.json();
      setVideos(list.items);
    }
    
    if(videos === null)
      return;

  return (
    <div className='container flex flex-wrap'>
        {videos.map((video)=><Link key={video.id} to={"/watch?v="+video.id} > < VideoCard info={video} /> </Link>)}
        
    </div>
  )
}
