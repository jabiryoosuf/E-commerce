import React from "react";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

const Adminprofile = () => {
  return (
    <>
      <div className="adminprofile pt-5">
        <h3
          style={{
         textAlign:"center"
          }}
        >
          Profile
        </h3>
        <div>
          <h5
            style={{
              textAlign:"center"
            }}
          >
            I am a creative admin panal{" "}
          </h5>
        </div>
        <div className="adminprofile-details">
        <div className="adminprofile-description ps-5">
          <p>About Me!</p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad debitis
          beatae at. Facilis, maiores accusantium! Nostrum quam dicta
          laboriosam, quae quo nesciunt obcaecati culpa fuga quas! Tenetur totam
          temporibus eligendi, dolor nesciunt laudantium eos atque reiciendis
          quis eius? Quidem totam deserunt odit ipsum aliquam vitae aperiam
          enim. Mollitia, veniam voluptates.
        </div>
        <div className="adminprofile-image">
          <img src="https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/person-profile-image-icon.png" alt="profile image" />
        </div>
        <div className="adminprofile-expl">
        <p>Details</p>
        <h5>name:</h5>
        <p>admin</p>
        <h5>position:</h5>
        <p>admin</p>
        <h5>location:</h5>
        <p>mubai</p>
        <FacebookIcon />
        <InstagramIcon />
        <TwitterIcon />
        </div>
        </div>
      </div>
    </>
  );
};

export default Adminprofile;
