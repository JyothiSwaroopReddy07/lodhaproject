import React, { useContext, useEffect, useState } from 'react'


const AppContext = React.createContext()



const AppProvider = ({ children }) => {

  const [User, setUser] = useState(window.localStorage.getItem("User") || null);
  const [Menu, setMenu] = useState(window.localStorage.getItem("Menu") ||false);
  const [isAuthenticated, setIsAuthenticated] = useState(window.localStorage.getItem("isAuthenticated") || false);
  const [loading, setLoading] = useState(window.localStorage.getItem("loading") || false);


  return (
    <AppContext.Provider value={{
      User, setUser,
      Admin, setAdmin,
      ItSupport, setItSupport,
      Menu, setMenu,
      isAuthenticated,setIsAuthenticated,
      loading,setLoading
    }}>
      {children}
    </AppContext.Provider>
  )
}
export const useGlobalContext = () => {
  return useContext(AppContext);
}
export { AppContext, AppProvider }