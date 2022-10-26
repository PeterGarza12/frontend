import { format } from "prettier";
import React from "react";
import { FooterComp, TopNav, TopNavLink } from "./styles";

class Footer extends React.Component {
  render(){
    return(
      <FooterComp className="footer">
        <TopNav>
          <TopNavLink href="http://www.facebook.com">Facebook</TopNavLink>
          <TopNavLink href="http://www.twitter.com">Twitter</TopNavLink>
          <TopNavLink href="http://www.google.com">About Us</TopNavLink>
        </TopNav>
      </FooterComp>
    );
  }
}

export default Footer;
