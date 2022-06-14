import React, { useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FiChevronRight, FiPlus } from 'react-icons/fi';
import img4 from '../Car/key.svg';
import img5 from '../Car/clock.svg';
import img6 from '../Car/trash.svg';
import img7 from '../Car/edit.svg';
import { useSelector, useDispatch } from 'react-redux';
import { carsAction } from '../../config/redux/actions/carAction';
import "../Car/Car.css";

const Car = () => {
  const dispatch = useDispatch()

  const {cars} = useSelector((state) => state.carReducer);
  console.log(cars);

  useEffect(() => {
    dispatch(carsAction()) 
  }, [dispatch]);

  const plus = <FiPlus className="dob" />

  return (
    <>
      <section className="cars">
        <div className="car">
          <h5 className="main">CARS</h5>
        </div>
        <div className="listcar">
          <h6 className="menu">List Car</h6>
        </div>
      </section>

      <div className="content-container">
        <section className="breadcrumb">
          <div className="crumb">Cars</div>
          <FiChevronRight className="rightchevron" />
          <div className="licar">List car</div>
        </section>

        <div className="list-add">
          <h5 className="listmobil">List Car</h5>

          <Link to="/dashboard/add" id="GF">
            <button className="newcar">{plus} Add New Car</button>
          </Link>
        </div>

        <section className="sizebutton">
          <Button className="all">All</Button>
          <Button className="small">Small</Button>
          <Button className="medium">Medium</Button>
          <Button className="big">Large</Button>
        </section>

        <section className="cards">
          {cars.map((car) =>
            <div className="crd1" key={car.id}>
              <div className="cdr1">
                <img src={car.image} alt="Mobil" className="innova" />

                <div className="name-car">
                  <h5 className="inova-car">{car.name}</h5>
                  <h6 className="inova-price">Rp {car.price} / hari</h6>
                </div>

                <div className="rent">
                  <img src={img4} alt="icon key" className="icon-key" />
                  <p className="start-rent">Start rent - Finish rent</p>
                </div>

                <div className="update-car">
                  <img src={img5} alt="icon clock" className="icon-clock" />
                  <p className="updated">Updated at 4 Apr 2022, 09.00</p>
                </div>
              </div>

              <div className="switch">
                <Button className="delete">
                  <img src={img6} alt="icon trash" className="icon-trash" />
                  Delete
                </Button>
                <Button className="edit">
                  <img src={img7} alt="icon edit" className="icon-edit" />
                  Edit
                </Button>
              </div> 
            </div>
          )}
        </section>   
      </div>
    </>
  )
}

export default Car