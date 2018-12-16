import React from 'react';
import { HeaderWrapper, Logo, Nav, NavItem, NavSearch, Addition, Button } from './headerStyle';
import { connect } from 'react-redux';

const Header = (props) => {
  return (
    <HeaderWrapper>
      <Logo></Logo>
      <Nav>
        <NavItem className='left active'>首页</NavItem>
        <NavItem className='left'>下载App</NavItem>
        <NavSearch
          className={props.focused ? 'focused' : ''}
          onFocus={props.handleInputFocus}
          onBlur={props.handleInputBlur}
        >
        </NavSearch>
        <NavItem className='right'>登陆</NavItem>
        <NavItem className='right'>Aa</NavItem>
      </Nav>
      <Addition>
        <Button>注册</Button>
        <Button>写文章</Button>
      </Addition>
    </HeaderWrapper>
  )
}

const mapStateToProps = (state) => {
  return {
    focused: state.focused
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus() {
      const action = {
        type: 'search_focus'
      }
      dispatch(action);
    },
    handleInputBlur() {
      const action = {
        type: 'search_blur'
      }
      dispatch(action);
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)