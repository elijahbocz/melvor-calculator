import * as React from "react";
// import { useState } from "react";
// import { graphql } from 'gatsby';
import styled from "styled-components";

import Layout from "../components/layout/layout";
import Seo from "../components/seo";

const StyledFishing = styled.div``;

const Fishing = () => {
  return (
    <Layout>
      <Seo title="Fishing Calculator" />
      <StyledFishing>
        <p>Fishing</p>
      </StyledFishing>
    </Layout>
  );
};

export default Fishing;
