import Video from '../images/Video.png';
const VideoPlay = () => {
    return ( 
        <div className="videoplay center">
            <div class=" ">
        {/* <iframe  src="//www.youtube.com/embed/Q8TXgCzxEnw?rel=0" frameborder="0" allowfullscreen></iframe> */}
        <img src={Video} alt="" />
      </div>
        </div>
     );
}
 
export default VideoPlay;