import { createContext } from "react";
import { useState } from "react";

export const Global = createContext()

export const GlobalProvider = ({ children } ) => {

    const [route, setRoute] = useState('home')

    return <Global.Provider value={{route,setRoute}}>{children}</Global.Provider>
}