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
import banner9 from "./images/banner9.png";
import banner5 from "./images/banner5.jpg";
import banner7 from "./images/banner7.jpg";
import banner8 from "./images/banner8.jpg";

const HomeScreen = ({ match }) => {
  const keyword = match.params.keyword;

  const pageNumber = match.params.pageNumber || 1;

  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  // const { loading, error, products, page, pages } = productList
  const { loading, error, products } = productList;
  console.log(products);

  useEffect(() => {
    let data = "20210917";
    let newDate =
      data.slice(0, 4) + "/" + data.slice(4, 6) + "/" + data.slice(6, 8);
    console.log(newDate);
    console.log(new Date(newDate));
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
          <Title title="SPORTS" />
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
        <Banner img={banner5} />
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
        <Banner img={banner7} />

        <>
          <Title title="MUSICS" />
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
          <Title title="TOYS" />
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
        <Banner img={banner8} />
        <>
          <Title title="FASHION" />
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
          <Title title="HEALTH" />
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
        <Banner img={banner9} />
        <>
          <Title title="FOOD" />
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
          <Title title="AUTOMOBILE" />
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
