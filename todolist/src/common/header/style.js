import styled from 'styled-components';
import logoPic from '../../statics/logo.png';

export const HeaderWrapper  = styled.div`
  z-index: 1;
  position: relative;
  height: ${56/2}px;
  border-bottom: 1px solid #f0f0f0;
`;

export const Logo = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	display: block;
	width: 100px;
	height: ${56/2}px;
	background: url(${logoPic}) no-repeat;
	background-size: contain;
`;

export const Nav = styled.div`
	width: 960px;
	height: 100%;
	padding-right: 70px;
	box-sizing: border-box;
	margin: 0 auto;
`;