import "./VideoPlayer.css";
import videoFile from "../../assets/video.mp4";
import { useRef } from "react";

interface Props {
  isPlay: boolean;
  setPlay: (p: boolean) => void;
}

const VideoPlayer = ({ isPlay, setPlay }: Props) => {
  const player = useRef<HTMLDivElement | null>(null);
  const closePlayer = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target == player.current) {
      setPlay(false);
    }
  };
  return (
    <div
      className={`video ${isPlay ? "" : "video-hide"}`}
      onClick={closePlayer}
      ref={player}
    >
      <video src={videoFile} autoPlay controls muted></video>
    </div>
  );
};

export default VideoPlayer;
