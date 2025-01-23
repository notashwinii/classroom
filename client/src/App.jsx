import React from "react";

// Routes
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import LoginPage from "./pages/login/LoginPage";
import NotesPage from "./components/student/NotesPage";
import TeacherUploadPage from "./components/teachers/TeacherUploadPage";
import TeacherGradingPage from "./components/teachers/grade/TeacherGradingPage";
import StudentGradesPage from "./components/student/StudentGradesPage";
import Userlayout from "./components/Userlayout";
import ItemDetailsPage from "./components/teachers/grade/ItemDetailsPage";
import AssignmentPage from "./components/teachers/AssignmentPage";
import Attendance from "./components/teachers/Attendance";
import StudentDashboard from "../src/components/student/StudentDashboard";
import FacultyDashboard from "../src/components/teachers/FacultyDashboard";
import SelectOptionPage from "./components/teachers/SelectOptionPage";
import StudentAssignmentDetail from '../src/components/student/StudentAssignmentDetail';
import StudentAssignmentPage from '../src/components/student/Assignment';

// Import ClassroomProvider
import { ClassroomProvider } from './context/context';
import { StudentProvider } from './context/StudentContext';

function App() {
  return (
    <>
      <StudentProvider>
      <ClassroomProvider>
        <BrowserRouter
          future={{
            v7_startTransition: true,
            v7_relativeSplatPath: true,
          }}
        >
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/student/dashboard" element={<StudentDashboard />} />
            <Route path="/faculty/dashboard" element={<FacultyDashboard />} />
            <Route path="/AssignmentPage" element={<AssignmentPage />} />
            <Route path="/StudentGradesgPage" element={<StudentGradesPage />} />
            <Route path="/" element={<Userlayout />}>
              <Route path="/student/notes" element={<NotesPage />} />
              <Route path="/student/notes/:id" element={<NotesPage />} />
              <Route path="/faculty/notes/upload" element={<TeacherUploadPage />} />
              <Route path="/TeacherGradingPage" element={<TeacherGradingPage />} />
              <Route path="/attendance" element={<Attendance />} />
              <Route path="/faculty/class/:classId" element={<SelectOptionPage />} />
              <Route path="/faculty/assignments/:classId" element={<AssignmentPage />} />
              <Route path="/items/:id" element={<ItemDetailsPage />} />
                {/* Route for student assignment detail */}
                <Route path="/student/assignment" element={<StudentAssignmentPage />} />

        <Route path="/student/assignment/:classId/:assignmentId" element={<StudentAssignmentDetail />} />


            </Route>
          </Routes>
        </BrowserRouter>
      </ClassroomProvider>
      </StudentProvider>
    </>
  );
}

export default App;
