import React from 'react'
import { FiChevronRight } from 'react-icons/fi';

import "../Home/Home.css"

const Home = () => {

  return (
    <>
      <section className="ari">
        <div className="car">
          <h5 className="board">DASHBOARD</h5>
        </div>
        <div className="listcar">
          <h6 className="menu">Dashboard</h6>
        </div>
      </section>

      <section className="pass">
        <div className="graphy">Dashboard</div>
        <FiChevronRight className="rightchevron" />
        <div className="fig">Dashboard</div>
      </section>

      <h5 className="tree">Dashboard</h5>
    </>
  )
}

export default Home