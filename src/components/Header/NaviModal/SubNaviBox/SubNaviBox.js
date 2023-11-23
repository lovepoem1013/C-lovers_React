import { useContext, useEffect, useState } from "react";
import style from "./SubNaviBox.module.css";
import { OfficeMenuContext } from "../../../../App";
// import { OfficeMenuContext } from "../../../../pages/Office/Office";

import axios from "axios";

const SubNaviBox = ({
  xmlns,
  height,
  viewBox,
  d,
  title,
  to,
  setSelectedMenu,
  isSelected,
  display,
}) => {
  const [isHovering, setHovering] = useState(false);
  const { officeMenu, setOfficeMenu } = useContext(OfficeMenuContext);
  useEffect(() => {
    console.log("test:" + officeMenu);
  });

  const clickHandler = () => {
    setSelectedMenu(to);
    console.log(title);
    if (title === "메일") {
      window.location.href = "/mail";
      //axios.get("/");
      //axios.get("/mail").then(() => {});
    } else if (title === "일정") {
      window.location.href = "/schedule";
    } else if (title === "주소록") {
      window.location.href = "/addressbook";
    } else if (title === "인사") {
      window.location.href = "/humanResources";
    } else if (title === "전자결재") {
      window.location.href = "/electronicsignature";
    } else if (title === "오피스관리") {
      window.location.href = "/admin/office";
    } else if (title === "회계지원") {
      window.location.href = "/admin/accounting";
    }
  };
  const backgroundStlye = {
    backgroundColor:
      isSelected || isHovering || officeMenu === to ? "#dcedd4" : "#ffffff",
    display: display ? "flex" : "none",
  };
  const displayStyle = {};
  return (
    <div
      className={style.naviConp}
      onClick={clickHandler}
      style={backgroundStlye}
      onMouseOver={() => setHovering(true)}
      onMouseOut={() => setHovering(false)}
    >
      <div className={style.naviConp__icon}>
        <svg xmlns={xmlns} height={height} viewBox={viewBox}>
          <path d={d}></path>
        </svg>
      </div>
      <div className="naviConp__title">{title}</div>
    </div>
  );
};

export default SubNaviBox;
