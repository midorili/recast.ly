import exampleVideoData from '/src/data/exampleVideoData.js';
import VideoList from './VideoList.js';
import VideoListEntry from './VideoListEntry.js';
import VideoPlayer from './VideoPlayer.js';
import searchYouTube from '/src/lib/searchYouTube.js';
import Search from './Search.js';

const { useState, useEffect } = React;

var App = () => {
  const [videos, updateVideos] = useState(exampleVideoData);

  const [currentVideo, setVideo] = useState(exampleVideoData[0]);

  const clickVideo = (video) => () => {
    setVideo(video);
  };

  // const searchVideos = () => () => {
  //   updateVideos()
  // }

  return (

    <div>
      <nav className="navbar">
        <div className="col-md-6 offset-md-3">
          <div><h5><em>search</em> <Search searchFunction={searchYouTube}/></h5></div>
        </div>
      </nav>
      <div className="row">
        <div className="col-md-7">
          <div><h5><em>videoPlayer</em><VideoPlayer video={currentVideo} /></h5></div>
        </div>
        <div className="col-md-5">
          <div><h5><em>videoList</em> <VideoList videos={exampleVideoData} clickVideo={clickVideo}/></h5></div>
        </div>
      </div>
    </div>
  );
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
