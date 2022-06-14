import React from 'react';
import { FiChevronRight, FiUpload } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import '../Addcar/Add.css';

const Add = () => {
    const star = <span className="star">*</span>

    const upload = <FiUpload className="beat" />

    const handleClick = () => { alert("Data Berhasil Disimpan") }
  return (
    <>
        <section className="ari">
            <div className="car">
                <h5 className="main">CARS</h5>
            </div>
            <div className="listcar">
                <h6 className="menu">List Car</h6>
            </div>
        </section>
 
        <section className="beacumb"> 
            <div className="crumb">Cars</div>
            <FiChevronRight className="rightchevron" />
            <div className="listcumb">List car</div>
            <FiChevronRight className="chevronrigh" />
            <div className="figma">Add New Car</div>
        </section>  

        <h5 className="neutral">Add New Car</h5>

        <form action="" className="form">
            <div className="babel">
                <div className="notif">
                    <label htmlFor="" className="ag">Nama{star}</label>
                    <div className="gam">
                        <input type="text" placeholder="Placeholder" name="name" className="up" />
                    </div>
                </div>

                <div className="adis">
                    <label htmlFor="" className="nike">Harga{star}</label>
                    <div className="lafi">
                        <input type="number" placeholder="Placeholder" name="price" className="walk"  />
                    </div>
                </div>

                <div className="didas">
                    <label htmlFor="" className="nevada">Foto{star}</label>
                    <div className="sams">
                        <div className="ios">
                            <input type="file" id="file-input" accept="image" />
                            <label htmlFor="" for="file-input">{upload}</label>
                        </div>
                        <h6 className="sung">File size max. 2MB</h6>
                    </div>
                </div>

                <div className="ewe">
                    <div className="chu">
                        <h6 className="cuky">Start Rent</h6>
                        <span className="chan">-</span>
                    </div>

                    <div className="reo">
                        <h6 className="oti">Finish Rent</h6>
                        <span className="zuk">-</span>
                    </div>

                    <div className="neo">
                        <h6 className="gia">Created at</h6>
                        <span className="ash">-</span>
                    </div>

                    <div className="uto">
                        <h6 className="nej">Updated at</h6>
                        <span className="kush">-</span>
                    </div>
                </div>
            </div>
        </form>

        <Link to="/dashboard/car">
            <button className="cry">Cancel</button>
        </Link>

        <button onClick={handleClick} className="chi">Save</button>
    </>
  )
}

export default Add