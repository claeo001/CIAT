import React from 'react';
import { SIGN_IN, TITLE } from '../../../constants';
import styled from 'styled-components';
import { Header } from 'antd/lib/layout/layout';
import { theme } from '../../../constants/theme';
import { Link } from 'react-router-dom';
import { MAIN_URL, SIGNIN_URL } from '../../../constants/urls';
import { MdAccountCircle } from 'react-icons/md';

const Wrapper = styled(Header)`
  display: flex;
  justify-content: space-between;
  height: 70px;
  padding: 10px 40px;
  align-items: center;
  background-color: ${theme.colorWhite};
  border-bottom: solid 1px ${theme.colorLine};
`;

const Logo = styled(Link)`
  font-family: ${theme.fontLogo};
  font-size: ${theme.fontSizeLogo};
  color: ${theme.colorPrimary};
  :hover {
    color: ${theme.colorPrimary};
  }
`;

const UserInfo = styled(Link)`
  display: flex;
  align-items: center;
  font-family: ${theme.fontBasic};
  font-size: ${theme.fontSizeBody01};
  color: ${theme.colorBlack};
  :hover {
    color: ${theme.colorBlack};
  }
`;

function SiteHeader() {
  return (
    <Wrapper>
      <Logo to={MAIN_URL}>{TITLE}</Logo>
      <UserInfo to={SIGNIN_URL}>
        <MdAccountCircle
          style={{ fontSize: theme.fontSizeIcon, margin: '0px 10px' }}
        />
        {SIGN_IN}
      </UserInfo>
    </Wrapper>
  );
}

export default SiteHeader;