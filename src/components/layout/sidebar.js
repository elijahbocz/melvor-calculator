import * as React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

const StyledSidebar = styled.div``;
const Sidebar = () => {
  return (
    <StyledSidebar>
      <Link to="/woodcutting">Woodcutting</Link>
    </StyledSidebar>
  );
};

export default Sidebar;
