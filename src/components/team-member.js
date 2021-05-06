import React from "react";

const TeamMember = (props) => {
  return (
    <div className=" " style={{ height: "auto" }}>
      <div className="">
        <img
          src={props.thumb}
          alt="Image 1"
          className="rounded-circle"
          height={100}
          width={100}
        />
      </div>
      <div className="card-body text-dark">
        <h4 className="card-title">{props.title}</h4>
        <p className="card-text text-secondary">{props.text}</p>
      </div>
    </div>
  );
};

export default TeamMember;
