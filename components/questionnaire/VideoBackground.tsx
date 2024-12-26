export const VideoBackground = () => (
  <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden">
    <div className="absolute inset-0 bg-black/60 z-10" />
    <video
      autoPlay
      loop
      muted
      playsInline
      className="absolute min-w-full min-h-full object-cover"
    >
      <source
        src="/sunflower-720p.mp4"
        type="video/mp4"
        media="(min-width: 768px)"
      />
      <source src="/sunflower-480p.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </div>
);
