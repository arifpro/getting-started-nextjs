import Head from "next/head";
import { useState } from "react";
import styles from "./index.module.scss";
import jwt from "jsonwebtoken";
import Link from "next/link";

const Home = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const [message, setMessage] = useState<string>("You are not logged in.");
  const [secret, setSecret] = useState<string>("");

  const handleSubmitForm = async (event) => {
    event.preventDefault();

    const res = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    }).then((t) => t.json());

    const token = res.token;

    if (token) {
      const json = jwt.decode(token) as { [key: string]: string };

      setMessage(
        `Welcome ${json.username} and you are ${
          json.admin ? "an admin" : "not an admin"
        }!`
      );

      const res = await fetch("/api/secret", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ token }),
      }).then((t) => t.json());

      if (res.secretAdminCode) {
        setSecret(res.secretAdminCode);
      } else {
        setSecret("Nothing available");
      }
    } else {
      setMessage("Something went wrong!");
    }
  };

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className={styles.green}>
        <span className={styles.span}>Red </span>
        Green
      </h1>
      <span className={styles.span}>Red </span>

      <h1>{message}</h1>
      <h1>Secret: {secret}</h1>
      <form
        method="POST"
        action="/api/login"
        onSubmit={(e) => handleSubmitForm(e)}
      >
        <input
          type="text"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <input type="submit" defaultValue="Login" />
      </form>

      <br />
      <br />
      <Link href="/page1">Go to Page 1</Link>
    </div>
  );
};

export default Home;
