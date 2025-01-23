import React, { createContext, useState, useContext } from "react";

const StudentContext = createContext();

export const useStudentContext = () => {
  return useContext(StudentContext);
};

export const StudentProvider = ({ children }) => {
  const [studentClass, setStudentClass] = useState("CS II/II"); // Default class

  return (
    <StudentContext.Provider value={{ studentClass, setStudentClass }}>
      {children}
    </StudentContext.Provider>
  );
};
