import 'react-app-polyfill/ie11';
import React, {useState} from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import addToMailchimp from "gatsby-plugin-mailchimp";
import EmailValidator from "email-validator";

import { Helmet } from "react-helmet";
import { graphql } from "gatsby";
//import Navbar from "react-bootstrap/Navbar";
//import Nav from "react-bootstrap/Nav";


import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

import "./layout.scss";
import "cookieconsent/build/cookieconsent.min.css";
if (typeof window !== `undefined`) {
  //import "cookieconsent";
  //import "./consent";

  require("cookieconsent");
  require("./consent");
}

const IndexPage = (props) =>{

  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('submit');
  }
 
 return  (



  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Helmet><title>test</title></Helmet>
    <h1>Hi people</h1>
    <Navbar color="light" light expand="md">
          <NavbarBrand href="/">reactstrap</NavbarBrand>
          <NavbarToggler />
          <Collapse isOpen={false} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/components/">Components</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Options
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    Option 1
                  </DropdownItem>
                  <DropdownItem>
                    Option 2
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Reset
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>


  {/*
        <div id="banner" dangerouslySetInnerHTML={{
          __html: props.banner
        }}>
        </div>
              {/*
      <Navbar
        bg="white"
        expand="sm"
        sticky="top"
        collapseOnSelect={true}
        className="shadow-sm"
      >

        <Navbar.Brand href="/">
          test
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">

              <Nav.Link  href={"/#test"}>
                test
              </Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Navbar>
      */}
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <form onSubmit={handleSubmit}>
      <input name='email' value={email} onChange={e => setEmail(e.target.value)} type='text' />
      <button type='submit'>Senden</button>
    </form>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)}

export default IndexPage

export const query = graphql`
  query HomePageQuery {
    allContentfulStartseite(limit: 1) {
      edges {
        node {
          banner {
            childContentfulRichText {
              html
            }
          }
          kontakt {
            childContentfulRichText {
              html
            }
          }
          verein {
            childContentfulRichText {
              html
            }
          }
          faq {
            childContentfulRichText {
              html
            }
          }
        }
      }
    }
  }
`;