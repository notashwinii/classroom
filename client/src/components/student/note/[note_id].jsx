// components/note/[note_id].jsx

import React, { useState } from 'react';
import Navbar from '../../Navbar';
import Sidebar from '../sidebar';

const NotePage = ({ match }) => {
  const [studentComment, setStudentComment] = useState('');
  const [comments, setComments] = useState([]);

  // Fetch note details based on match.params.id
  const note = notes.find(n => n.id === parseInt(match.params.id));

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Navbar */}
        <Navbar />
        
        <main className="flex-1 p-8 py-24">
          <h1 className="text-3xl font-bold mb-6">{note.title}</h1>
          
          <div className="mb-8">
            <p className="font-semibold">Course Code:</p>
            <p>{note.courseCode}</p>
            <p className="font-semibold">Faculty Name:</p>
            <p>John Doe</p>
            <p className="font-semibold">Uploaded At:</p>
            <p>{new Date().toLocaleString()}</p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-xl font-semibold mb-4">Note Content</h2>
            <p>{note.content}</p>
          </div>

          <div className="mt-8">
            <a href={note.file} download className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Download Note
            </a>
          </div>

          <h3 className="text-2xl font-semibold mt-8 mb-4">Comments</h3>

          {comments.length === 0 ? (
            <p className="mb-6 text-gray-600">No comments yet.</p>
          ) : (
            comments.map((comment, index) => (
              <div key={index} className="bg-gray-100 p-4 mb-6 rounded-lg">
                <p className="text-gray-700">{comment}</p>
              </div>
            ))
          )}

          {/* Comment Input */}
          <div className="mt-8">
            <textarea
              value={studentComment}
              onChange={(e) => setStudentComment(e.target.value)}
              placeholder="Write your comment here..."
              rows="4"
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button 
              onClick={() => {
                if (studentComment.trim() !== '') {
                  setComments([...comments, studentComment]);
                  setStudentComment('');
                }
              }}
              className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Submit Comment
            </button>
          </div>
        </main>

        {/* Footer */}
        <footer className="bg-white text-center p-4 mt-auto">
          <p>&copy; 2024 KU-CMS. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default NotePage;
