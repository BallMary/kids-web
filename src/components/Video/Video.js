import './Video.css';
import VideoFilter from '../../video/createfilter_6RNl1FGV.mp4';

function Video() {
  return (
    <div className='video'>
      <video src={VideoFilter} width='90%' height='90%' controls></video>
    </div>
  );
}

export default Video;
