import React, { useState, useEffect } from 'react';
import Navbar from '../student/Navbar';
import Sidebar from './sidebar';
import { Link } from 'react-router-dom';

const NotesPage = () => {
  const [selectedCourse, setSelectedCourse] = useState('');
  const [notes, setNotes] = useState([]);
  const [selectedNote, setSelectedNote] = useState(null);

  const courses = ['COMP 204', 'COMP 231', 'COMP 232', 'MATH 207'];

  useEffect(() => {
    if (selectedCourse) {
      fetchNotes(selectedCourse);
    }
  }, [selectedCourse]);

  const fetchNotes = async (courseCode) => {
    try {
      const response = await fetch(`http://kucms/api/notes/?course_code=${encodeURIComponent(courseCode)}`);
      const data = await response.json();
      setNotes(data.results || []);
    } catch (error) {
      console.error('Error fetching notes:', error);
    }
  };

  const handleCourseChange = (e) => {
    setSelectedCourse(e.target.value);
    setSelectedNote(null);
  };

  const handleNoteClick = (noteId) => {
    const selectedNote = notes.find(note => note.id === noteId);
    setSelectedNote(selectedNote);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Navbar */}
        <Navbar />
        
        <main className="flex-1 p-8 py-24">
          <h1 className="text-3xl font-bold mb-6">My Notes</h1>
          
          <div className="mb-8">
            <select 
              value={selectedCourse}
              onChange={handleCourseChange}
              className="w-full px-4 py-2 border rounded"
            >
              <option value="">Select Course</option>
              {courses.map((course) => (
                <option key={course} value={course}>{course}</option>
              ))}
            </select>
          </div>

          {selectedCourse && notes.length > 0 && (
            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Available Notes</h2>
              <ul>
                {notes.map((note) => (
                  <li key={note.id} className="mb-2 cursor-pointer" onClick={() => handleNoteClick(note.id)}>
                    <Link to={`/note/${note.id}`}>{note.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {selectedNote && (
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h3 className="text-xl font-semibold mb-4">{selectedNote.title}</h3>
              <p>{selectedNote.content}</p>
              <div className="mt-4">
                <a href={selectedNote.file} download className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Download Note
                </a>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default NotesPage;
