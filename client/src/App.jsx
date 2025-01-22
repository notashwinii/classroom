import React from "react";

// Routes
import { BrowserRouter, Routes, Route } from "react-router-dom";
//views

// Pages
import LoginPage from "./pages/login/LoginPage";

import StudentDashboard from "./pages/dashboard/StudentDashboard";
import TeacherDashboard from "./pages/dashboard/TeacherDashboard";

// Components

import NotesPage from "./components/student/NotesPage";
import TeacherUploadPage from "./components/teachers/TeacherUploadPage";
import TeacherGradingPage from "./components/teachers/grade/TeacherGradingPage";
import StudentGradesPage from "./components/student/StudentGradesPage";
import Userlayout from "./components/Userlayout";
import ItemDetailsPage from "./components/teachers/grade/ItemDetailsPage";

import AssignmentPage from "./components/teachers/AssignmentPage";
import Attendance from "./components/teachers/Attendance"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<LoginPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/student-dashboard" element={<StudentDashboard />} />
          <Route path="/teacher-dashboard" element={<TeacherDashboard />} />
          <Route path="/teacher-notes" element={<TeacherNoteSection />} />
          <Route path="/NotesPage" element={<NotesPage/>}/>
          <Route path="/TeacherUploadPage" element={<TeacherUploadPage/>}/>
          <Route path="/TeacherGradingPage" element={<TeacherGradingPage/>}/>
          <Route path="/StudentGradingPage" element={<StudentGradingPage/>}/> */}

          <Route path="/" element={<LoginPage />} />
          <Route path="/login" element={<LoginPage />} />
          

          
          <Route path="/AssignmentPage" element={<AssignmentPage />} />
          <Route path="/StudentGradesgPage" element={<StudentGradesPage />} />
          <Route path="/" element={<Userlayout />}>
            <Route path="/student-dashboard" element={<StudentDashboard />} />
            <Route path="/teacher-dashboard" element={<TeacherDashboard />} />
            <Route path="/" element={<NotesPage />} />
            <Route path="/TeacherUploadPage" element={<TeacherUploadPage />}/>
            <Route path="/TeacherGradingPage" element={<TeacherGradingPage />}/>
            <Route path="/attendance" element={<Attendance/>}/>


            
            
            <Route path="/items/:id" element={<ItemDetailsPage />} />
           {/* <Route path="/note/:id" element={<ItemDetailsPage />} />*/}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
