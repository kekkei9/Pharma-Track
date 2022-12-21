import React from "react";
import "./RoleCard.scss";
import { Card } from "antd";

const { Meta } = Card;

const RoleCard = ({
  title,
  imgsrc,
  description,
  style,
  setTab,
  setDes,
  index,
}) => {
  return (
    <div className="RoleCard">
      <div>
        <Card
          hoverable
          cover={<img alt={title} src={imgsrc} />}
          style={style}
          onClick={() => {
            setTab(index);
            setDes(description);
          }}
        >
          <Meta title={title} />
        </Card>
      </div>
    </div>
  );
};

export default RoleCard;
