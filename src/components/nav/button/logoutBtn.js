import React from "react";
import { Link, useParams } from "react-router-dom";

const LogoutBtn = () => {
  let { id } = useParams();
  return (
    <div className="mypageBtn">
      <Link to={`/profile/${id}`} style={{ color : "white", textDecoration: "none" }}>
        <div>My Page</div>
      </Link>
    </div>
  );
};

export default LogoutBtn;
