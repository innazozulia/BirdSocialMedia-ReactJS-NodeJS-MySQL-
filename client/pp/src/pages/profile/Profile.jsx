import {
  FaFacebook,
  FaInstagram,
  FaTwitterSquare,
  FaLinkedin,
  FaPinterest,
  FaGlobe,
  FaRegEnvelope,
} from "react-icons/fa";
import React from "react";
import { ImLocation2 } from "react-icons/im";
import { BsThreeDotsVertical } from "react-icons/bs";
import Posts from "../../components/posts/Posts";
import { useMutation, useQueryClient, useQuery } from "@tanstack/react-query";
import { makeRequest } from "../../axios";
import { AuthContext } from "../../context/authContext";
import { useLocation } from "react-router-dom";
import Update from "../../components/update/Update";

import "./profile.scss";

const Profile = () => {
  const [openUpdate, setOpenUpdate] = React.useState(false);

  const { currentUser } = React.useContext(AuthContext);

  const userId = parseInt(useLocation().pathname.split("/")[2]);

  const { isLoading, error, data } = useQuery(["user"], () =>
    makeRequest.get("/users/find/" + userId).then((res) => {
      return res.data;
    }),
  );

  const { isLoading: rIsLoading, data: relationshipData } = useQuery(
    ["relationship"],
    () =>
      makeRequest.get("/relationships?followedUserId=" + userId).then((res) => {
        return res.data;
      }),
  );

  const queryClient = useQueryClient();

  const mutation = useMutation(
    (following) => {
      if (following)
        return makeRequest.delete("/relationships?userId=" + userId);
      return makeRequest.post("/relationships", { userId });
    },
    {
      onSuccess: () => {
        // Invalidate and refetch
        queryClient.invalidateQueries(["relationship"]);
      },
    },
  );

  const handleFollow = () => {
    mutation.mutate(relationshipData.includes(currentUser.id));
  };

  return (
    <div className="profile">
      {error ? (
        "error"
      ) : isLoading ? (
        "loading"
      ) : (
        <>
          <div className="images">
            <img
              src={"/upload/" + data.coverPic}
              alt=""
              className="cover"
            />
            <img
              src={"/upload/" + data.profilePicture}
              alt=""
              className="profile-picture"
            />
          </div>
          <div className="profile-conteiner">
            <div className="u-info">
              <div className="left">
                <a href="http://facebook.com">
                  <FaFacebook />
                </a>
                <a href="http://instagram.com">
                  <FaInstagram />
                </a>
                <a href="http://twitter.com">
                  <FaTwitterSquare />
                </a>
                <a href="http://linkedin.com">
                  <FaLinkedin />
                </a>
                <a href="http://pinterest.com">
                  <FaPinterest />
                </a>
              </div>
              <div className="center">
                <span>{data.name}</span>
                <div className="info">
                  <div className="item">
                    <ImLocation2 />
                    <span>{data.city}</span>
                  </div>
                  <div className="item">
                    <FaGlobe />
                    <span>{data.website}</span>
                  </div>
                </div>
                {rIsLoading ? (
                  "loading"
                ) : userId === currentUser.id ? (
                  <button onClick={() => setOpenUpdate(true)}>update</button>
                ) : (
                  <button onClick={handleFollow}>
                    {relationshipData.includes(currentUser.id)
                      ? "Following"
                      : "Follow"}
                  </button>
                )}
              </div>
              <div className="right">
                <FaRegEnvelope />
                <BsThreeDotsVertical />
              </div>
            </div>
            <Posts userId={userId} />
          </div>
        </>
      )}
      {openUpdate && (
        <Update
          setOpenUpdate={setOpenUpdate}
          user={data}
        />
      )}
    </div>
  );
};

export default Profile;
