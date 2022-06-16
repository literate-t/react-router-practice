import React from "react";
import { useParams } from "react-router-dom";
const profileData = {
  t: {
    name: "KIM",
    description: "Frontend Engineer",
  },
  homer: {
    name: "호머 심슨",
    description: "human",
  },
};

function Profile() {
  const { username } = useParams();
  const profile = profileData[username];

  if (!profile) {
    return <div>존재하지 않는 사용자</div>;
  }
  return (
    <div>
      <h3>
        {username}({profile.name})
      </h3>
      <p>{profile.description}</p>
    </div>
  );
}

export default Profile;
