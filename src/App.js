import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createContext, useState } from "react";
import Office from "./pages/Office/Office";
import Main from "./pages/Main/Main";
import Accounting from "./pages/Accounting/Accounting";

export const SubMenuContext = createContext();
export const ProfileCardContext = createContext();
export const MenuContext = createContext();
export const OfficeMenuContext = createContext();

function App() {
  const [officeMenu, setOfficeMenu] = useState("");
  const [selectedMenu, setSelectedMenu] = useState("");
  const [naviModalOpen, setNaviModalOpen] = useState(false);
  const [profileCardOpen, setProfileCardOpen] = useState(false);
  // 모달창 닫기
  const closeNaviModal = () => {
    setNaviModalOpen(false);
  };

  const closeProfileModal = () => {
    setProfileCardOpen(false);
  };

  // 서브 네비 모달창 외부 클릭시 창 닫기

  const handlerClickBackground = (e) => {
    if (e.target.tagName !== "DIV") {
      if (e.target.tagName === "svg") {
        if (
          !e.target.parentElement.className.includes(
            "Header_headerLeft__dropNav"
          )
        ) {
          closeNaviModal();
        } else if (e.target.tagName === "path") {
          if (
            !e.target.parentElement.parentElement.className.includes(
              "Header_headerLeft__dropNav"
            )
          ) {
            closeNaviModal();
          }
        }
      }
    } else {
      if (!e.target.className.includes("Header_headerLeft__dropNav")) {
        closeNaviModal();
      }

      if (!e.target.className.includes("profile")) {
        closeProfileModal();
      }
    }
  };

  return (
    <SubMenuContext.Provider
      value={{ naviModalOpen, setNaviModalOpen, handlerClickBackground }}
    >
      <ProfileCardContext.Provider
        value={{ profileCardOpen, setProfileCardOpen, handlerClickBackground }}
      >
        <MenuContext.Provider value={{ selectedMenu, setSelectedMenu }}>
          <OfficeMenuContext.Provider value={{ officeMenu, setOfficeMenu }}>
            <Router basename="/admin">
              <Routes>
                <Route path="/office/*" element={<Office />}></Route>
                <Route path="/accounting/*" element={<Accounting />}></Route>
              </Routes>
            </Router>
          </OfficeMenuContext.Provider>
        </MenuContext.Provider>
      </ProfileCardContext.Provider>
    </SubMenuContext.Provider>
  );
}

export default App;
