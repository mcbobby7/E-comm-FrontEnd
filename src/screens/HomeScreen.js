import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Meta from "../components/Meta";
import { listProducts } from "../actions/productActions";
import ImageSlider from "../components/slider/slider";
import LoadingList from "../components/slider/loadingList";
import Banner from "../components/banner/banner";
import Title from "../components/title/title";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PopUp from "../components/popUpMessage/popup";
import { ToastContainer } from "react-toastify";

const HomeScreen = ({ match }) => {
  const keyword = match.params.keyword;

  const pageNumber = match.params.pageNumber || 1;

  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  // const { loading, error, products, page, pages } = productList
  const { loading, error, products } = productList;
  console.log(products);

  useEffect(() => {
    dispatch(listProducts(keyword, pageNumber));
  }, [dispatch, keyword, pageNumber]);

  return (
    <>
      <Header />
      <Meta />
      <ToastContainer />
      <div style={{ padding: "5%" }}>
        <>
          <Title title="LATEST PRODUCTS" />
          {loading ? (
            <LoadingList />
          ) : error ? (
            <>
              <LoadingList />
              <PopUp message={error} error={true} />
            </>
          ) : (
            <ImageSlider properties={products} />
          )}
        </>
        <>
          <Title title="FEATURED PRODUCTS" />
          {loading ? (
            <LoadingList />
          ) : error ? (
            <>
              <LoadingList />
            </>
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
            <>
              <LoadingList />
            </>
          ) : (
            <ImageSlider properties={products} />
          )}
        </>
        <>
          <Title title="ELETRONICS" />
          {loading ? (
            <LoadingList />
          ) : error ? (
            <>
              <LoadingList />
            </>
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
            <>
              <LoadingList />
            </>
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
