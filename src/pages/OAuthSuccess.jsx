import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import useNavigateSearch from "../hooks/useNavigateSearch";

const OAuthSuccess = () => {
  const navigate = useNavigateSearch();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  useEffect(() => {
    const accessToken = queryParams.get("accessToken");
    localStorage.setItem("accessToken");
  }, []);

  return (
    <div>
      success
    </div>
  );
};

export default OAuthSuccess;