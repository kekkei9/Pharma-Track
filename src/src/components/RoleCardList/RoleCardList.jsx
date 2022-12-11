import React from "react";
import RoleCard from "../RoleCard/RoleCard";
import "./RoleCardList.scss";

const RoleCardList = ({ tab, setTab, RoleData }) => {
  return (
    <div className="RoleCardList tw-flex tw-flex-row">
      {RoleData.map((role, index) => (
        <RoleCard
          {...role}
          style={
            tab === index
              ? {
                  borderColor: "rgba(0, 121, 255, 0.5)",
                }
              : {}
          }
          tab={tab}
          setTab={setTab}
          index={index}
        />
      ))}
    </div>
  );
};

export default RoleCardList;
