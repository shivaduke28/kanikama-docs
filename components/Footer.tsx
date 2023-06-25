import React from "react";
import styled from "styled-components";
import { Link } from "../lib/components";

const FooterEl = styled.footer`
    width: 90%;
    max-width: 640px;
    margin: 0 auto;
    text-align: center;
`;

const Hr = styled.hr`
    margin: 60px auto 0;
    background-color: gray;
    // color: gray;
    border: 0.5px solid gray;
`;

const FooterText = styled.div`
    text-align: right;
    margin: 20px auto;
`;

const Footer = (): React.ReactElement => (
    <FooterEl>
        <Hr />
        <FooterText>
            {"Made with "}
            <Link href="https://github.com/fand/mdmt">MDMT</Link>
            {" by AMAGI"}
        </FooterText>
    </FooterEl>
);

export default Footer;
