import exampleVideoData from '/src/data/exampleVideoData.js';
import VideoList from './VideoList.js';
import VideoListEntry from './VideoListEntry.js';
import VideoPlayer from './VideoPlayer.js';
import Search from './Search.js';
import searchYouTube from '/src/lib/searchYouTube.js';
const { useState, useEffect } = React;
var App = () => {
  var emptyData = [
    {
      "kind": "",
      "etag": "",
      "id": {
        "kind": "",
        "videoId": ""
      },
      "snippet": {
        "publishedAt": "",
        "channelId": "",
        "title": "Cute cat video",
        "description": "",
        "thumbnails": {
          "default": {
            "url": "",
          }
        }
      }
    }
  ];
  const [videos, updateVideos] = useState(emptyData);
  const [currentVideo, setVideo] = useState(videos[0]);
  const clickVideo = (video) => () => {
    setVideo(video);
  };
  var timeout = null;
  const searchHandler = (e) => {
    var query = e.target.value;
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      searchYouTube(query, videos => {
        updateVideos(videos);
      });
    }, 5000);
  };
  return (
    <div>
      <nav className="navbar">
        <div className="col-md-6 offset-md-3">
          <div><h5><em>search</em> <Search searchHandler={(e) => searchHandler(e)}/></h5></div>
        </div>
      </nav>
      <div className="row">
        <div className="col-md-7">
          <div><h5><em>videoPlayer</em><VideoPlayer video={currentVideo} /></h5></div>
        </div>
        <div className="col-md-5">
          <div><h5><em>videoList</em> <VideoList videos={videos} clickVideo={clickVideo}/></h5></div>
        </div>
      </div>
    </div>
  );
};
// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;