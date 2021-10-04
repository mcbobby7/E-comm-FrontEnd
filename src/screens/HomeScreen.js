import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Meta from "../components/Meta";
import axios from "axios";
import { listCatProducts } from "../actions/productActions";
import ImageSlider from "../components/slider/slider";
import LoadingList from "../components/slider/loadingList";
import Banner from "../components/banner/banner";
import Title from "../components/title/title";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PopUp from "../components/popUpMessage/popup";
import { ToastContainer } from "react-toastify";
import banner9 from "./images/banner10.jpg";
import banner5 from "./images/banner12.jpg";
import banner7 from "./images/banner7.jpg";
import banner8 from "./images/banner8.jpg";
import Axios from "axios";

const HomeScreen = ({ match }) => {
  const keyword = match.params.keyword;

  const pageNumber = match.params.pageNumber || 1;

  const dispatch = useDispatch();

  // const productList = useSelector((state) => state.productCatList);
  // const { loading, error, products, page, pages } = productList
  const [latest, setLatest] = useState([]);
  const [sports, setSports] = useState([]);
  const [Top, setTop] = useState([]);
  const [Musics, setMusics] = useState([]);
  const [Toys, setToys] = useState([]);
  const [Food, setFood] = useState([]);
  const [Automobile, setAutomobile] = useState([]);
  const [Health, setHealth] = useState([]);
  const [Fashion, setFashion] = useState([]);
  const [Electronics, setElectronics] = useState([]);
  const [latestLoading, setLatestLoading] = useState(true);
  const [sportsloading, setSportsloading] = useState(true);
  const [Toploading, setToploading] = useState(true);
  const [Toysloading, setToysloading] = useState(true);
  const [Foodloading, setFoodloading] = useState(true);
  const [Automobileloading, setAutomobileloading] = useState(true);
  const [Healthloading, setHealthloading] = useState(true);
  const [Fashionloading, setFashionloading] = useState(true);
  const [Electronicsloading, setElectronicsloading] = useState(true);
  const [Musicsloading, setMusicsloading] = useState(true);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState(true);

  useEffect(() => {
    axios.get("/api/products/categories/Latest").then((response) => {
      console.log(response);
      if (!response.data.hasError) {
        setLatest(response.data.products);
        setLatestLoading(false);
      } else {
        setError(true);
        setErrorMessage("Error loading data please refresh page.");
      }
    });
    axios.get("/api/products/categories/Sports").then((response) => {
      if (!response.data.hasError) {
        setSports(response.data.products);
        setSportsloading(false);
      }
    });
    axios.get("/api/products/categories/Top").then((response) => {
      if (!response.data.hasError) {
        setTop(response.data.products);
        setToploading(false);
      }
    });
    axios.get("/api/products/categories/Electronics").then((response) => {
      if (!response.data.hasError) {
        setElectronics(response.data.products);
        setElectronicsloading(false);
      }
    });
    axios.get("/api/products/categories/Musics").then((response) => {
      if (!response.data.hasError) {
        setMusics(response.data.products);
        setMusicsloading(false);
      }
    });
    axios.get("/api/products/categories/Toys").then((response) => {
      if (!response.data.hasError) {
        setToys(response.data.products);
        setToysloading(false);
      }
    });
    axios.get("/api/products/categories/Fashion").then((response) => {
      if (!response.data.hasError) {
        setFashion(response.data.products);
        setFashionloading(false);
      }
    });
    axios.get("/api/products/categories/Health").then((response) => {
      if (!response.data.hasError) {
        setHealth(response.data.products);
        setHealthloading(false);
      }
    });
    axios.get("/api/products/categories/Food").then((response) => {
      if (!response.data.hasError) {
        setFood(response.data.products);
        setFoodloading(false);
      }
    });
    axios.get("/api/products/categories/Automobile").then((response) => {
      if (!response.data.hasError) {
        setAutomobile(response.data.products);
        setAutomobileloading(false);
      }
    });
  }, []);

  return (
    <>
      <Header />
      <Meta />
      <ToastContainer />
      <div style={{ padding: "5%" }}>
        <>
          <Title title="LATEST PRODUCTS" />
          {latestLoading ? (
            <LoadingList />
          ) : error ? (
            <>
              <LoadingList />
              <PopUp message={errorMessage} error={true} />
            </>
          ) : (
            <ImageSlider properties={latest} />
          )}
        </>
        <>
          <Title title="SPORTS" />
          {sportsloading ? (
            <LoadingList />
          ) : (
            <ImageSlider properties={sports} />
          )}
        </>
        <Banner img={banner5} />
        <>
          <Title title="TOP SELLING ITEMS" />
          {Toploading ? <LoadingList /> : <ImageSlider properties={Top} />}
        </>
        <>
          <Title title="ELECTRONICS" />
          {Electronicsloading ? (
            <LoadingList />
          ) : (
            <ImageSlider properties={Electronics} />
          )}
        </>
        <Banner img={banner7} />

        <>
          <Title title="MUSICS" />
          {Musicsloading ? (
            <LoadingList />
          ) : (
            <ImageSlider properties={Musics} />
          )}
        </>
        <>
          <Title title="TOYS" />
          {Toysloading ? <LoadingList /> : <ImageSlider properties={Toys} />}
        </>
        <Banner img={banner8} />
        <>
          <Title title="FASHION" />
          {Fashionloading ? (
            <LoadingList />
          ) : (
            <ImageSlider properties={Fashion} />
          )}
        </>
        <>
          <Title title="HEALTH" />
          {Healthloading ? (
            <LoadingList />
          ) : (
            <ImageSlider properties={Health} />
          )}
        </>
        <Banner img={banner9} />
        <>
          <Title title="FOOD" />
          {Foodloading ? <LoadingList /> : <ImageSlider properties={Food} />}
        </>
        <>
          <Title title="AUTOMOBILE" />
          {Automobileloading ? (
            <LoadingList />
          ) : (
            <ImageSlider properties={Automobile} />
          )}
        </>
      </div>
      <Footer />
    </>
  );
};

export default HomeScreen;
