import * as React from "react";
import { useState } from "react";
// import { graphql } from 'gatsby';
import styled from "styled-components";

import Layout from "../components/layout/layout";
import Seo from "../components/seo";
import exp from "../static/exp.json";

const StyledWoodcutting = styled.div`
  color: grey;
`;

const StyledForm = styled.form`
  padding: 1rem;
`;

const Woodcutting = () => {
  const expTable = exp["expTable"];
  const [currentExp, setCurrentExp] = useState(0);
  const [targetLevel, setTargetLevel] = useState(0);

  function handleSubmit(e) {
    e.preventDefault();
  }

  function handleChange(e) {
    if (e.target.id === "current-exp") {
      setCurrentExp(e.target.value);
    } else if (e.target.id === "target-level") {
        setTargetLevel(e.target.value);
    }
  }

  return (
    <Layout>
      <Seo title="Woodcutting Calcuator" />
      <StyledWoodcutting>
        {/* <p>{expTable["52"]}</p> */}
        <p>Current Exp: {currentExp}</p>
        <p>Target Level: {targetLevel}</p>
        <p>Woodcutting Calculator</p>
        <StyledForm onSubmit={handleSubmit}>
          <input
            type="text"
            id="current-exp"
            placeholder="Current Experience"
            onChange={handleChange}
          ></input>
          <p></p>
          <input
            type="text"
            id="target-level"
            placeholder="Target Level"
            onChange={handleChange}
          ></input>
          <p></p>
          <button>Submit</button>
        </StyledForm>
      </StyledWoodcutting>
    </Layout>
  );
};

// export const query = graphql`
//     query
// `;

export default Woodcutting;
