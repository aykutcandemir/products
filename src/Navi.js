import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
} from 'reactstrap';
import CartSummary from './CartSummary'


export default class Navi extends Component {
  state = {
    isOpen : false
  }

  toggle = () => {
      this.setState({
        isOpen : !this.state.isOpen
      })
  }

  render() {
    return (
      <div>
      <Navbar color='light' light expand ="md">
        <NavbarBrand href="/">Shopify</NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink href="/components/">Components</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">
                GitHub
              </NavLink>
            </NavItem>
            <CartSummary removeFromCart={this.props.removeFromCart} cart={this.props.cart} />
            
          </Nav>
          <NavbarText>Simple Text</NavbarText>
        </Collapse>
      </Navbar>
    </div>
    )
  }
}
