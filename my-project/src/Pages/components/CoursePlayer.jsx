import { useState, useRef } from 'react';

const subtitles = [
  "Bienvenue dans ce cours !",
  "Aujourd'hui, nous allons découvrir les bases de React.",
  "Regardez bien cette structure de composant.",
  "Félicitations, vous progressez !"
];

const CoursePlayer = ({ videoSrc, audioDubbedSrc }) => {
  const [showSubtitles, setShowSubtitles] = useState(true);
  const [isDubbed, setIsDubbed] = useState(false);
  const videoRef = useRef(null);
  const audioRef = useRef(null);

  // Activer/désactiver le doublage audio
  const toggleDubbed = () => {
    setIsDubbed(!isDubbed);

    if (!isDubbed) {
      // Activer doublage : mute vidéo, synchroniser et jouer audio doublé
      if (videoRef.current && audioRef.current) {
        videoRef.current.muted = true;
        audioRef.current.currentTime = videoRef.current.currentTime;
        audioRef.current.play();
      }
    } else {
      // Désactiver doublage : remettre audio vidéo, stopper audio doublé
      if (videoRef.current && audioRef.current) {
        videoRef.current.muted = false;
        audioRef.current.pause();
      }
    }
  };

  return (
    <div className="w-full space-y-4">
      {/* Contrôles */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <button
          onClick={() => setShowSubtitles(!showSubtitles)}
          className="bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-600 transition"
        >
          {showSubtitles ? "Masquer les sous-titres" : "Afficher les sous-titres"}
        </button>

        <button
          onClick={toggleDubbed}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          {isDubbed ? "Désactiver le doublage" : "Activer le doublage"}
        </button>
      </div>

      {/* Vidéo */}
      <video
        ref={videoRef}
        controls
        className="w-full h-72 md:h-96 rounded-lg shadow"
        key={videoSrc}
      >
        <source src={videoSrc} type="video/mp4" />
        Votre navigateur ne supporte pas la lecture vidéo.
      </video>

      {/* Audio pour doublage */}
      <audio ref={audioRef} src={audioDubbedSrc} />

      {/* Sous-titres simulés */}
      {showSubtitles && (
        <div className="bg-gray-800 text-white text-center p-3 rounded text-sm shadow">
          {subtitles[Math.floor(Math.random() * subtitles.length)]}
        </div>
      )}
    </div>
  );
};

export default CoursePlayer;
