import "./styles.css";
import { UserCard } from "./components/UserCard";
import { useAllUsers } from "./hooks/useAllUsers";
import axios from "axios";
import { User } from "./types/api/user";
import { UserProfile } from "./types/userPfofile";
import { useState } from "react";

export default function App() {
  const { getUsers, userPfofile, loading, error } = useAllUsers();

  const onClickFetchUser = () => getUsers();

  return (
    <div className="App">
      <button onClick={onClickFetchUser}>データ取得</button>
      <br />
      {error ? (
        <p style={{ color: "red" }}>データの取得に失敗しました</p>
      ) : loading ? (
        <p>Loading...</p>
      ) : (
        <>
          {userPfofile.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </>
      )}
    </div>
  );
}
