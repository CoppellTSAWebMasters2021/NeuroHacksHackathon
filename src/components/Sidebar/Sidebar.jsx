import React from "react";
import { Button } from "../ButtonElement";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SideMenu,
  SidebarLink,
  SideBtnWrap,
} from "./SidebarElements";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SideMenu>
          <SidebarLink to="/" onClick={toggle} exact="true" offset={-80}>
            Home
          </SidebarLink>
          <SidebarLink to="/aboutus" onClick={toggle} exact="true" offset={-80}>
            About Us
          </SidebarLink>
          <SidebarLink
            to="/schedule"
            onClick={toggle}
            exact="true"
            offset={-80}
          >
            Schedule
          </SidebarLink>
          <SidebarLink to="/faq" onClick={toggle} exact="true" offset={-80}>
            FAQ
          </SidebarLink>
          <SidebarLink
            to="/contactus"
            onClick={toggle}
            exact="true"
            offset={-80}
          >
            Contact Us
          </SidebarLink>
        </SideMenu>
        <SideBtnWrap>
          <Button
            to="/register"
            onClick={toggle}
            exact="true"
            offset={-80}
            primary="true"
            dark="true"
          >
            {" "}
            Register
          </Button>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
