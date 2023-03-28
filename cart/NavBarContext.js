import React from "react";

export const NavBarContext = React.createContext({cart: [], add: () => {console.log('navbarcontext')}});