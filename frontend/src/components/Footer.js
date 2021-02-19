import React from "react";
import styled from "styled-components";

import { BasicP } from "../styled-components/GlobalStyle";

export const Footer = () => {
    return(
        <FooterContainer>
            <FooterText>Digital Organiser created by Claire Caudwell for the Technigo Bootcamp final project</FooterText>
        </FooterContainer>
    );
};

const FooterContainer = styled.div`
    padding: 0 20px;
    margin: 0;
`;

const FooterText = styled(BasicP)`
    font-size: 13px;
    text-align: center;
`;

