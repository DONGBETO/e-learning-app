import { useState, useEffect } from 'react';
import CourseCard from './components/coursesCard';

const Home = () => {
  const [courses, setCourses] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetch('../data/courses.json')
      .then((res) => res.json())
      .then((data) => setCourses(data))
      .catch((err) => console.error("Erreur chargement JSON :", err));
  }, []);

  const filteredCourses = courses.filter(course =>
    course.title.toLowerCase().includes(search.toLowerCase()) ||
    course.author.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-3xl font-bold text-center mb-6"> Liste des cours</h1>

      {/* Barre de recherche */}
      <div className="max-w-xl mx-auto mb-8">
        <input
          type="text"
          placeholder="Rechercher par titre ou auteur..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Liste des cours */}
      <div className="grid md:grid-cols-4 gap-6 max-w-auto mx-auto">
        {filteredCourses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>

        {/* <div className="grid md:grid-cols-4 gap-6 max-w-auto mx-auto mt-10">
        {filteredCourses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div> */}
    </div>
  );
};

export default Home;
