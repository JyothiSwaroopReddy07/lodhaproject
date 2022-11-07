import React, { useContext, useEffect, useState } from 'react'


const AppContext = React.createContext()



const AppProvider = ({ children }) => {

  const [User, setUser] = useState(false);
  const [Admin, setAdmin] = useState(false);
  const [ItSupport, setItSupport] = useState(false);
  const [Menu, setMenu] = useState(false);


  return (
    <AppContext.Provider value={{
      User, setUser,
      Admin, setAdmin,
      ItSupport, setItSupport,
      Menu, setMenu,
    }}>
      {children}
    </AppContext.Provider>
  )
}
export const useGlobalContext = () => {
  return useContext(AppContext);
}
export { AppContext, AppProvider }