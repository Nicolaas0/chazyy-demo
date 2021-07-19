import React from "react";
import styled from "styled-components";
import { dev } from "../../config/breakp";
import { color } from "../../config/theme";

const Footer = () => {
  return (
    <Container>
      <Link>
        <Icon target="_blank" href="https://icons8.com/icon/DxIsF9smUsRE/heart">
          Heart
        </Icon>{" "}
        icon by{" "}
        <Web target="_blank" href="https://icons8.com">
          Icons8
        </Web>
      </Link>
      <Link>
        <Icon
          target="_blank"
          href="https://icons8.com/icon/IZss1rnAb_BA/stormtrooper"
        >
          Stormtrooper
        </Icon>{" "}
        icon by{" "}
        <Web target="_blank" href="https://icons8.com">
          Icons8
        </Web>
      </Link>
      <Link>
        <Icon target="_blank" href="https://icons8.com/icon/94633/spam">
          Spam
        </Icon>{" "}
        icon by{" "}
        <Web target="_blank" href="https://icons8.com">
          Icons8
        </Web>
      </Link>
    </Container>
  );
};

const Container = styled.div`
  margin: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  @media ${dev.mobileM} {
    flex-direction: column;
  }
`;

const Link = styled.div`
  border-radius: 1rem;
  text-align: center;
  color: ${color.sonicSv};
  width: auto;
  height: auto;
  font-family:"Roboto Mono";
  margin: 0.5rem;
  background-color: ${color.rBFogra};
  padding: 0.8rem;
`;

const Icon = styled.a`
  color: ${color.sonicSv};
  font-family: "Roboto Mono";
  text-decoration: none;
  font-weight: 600;
`;

const Web = styled.a`
  color: ${color.sonicSv};
  font-family: "Roboto Mono";
  font-weight: 600;
`;

export default Footer;
