import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import CoursePlayer from './components/CoursePlayer';

const CourseDetail = () => {
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const [isDubbed, setIsDubbed] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('../data/courses.json')
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((item) => item.id === parseInt(id));
        if (found) setCourse(found);
        else navigate('/');
      });
  }, [id, navigate]);

  if (!course) return <p className="text-center mt-10">Chargement...</p>;

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto bg-white shadow-md rounded-lg p-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        
        {/* Colonne gauche : Infos du cours */}
        <div className="space-y-4">
          <img
            src={course.image}
            alt={course.title}
            className="w-full h-64 object-cover rounded-lg"
          />
          <h1 className="text-3xl font-bold">{course.title}</h1>
          <p className="text-gray-700">Auteur : {course.author}</p>
          <p className="text-gray-700">Langue : {course.language}</p>
          <p className="text-gray-600">Description : <br/>
            {course.desc || "Aucune description disponible."}
          </p>

          {/* <button
            onClick={() => setIsDubbed(!isDubbed)}
            className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          >
            {isDubbed ? "Désactiver le doublage" : "Activer le doublage"}
          </button> */}
        </div>

        {/* Colonne droite : lecteur vidéo */}
        <CoursePlayer
          videoSrc={course.video}
          audioDubbedSrc={course.dubbedVideo}
        />
      </div>
    </div>
  );
};

export default CourseDetail;
