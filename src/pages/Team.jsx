import React from "react";
import "../styles/Team.css";
import { team } from "../assets/data";
import BannerTop from "../components/BannerTop";
import BannerBottom from "../components/BannerBottom";
const Team = () => {
  return (
    <div className="team-container">
      <BannerTop page="Our Team" />
      <div className="team-content">
        {team.map((emp) => {
          return (
            <div className="team-memberCard">
              <div className="team-empImg">
                <img src={emp.image} alt="Employee Image" />
              </div>
              <div className="team-empInfo">
                <span className="team-employeeName">{emp.name}</span>
                <span className="team-employeePost">{emp.post}</span>
              </div>
            </div>
          );
        })}
      </div>
      <BannerBottom />
    </div>
  );
};

export default Team;
