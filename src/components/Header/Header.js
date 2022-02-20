import React from 'react';
import styled from 'styled-components/macro';

import { QUERIES, WEIGHTS } from '../../constants';
import Logo from '../Logo';
import Icon from '../Icon';
import UnstyledButton from '../UnstyledButton';
import SuperHeader from '../SuperHeader';
import MobileMenu from '../MobileMenu';
import VisuallyHidden from '../VisuallyHidden';

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <LogoWrapper>
          <Logo />
        </LogoWrapper>
        <DesktopNav>
          <NavLink href="/sale">
            <NavWrapper>
              <NavText>Sale</NavText>
              <NavTextBold>Sale</NavTextBold>
            </NavWrapper>
          </NavLink>
          <NavLink href="/new">
            <NavWrapper>
              <NavText>New&nbsp;Releases</NavText>
              <NavTextBold>New&nbsp;Releases</NavTextBold>
            </NavWrapper>
          </NavLink>
          <NavLink href="/men">
            <NavWrapper>
              <NavText>Men</NavText>
              <NavTextBold>Men</NavTextBold>
            </NavWrapper>
          </NavLink>
          <NavLink href="/women">
            <NavWrapper>
              <NavText>Women</NavText>
              <NavTextBold>Women</NavTextBold>
            </NavWrapper>
          </NavLink>
          <NavLink href="/kids">
            <NavWrapper>
              <NavText>Kids</NavText>
              <NavTextBold>Kids</NavTextBold>
            </NavWrapper>
          </NavLink>
          <NavLink href="/collections">
            <NavWrapper>
              <NavText>Collections</NavText>
              <NavTextBold>Collections</NavTextBold>
            </NavWrapper>
          </NavLink>
        </DesktopNav>
        <MobileActions>
          <ShoppingBagButton>
            <Icon id="shopping-bag" />
            <VisuallyHidden>Open cart</VisuallyHidden>
          </ShoppingBagButton>
          <UnstyledButton>
            <Icon id="search" />
            <VisuallyHidden>Search</VisuallyHidden>
          </UnstyledButton>
          <UnstyledButton onClick={() => setShowMobileMenu(true)}>
            <Icon id="menu" />
            <VisuallyHidden>Open menu</VisuallyHidden>
          </UnstyledButton>
        </MobileActions>
        <Filler />
      </MainHeader>

      <MobileMenu
        isOpen={showMobileMenu}
        onDismiss={() => setShowMobileMenu(false)}
      />
    </header>
  );
};

const MainHeader = styled.div`
  display: flex;
  align-items: baseline;
  padding: 18px 32px;
  border-bottom: 1px solid var(--color-gray-300);
  overflow: auto;

  @media ${QUERIES.tabletAndSmaller} {
    justify-content: space-between;
    align-items: center;
    border-top: 4px solid var(--color-gray-900);
  }

  @media ${QUERIES.phoneAndSmaller} {
    padding-left: 16px;
    padding-right: 16px;
  }
`;

const DesktopNav = styled.nav`
  display: flex;
  gap: clamp(1rem, 9.2vw - 4.5rem, 3.5rem);
  margin: 0px 48px;

  @media ${QUERIES.tabletAndSmaller} {
    display: none;
  }
`;

const MobileActions = styled.div`
  display: none;

  @media ${QUERIES.tabletAndSmaller} {
    gap: 32px;
    display: flex;
  }

  @media ${QUERIES.phoneAndSmaller} {
    gap: 16px;
  }
`;

const LogoWrapper = styled.div`
  flex: 1;

  @media ${QUERIES.tabletAndSmaller} {
    flex: revert;
  }
`;

const ShoppingBagButton = styled(UnstyledButton)`
  transform: translateX(-2px);
`;

const Filler = styled.div`
  flex: 1;

  @media ${QUERIES.tabletAndSmaller} {
    display: none;
  }
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-gray-900);
  font-weight: ${WEIGHTS.medium};
  overflow: hidden;
  position: relative;
  &:first-of-type {
    color: var(--color-secondary);
  }
`;

const NavText = styled.span`
  display: inline-block;
  transition:         transform 0.2s;
        `
const NavTextBold = styled.span`
  position: absolute;
  font-weight: bold;
  transform: translateY(0%);
  transition: transform 0.2s;
  &:hover {
    transform: traslateY(0);
  }
  `
  const NavWrapper = styled.span`
    &:hover > ${NavText} {
      transform: translateY(-100%)
    }
  `

export default Header;
