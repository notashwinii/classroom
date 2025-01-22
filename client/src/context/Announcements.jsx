import React, { createContext, useContext, useState, useEffect } from "react"

const AnnouncementsContext = createContext()

export const useAnnouncements = () => {
  const context = useContext(AnnouncementsContext)
  if (!context) {
    throw new Error("useAnnouncements must be used within an AnnouncementsProvider")
  }
  return context
}

export const AnnouncementsProvider = ({ children }) => {
  const [announcements, setAnnouncements] = useState([])

  useEffect(() => {
    
    const fetchAnnouncements = async () => {
      
      const mockAnnouncements = [
        { id: 1, title: "End Sem Routine", content: "Check Website For End Sem Routine", posted_by:"Binayak Parajuli", date: "2025-01-15" },
        { id: 2, title: "MCSC Internal", content: "MCSC Internal on Monday", posted_by:"Nishank Sapkota", date: "2025-01-05" },
      ]
      setAnnouncements(mockAnnouncements)
    }

    fetchAnnouncements()
  }, [])

  return <AnnouncementsContext.Provider value={{ announcements }}>{children}</AnnouncementsContext.Provider>
}

