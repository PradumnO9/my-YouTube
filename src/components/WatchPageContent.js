import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import SideVideoCard from './SideVideoCards';

const WatchPageContent = () => {
    const videos = useSelector(store => store.videos.mostPopularVideos);
  return (
    <div>
      {videos?.map((video) => {
        return (
          <Link key={video.id} to={`/watch?v=${video.id}`}>
            <SideVideoCard info={video} />
          </Link>
        );
      })}
    </div>
  )
}

export default WatchPageContent
