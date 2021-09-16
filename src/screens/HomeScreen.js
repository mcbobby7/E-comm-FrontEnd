import React, { useEffect } from "react";
// import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message";
import Meta from "../components/Meta";
import { listProducts } from "../actions/productActions";
import ImageSlider from "../components/slider/slider";
import LoadingList from "../components/slider/loadingList";
import Banner from "../components/banner/banner";
import Title from "../components/title/title";
import Header from "../components/Header";
import Footer from "../components/Footer";

const HomeScreen = ({ match }) => {
  const keyword = match.params.keyword;

  const pageNumber = match.params.pageNumber || 1;

  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  // const { loading, error, products, page, pages } = productList
  const { loading, error, products } = productList;

  useEffect(() => {
    dispatch(listProducts(keyword, pageNumber));
  }, [dispatch, keyword, pageNumber]);

  return (
    <>
      <Header />
      <Meta />
      <div style={{ padding: "5%" }}>
        <>
          <Title title="LATEST PRODUCTS" />
          {loading ? (
            <LoadingList />
          ) : error ? (
            <Message variant="danger">{error}</Message>
          ) : (
            <ImageSlider properties={products} />
          )}
        </>
        <>
          <Title title="FEATURED PRODUCTS" />
          {loading ? (
            <LoadingList />
          ) : error ? (
            <Message variant="danger">{error}</Message>
          ) : (
            <ImageSlider properties={products} />
          )}
        </>
        <Banner img="assets/images/banner5.jpg" />
        <>
          <Title title="TOP SELLING ITEMS" />
          {loading ? (
            <LoadingList />
          ) : error ? (
            <Message variant="danger">{error}</Message>
          ) : (
            <ImageSlider properties={products} />
          )}
        </>
        <>
          <Title title="ELETRONICS" />
          {loading ? (
            <LoadingList />
          ) : error ? (
            <Message variant="danger">{error}</Message>
          ) : (
            <ImageSlider properties={products} />
          )}
        </>
        <Banner img="assets/images/banner7.jpg" />

        <>
          <Title title="WEARS" />
          {loading ? (
            <LoadingList />
          ) : error ? (
            <Message variant="danger">{error}</Message>
          ) : (
            <ImageSlider properties={products} />
          )}
        </>
      </div>
      <Footer />
    </>
  );
};

export default HomeScreen;
