import React, {useState, useEffect} from "react";
import styles from "./styles";
import Toolbar from "./components/Toolbar";
import FooterMenu from "./components/FooterMenu";
import menuItems from "./menuItems";
import Content from "./components/Content";
import Sidebar from "./components/Sidebar";

export default function App() {
  const [dimension, setDimention] = useState({windowWidth: 0, windowHeight: 0});

  const currentStyles = { ...styles,
    showFooterMenuText: styles.showFooterMenuText(dimension),
    showSidebar: styles.showSidebar(dimension),
    sidebarCollapsed: styles.sidebarCollapsed(dimension),
    sidebarWidth: styles.sidebarWidth(dimension)
  };

  const currentMenuItems = [...menuItems,
    currentStyles.showSidebar && { icon: `😺️`, text: "Profile" },
    currentStyles.showSidebar && { icon: `⚙`, text: "Settings" }
  ]


  useEffect(() => {
    updateDimensions();
    window.addEventListener("resize", updateDimensions);

    return function cleanup() {
      window.removeEventListener("resize", updateDimensions);
    }
  }, []);

  function updateDimensions() {
    let windowWidth = typeof window !== "undefined"
      ? window.innerWidth
      : 0;
    let windowHeight = typeof window !== "undefined"
      ? window.innerHeight
      : 0;

    setDimention({windowWidth, windowHeight});
  }

  return (<div style={{
      backgroundColor: styles.black(0.05),
      minHeight: "100vh",
      position: "relative"
    }}>
    { !currentStyles.showSidebar && <Toolbar styles={currentStyles}/> }

    { currentStyles.showSidebar && <Sidebar menuItems={currentMenuItems} styles={currentStyles}/> }

    <Content styles={currentStyles}/>
    
    { !currentStyles.showSidebar && <FooterMenu menuItems={currentMenuItems} styles={currentStyles}/> }
  </div>);
}
