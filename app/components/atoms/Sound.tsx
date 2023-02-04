import { useRef, useState } from "react";
import { BsSoundwave } from "react-icons/bs";
import { GiPlayButton } from "react-icons/gi";
interface Props {
  audio: string;
}

const Sound = ({ audio }: Props) => {
  const audioTag = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);

  return (
    <div>
      <audio
        className="hidden"
        controls
        src={audio}
        ref={audioTag}
        onPlay={() => setPlaying(true)}
        onEnded={() => setPlaying(false)}
      ></audio>
      <button
        onClick={() => audioTag.current?.play()}
        className="bg-[#e9d0fa] dark:bg-primary p-3 middle:p-5 rounded-full flex justify-center items-center "
      >
        {playing ? (
          <BsSoundwave className="text-center text-4xl md:text-5xl dark:fill-white fill-primary" />
        ) : (
          <GiPlayButton className="text-center text-4xl md:text-5xl dark:fill-white fill-primary" />
        )}
      </button>{" "}
    </div>
  );
};

export default Sound;
