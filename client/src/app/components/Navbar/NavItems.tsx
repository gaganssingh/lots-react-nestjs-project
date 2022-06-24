import styled, { css } from "styled-components";
import tw from "twin.macro";
import { slide as Menu } from "react-burger-menu";
import { useMediaQuery } from "react-responsive";
import { SCREEN_SIZES } from "../components";
import menuStyles from "./menuStyle";

const ListContainer = styled.ul`
  ${tw`
    flex
    list-none
  `}
`;

const NavItem = styled.li<{ menu?: any }>`
  ${tw`
    text-sm
    md:text-base
    text-black
    font-medium
    mr-1
    md:mr-5
    cursor-pointer
    transition
    duration-300
    ease-in-out
    hover:text-gray-700
  `};
  ${({ menu }) =>
    menu &&
    css`
      ${tw`
      text-white
      text-xl
      mb-3
      focus:text-white
    `};
    `};
`;

const links = [
  { name: "Home", link: "/" },
  { name: "Cars", link: "/" },
  { name: "Services", link: "/" },
  { name: "Contact Us", link: "/" },
];

export const NavItems = () => {
  const isMobile = useMediaQuery({
    maxWidth: SCREEN_SIZES.sm,
  });

  if (isMobile) {
    return (
      <Menu right styles={menuStyles}>
        <ListContainer>
          {links.map(({ name, link }) => (
            <NavItem key={name} menu>
              <a href={link}>{name}</a>
            </NavItem>
          ))}
        </ListContainer>
      </Menu>
    );
  }

  return (
    <ListContainer>
      {links.map(({ name, link }) => (
        <NavItem key={name}>
          <a href={link}>{name}</a>
        </NavItem>
      ))}
    </ListContainer>
  );
};
