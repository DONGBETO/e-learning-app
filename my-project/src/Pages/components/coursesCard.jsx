import { Link } from 'react-router-dom';

const CourseCard = ({ course }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition">
      {/* Image du cours */}
      <img
        src={course.image}
        alt={course.title}
        className="w-full h-48 object-cover rounded-md mb-4"
      />

      <h2 className="text-xl font-semibold mb-2">{course.title}</h2>
      <p className="text-gray-600">{course.author}</p>
      <p className="text-gray-600">Langue : {course.language}</p>
     <Link
        to={`/courses/${course.id}`}
        className="inline-block mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
      >
        Voir
      </Link>
    </div>
  );
};

export default CourseCard;
