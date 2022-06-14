import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, Link, Outlet } from 'react-router-dom';
import { FiHome, FiTruck, FiSearch, FiChevronDown } from "react-icons/fi";
import { FaBars } from "react-icons/fa";
import { Navbar, Nav, Form } from "react-bootstrap";
import "../Dashboard/Dashboard.css";
import img1 from '../Dashboard/group.png'

const Dashboard = () => {

    const {dataLogin} = useSelector((state) => state.auth);

    const navigate = useNavigate();
    
    useEffect(() => {
        if(dataLogin?.email !== 'admin@admin.com') navigate("/")
        // eslint-disable-next-line
    }, [])

    return (
      <>
        <div className="wrapper">
            <section className="sidebar">
              <div className="logo"></div>
                  <ul className="frame">
                      <li className="home">
                          <div className="fihome"> <FiHome /> </div>
                          <Link to="/dashboard/home" className="tex">Dashboard</Link>
                      </li>
                      <li className="truck"> 
                          <div className="fitruck"> <FiTruck /> </div>
                          <Link to="/dashboard/car" className="test">Cars</Link>
                      </li>
                  </ul>
            </section>

            <Navbar className="navbar">
              <Navbar.Brand href="#" className="retangle" />
              <FaBars className="fimenu" />
              <Navbar.Toggle aria-controls="navbarScroll" />
              <Navbar.Collapse id="navbarScroll">
                <Form className="search">
                  <div className="input">
                    <div className="fisearch"> <FiSearch /> </div>
                    <input
                      type="search"
                      placeholder="Search"
                      className="inputfield"
                    />
                  </div>
                  <button className="button">Search</button>
                </Form>
                <Nav
                  className="frames"                  
                  navbarScroll
                >
                  <img src={img1} alt=""/>
                  <div className="email">Unis Badri</div>
                  <div className="chevron"> <FiChevronDown /> </div>
                </Nav>
              </Navbar.Collapse>
          </Navbar>
          <Outlet />
        </div>
      </>
    )
}

export default Dashboard