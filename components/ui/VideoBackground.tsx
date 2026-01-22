const YOUTUBE_ID = "HPph35tdMP8";
const videoSrc = `https://www.youtube.com/embed/${YOUTUBE_ID}?autoplay=1&mute=1&loop=1&playlist=${YOUTUBE_ID}&controls=0&showinfo=0&modestbranding=1&rel=0&playsinline=1&iv_load_policy=3`;

export default function VideoBackground() {
  return (
    <div className="video-bg" aria-hidden="true">
      <div className="video-bg__media">
        <iframe
          src={videoSrc}
          title="Background video"
          frameBorder="0"
          allow="autoplay; fullscreen"
          allowFullScreen
          tabIndex={-1}
        />
      </div>
      <div className="video-bg__veil" />
    </div>
  );
}
