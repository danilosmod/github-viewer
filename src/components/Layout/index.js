import React, { useState } from "react";
import axios from "axios";
import Results from "../Results";
import Branches from "../Branches";

const Layout = () => {
  const [searchUser, setSearchUser] = useState("");
  const [repositories, setRepositories] = useState([]);

  const handleChange = (evt) => {
    setSearchUser(evt.target.value);
  };
  const handleClick = async () => {
    try {
      const results = await axios(
        `https://api.github.com/users/${searchUser}/repos`
      );
      setRepositories(results);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(repositories);
  return (
    <>
      <div>
        <input type="text" value={searchUser} onChange={handleChange} />
        <button onClick={handleClick}>Buscar</button>
      </div>
      <Results repos={repositories} user={searchUser} />
    </>
  );
};

export default Layout;
