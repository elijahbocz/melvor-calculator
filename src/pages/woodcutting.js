import * as React from "react";
import { useState } from "react";
// import { graphql } from 'gatsby';
import styled from "styled-components";

import Layout from "../components/layout/layout";
import Seo from "../components/seo";
import exp from "../static/exp.json";
import woodcutting from "../static/woodcutting.json";

const StyledWoodcutting = styled.div``;

const StyledForm = styled.form`
  padding: 1rem;

  #error {
    color: salmon;
  }
`;

const Woodcutting = () => {
  const expTable = exp["expTable"];
  const treeData = woodcutting["tree"];
  const axeData = woodcutting["axe"];
  const [currentExp, setCurrentExp] = useState(0);
  const [targetLevel, setTargetLevel] = useState(0);
  const [axeType, setAxeType] = useState("");
  const [tree, setTree] = useState("");
  const [result, setResult] = useState("");
  const [error, setError] = useState("");

  function isNumeric(input) {
    if (typeof input != "string") {
      return false;
    }
    return !isNaN(input) && !isNaN(parseFloat(input));
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (currentExp < 0 || !isNumeric(currentExp)) {
      setError("Current Experience must be a number above 0");
      setTimeout(() => {
        setError("");
      }, 5000);
    } else if (targetLevel < 0 || !isNumeric(targetLevel)) {
      setError("Target Level must be a number above 0");
      setTimeout(() => {
        setError("");
      }, 5000);
    } else if (axeType === "") {
      setError("An Axe Type must be selected");
      setTimeout(() => {
        setError("");
      }, 5000);
    } else if (tree === "") {
      setError("A Tree must be selected");
      setTimeout(() => {
        setError("");
      }, 5000);
    } else {
      // Calculate the user's current later
      let currentLevel = 1;
      for (const level in expTable) {
        if (currentExp < expTable[level]) {
          currentLevel = level - 1;
          break;
        }
      }

      // Calculate the difference between current experience
      // and experience needed for target level
      const expToTargetLevel = expTable[targetLevel];
      const expDiff = expToTargetLevel - currentExp;

      // Parse data about the selected tree
      let treeExp = 0;
      let treeTime = 0;
      for (const item in treeData) {
        if (tree.toLowerCase() === item) {
          treeExp = treeData[item]["exp"];
          treeTime = treeData[item]["time"];
        }
      }

      // Parse data about the selected axe
      let axeModifier = 0;
      for (const item in axeData) {
        if (axeType.toLowerCase() === item) {
          axeModifier = 1 - axeData[item] / 100;
        }
      }
      console.log(axeModifier);
      const modifiedTreeTime = treeTime * axeModifier;
      const treesNeeded = Math.ceil(expDiff / treeExp);
      const timeNeeded = ((modifiedTreeTime * treesNeeded) / 60).toFixed(2);

      setResult(
        `To reach level ${targetLevel} from level ${currentLevel} with ${currentExp} experience, you need to cut down ${treesNeeded} ${tree} trees, which will take ${timeNeeded} minutes with the ${axeType} axe`
      );
    }
  }

  function handleChange(e) {
    if (e.target.id === "current-exp") {
      setCurrentExp(e.target.value);
    } else if (e.target.id === "target-level") {
      setTargetLevel(e.target.value);
    } else if (e.target.name === "axe") {
      setAxeType(e.target.id);
    } else if (e.target.name === "tree") {
      setTree(e.target.id);
    }
  }

  return (
    <Layout>
      <Seo title="Woodcutting Calcuator" />
      <StyledWoodcutting>
        <h3>Woodcutting Calculator</h3>
        <p>Current Exp: {currentExp}</p>
        <p>Target Level: {targetLevel}</p>
        <p>Axe Type: {axeType}</p>
        <p>Tree: {tree}</p>
        <p>Result: {result}</p>
        <StyledForm onSubmit={handleSubmit}>
          <p id="error">{error}</p>

          {/* <label for="current-exp">Current Experience:</label> */}
          <input
            type="text"
            id="current-exp"
            placeholder="Current Experience"
            onChange={handleChange}
          ></input>
          <p></p>
          {/* <label for="target-level">Target Level:</label> */}
          <input
            type="text"
            id="target-level"
            placeholder="Target Level"
            onChange={handleChange}
          ></input>
          <p></p>
          <p>Axe Type:</p>
          <input
            type="radio"
            id="Iron"
            name="axe"
            onChange={handleChange}
          ></input>
          <label htmlFor="Iron">Iron</label>
          <input
            type="radio"
            id="Steel"
            name="axe"
            onChange={handleChange}
          ></input>
          <label htmlFor="Steel">Steel</label>
          <p></p>
          <input
            type="radio"
            id="Black"
            name="axe"
            onChange={handleChange}
          ></input>
          <label htmlFor="Black">Black</label>
          <input
            type="radio"
            id="Mithril"
            name="axe"
            onChange={handleChange}
          ></input>
          <label htmlFor="Mithril">Mithril</label>
          <p></p>
          <input
            type="radio"
            id="Adamant"
            name="axe"
            onChange={handleChange}
          ></input>
          <label htmlFor="Adamant">Adamant</label>
          <input
            type="radio"
            id="Rune"
            name="axe"
            onChange={handleChange}
          ></input>
          <label htmlFor="Rune">Rune</label>
          <p></p>
          <input
            type="radio"
            id="Dragon"
            name="axe"
            onChange={handleChange}
          ></input>
          <label htmlFor="Dragon">Dragon</label>
          <p></p>

          <p>Tree:</p>
          <input
            type="radio"
            id="Normal"
            name="tree"
            onChange={handleChange}
          ></input>
          <label htmlFor="Normal">Normal</label>
          <input
            type="radio"
            id="Oak"
            name="tree"
            onChange={handleChange}
          ></input>
          <label htmlFor="Oak">Oak</label>
          <p></p>

          <input
            type="radio"
            id="Willow"
            name="tree"
            onChange={handleChange}
          ></input>
          <label htmlFor="Willow">Willow</label>
          <input
            type="radio"
            id="Teak"
            name="tree"
            onChange={handleChange}
          ></input>
          <label htmlFor="Teak">Teak</label>

          <p></p>
          <input
            type="radio"
            id="Maple"
            name="tree"
            onChange={handleChange}
          ></input>
          <label htmlFor="Maple">Maple</label>
          <input
            type="radio"
            id="Mahogany"
            name="tree"
            onChange={handleChange}
          ></input>
          <label htmlFor="Mahogany">Mahogany</label>

          <p></p>
          <input
            type="radio"
            id="Yew"
            name="tree"
            onChange={handleChange}
          ></input>
          <label htmlFor="Yew">Yew</label>
          <input
            type="radio"
            id="Magic"
            name="tree"
            onChange={handleChange}
          ></input>
          <label htmlFor="Magic">Magic</label>

          <p></p>
          <input
            type="radio"
            id="Redwood"
            name="tree"
            onChange={handleChange}
          ></input>
          <label htmlFor="Redwood">Redwood</label>
          <p></p>
          <button>Calculate</button>
        </StyledForm>
      </StyledWoodcutting>
    </Layout>
  );
};

// export const query = graphql`
//     query
// `;

export default Woodcutting;
