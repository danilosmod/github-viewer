import React from "react";

const Results = (props) => {
  const { repos } = props;
  console.log(repos);
  const repositoriesList =
    repos.length !== 0 ? (
      repos.data.map((item) => <li key={item.id}>{item.name}</li>)
    ) : (
      <li>Nenhum repositótio encontrado</li>
    );
  return <ul>{repositoriesList}</ul>;
};

export default Results;
