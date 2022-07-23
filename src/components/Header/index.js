import React, { useState } from "react";
import axios from "axios";
import Results from "../Results";

const Header = () => {
  const [searchUser, setSearchUser] = useState("");
  const [repositories, setRepositories] = useState([]);

  const handleChange = (evt) => {
    setSearchUser(evt.target.value);
  };
  const handleClick = async () => {
    console.log(searchUser);
    try {
      const results = await axios(
        `https://api.github.com/users/${searchUser}/repos`
      );
      setRepositories(results);
    } catch (error) {
      console.log(error + "Olá");
    }
  };
  console.log(repositories);
  return (
    <>
      <div>
        <input type="text" value={searchUser} onChange={handleChange} />
        <button onClick={handleClick}>Buscar</button>
      </div>
      <Results repos={repositories} />
    </>
  );
};

export default Header;
