import React from "react";
import {Link, useParams} from "react-router-dom";

const LogoutBtn = () => {
  let {id}=useParams();
  return( 
  <Link to={`/profile/${id}`}>
  <div className="logoutBtn">My Page</div>
  </Link>
  );
};

export default LogoutBtn;
