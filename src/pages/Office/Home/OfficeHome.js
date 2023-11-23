import { Routes, Route } from "react-router-dom";
import OfficeInfo from "./OfficeInfo/OfficeInfo";
import OfficeAdmin from "./OfficeAdmin/OfficeAdmin";
import "./OfficeHome.module.css";
import { useContext, useEffect, useState } from "react";
import { MenuContext } from "../../../App";
import style from "./OfficeHome.module.css";
import axios from "axios";

const OfficeHome = () => {
  const { setSelectedMenu } = useContext(MenuContext);
  const [authority, setAuthority] = useState([]);
  useEffect(() => {
    // 네비바가 user에 고정되도록 설정
    setSelectedMenu("office");
    axios.get("/members/isAdminReact").then((resp) => {
      setAuthority(resp.data);
    });
  }, []);

  useEffect(() => {
    console.log(authority.length);
    if (authority.length >= 1) {
      if (!authority.includes("총괄")) {
        console.log("홈으로 돌아가");
        //window.location.href = "/";
      } else {
        console.log("관리자임");
      }
    }
  }, [authority]);

  return (
    <div className={style.innerDiv}>
      <OfficeInfo></OfficeInfo>
      <OfficeAdmin></OfficeAdmin>
    </div>
  );
};

export default OfficeHome;
