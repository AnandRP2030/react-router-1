import Footer from "./Footer";
import Navbar from "./Navbar";
import style from "./myStyle.module.css";
import { useState, useEffect } from "react";
import {useContext} from 'react';
import { AuthContext } from "../context/AuthContext";
export default function Menu() {

  const {isLoggedin, login, logout} = useContext(AuthContext);
  

  const [productData, setProductData] = useState([]);

  function btnClicked(){
    alert('Item purchased');
  }

  useEffect(() => {
    const getData = async () => {
      let res = await fetch("https://fakestoreapi.com/products");
      let data = await res.json();
      setProductData(data);
    };

    getData();
  }, []);

 
  return (
    <div>
      <Navbar />
      <h1 style={{textAlign: 'center'}}>Products </h1>
      <div className={style.productContainer}>
        {productData.map((elem, index) => {
          return (
            <div key={elem.id}>
              <img src={elem.image} alt="img" />

              <div className={style.cardText}>
                <h2>
                  {" "}
                  {elem.title.length > 15
                    ? elem.title.substring(0, 15)
                    : elem.title}
                </h2>
                <p>Price: $ {elem.price}</p>
                <p>
                  {" "}
                  {elem.description.length >90
                    ? elem.description.substring(0, 90)+"..."
                    : elem.description}
                </p>
              </div>
              <div className={style.btnDiv}>
                <button onClick={btnClicked} className={style.buyProductBtn}> Buy</button>
              </div>
            </div>
          );
        })}
      </div>
      <Footer />
    </div>
  );
}
