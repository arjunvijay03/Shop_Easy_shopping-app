import React, { useState, useEffect } from "react";
import FeaturedProducts from "../Components/FeaturedProducts/FeaturedProducts";
import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Nav bar/Navbar";
import ProductScroll from "../Components/ProductScroll/ProductScroll";
import "./Pages.css";

function Home() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 300);
  }, []);
  return (
    <div>
      <Navbar></Navbar>
      <div className="homeBanner">
          <div className="homeBannerTexts">
            <p className="bannerText1">Trade-in-offer</p>
            <p className="bannerText2">Super value deals</p>
            <p className="bannerText3">on all products</p>
            <p className="bannerText4">
              Save more with coupons & save up to 70% off!{" "}
            </p>
            <a href="#homeProductsContainer"><button className="shopNowBtn">Shop Now</button></a>
            
          </div>
        </div>

      <section className="homeContainer" id="homeProductsContainer">
       <FeaturedProducts></FeaturedProducts>

        <ProductScroll category={"smartphones"}></ProductScroll>
        <ProductScroll category={"laptops"}></ProductScroll>
        <ProductScroll category={"fragrances"}></ProductScroll>
        <ProductScroll category={"skincare"}></ProductScroll>
        <ProductScroll category={"groceries"}></ProductScroll>
        <ProductScroll category={"home-decoration"}></ProductScroll>
        <ProductScroll category={"furniture"}></ProductScroll>
        <ProductScroll category={"womens-dresses"}></ProductScroll>
        <ProductScroll category={"womens-shoes"}></ProductScroll>
        <ProductScroll category={"mens-shirts"}></ProductScroll>
        <ProductScroll category={"mens-shoes"}></ProductScroll>
        <ProductScroll category={"mens-watches"}></ProductScroll>
        <ProductScroll category={"womens-watches"}></ProductScroll>
        <ProductScroll category={"womens-bags"}></ProductScroll>
        <ProductScroll category={"womens-jewellery"}></ProductScroll>
        <ProductScroll category={"sunglasses"}></ProductScroll>
        <ProductScroll category={"lighting"}></ProductScroll>
      </section>
      {loading && (
        <div className="loader">
          <img src={require("../Logo/logo.jpg")} width="250" />
          <div className="spinner"></div>
        </div>
      )}
      <Footer></Footer>
    </div>
  );
}

export default Home;
