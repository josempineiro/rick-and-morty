import React from "react";

const LayoutContext = React.createContext({
  openSidebar: () => {},
  closeSidebar: () => {},
  sidebarOpen: false,
});

export const useLayoutContext = () => {
  return React.useContext(LayoutContext);
};

export default LayoutContext;
