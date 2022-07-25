import React, { useState } from "react";
import axios from "axios";

const Results = (props) => {
  const { repos, user } = props;

  const repositoriesList =
    repos.length !== 0 ? (
      repos.data.map((item) => <li key={item.id}>{item.name}</li>)
    ) : (
      <li>Nenhum repositótio encontrado</li>
    );
  return (
    <>
      <ul>{repositoriesList}</ul>
    </>
  );
};

export default Results;
