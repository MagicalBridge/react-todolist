import React from 'react';
import { HeaderWrapper, Logo, Nav, NavItem, NavSearch, Addition, Button } from './headerStyle';
import { connect } from 'react-redux';
import { actionCreators} from './store/index.js';


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
    focused: state.header.get('focused')
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus() {
      // 将这个之前的对象创建放在  actionCreator 统一管理。
      dispatch(actionCreators.searchFocus());
    },
    handleInputBlur() {
      dispatch(actionCreators.searchBlur());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)