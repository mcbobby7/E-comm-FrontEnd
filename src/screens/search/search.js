import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Meta from "../../components/Meta";
import { listProducts } from "../../actions/productActions";
import Footer from "../../components/Footer";
import Nav from "../../components/nav/nav";
import { Box } from "./style";
import ViewListIcon from "@material-ui/icons/ViewList";
import AppsIcon from "@material-ui/icons/Apps";
import SortIcon from "@material-ui/icons/Sort";
import Menu from "@material-ui/core/Menu";
import Slider from "@material-ui/core/Slider";
import MenuItem from "@material-ui/core/MenuItem";
import Cards from "../../components/slider/Card";
import GridCard from "../../components/slider/gridCard";
import { Row, Col, ListGroup, Card } from "react-bootstrap";
import { addToCart } from "../../actions/cartAction";
import Paginate from "../../components/Paginate";
import { ToastContainer } from "react-toastify";
import PopUp from "../../components/popUpMessage/popup";
import Loader from "../../components/slider/loading2";

function valuetext(value) {
  return `${value}°C`;
}

const Search = ({ match, location, history }) => {
  const keyword = match.params.keyword;
  const pageNumber = match.params.pageNumber || 1;
  const productId = match.params.id;

  const qty = location.search ? Number(location.search.split("=")[1]) : 1;
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  let { loading, error, products, page, pages } = productList;
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [filteredData, setFilteredData] = React.useState([]);
  const [show, setShow] = React.useState(false);
  const [cartegory, setCartegory] = React.useState("");
  const [value, setValue] = React.useState([10000, 200000]);
  const [layout, setLayout] = React.useState("list");
  const [result, setResult] = React.useState(true);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    if (filteredData.length === 0) {
      setFilteredData(products);
    }
    let data = [];
    for (let i = 0; i < products.length; i++) {
      // if(!)
      if (products[i].price >= value[0] && products[i].price <= value[1]) {
        data.push(products[i]);
        // console.log(data);
      }
    }
    setShow(true);
    setFilteredData([...data]);
    if (filteredData.length === 0) {
      setResult(false);
    } else {
      setResult(true);
    }
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (mode) => {
    console.log(filteredData);
    if (filteredData.length === 0) {
      setFilteredData(products);
    }
    if (mode === "rate") {
      filteredData.sort(function (a, b) {
        return b.rating - a.rating;
      });
    } else if (mode === "popular") {
      filteredData.sort(function (a, b) {
        return b.numReviews - a.numReviews;
      });
    } else if (mode === "new") {
      filteredData.sort(function (a, b) {
        return new Date(a.createdAt) - new Date(b.createdAt);
      });
    } else if (mode === "low") {
      filteredData.sort(function (a, b) {
        return a.price - b.price;
      });
    } else if (mode === "high") {
      filteredData.sort(function (a, b) {
        return b.price - a.price;
      });
    }
    if (filteredData.length === 0) {
      setResult(false);
    } else {
      setResult(true);
    }
    setAnchorEl(null);
  };

  useEffect(() => {
    dispatch(listProducts(keyword, pageNumber));
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, [dispatch, keyword, pageNumber, productId, qty]);

  const setCart = (cart) => {
    setCartegory(cart);
    if (filteredData.length === 0) {
      setFilteredData(products);
    }
    let data = [];
    for (let i = 0; i < products.length; i++) {
      // if(!)
      if (products[i].category === cart) {
        data.push(products[i]);
        // console.log(data);
      }
    }
    setShow(true);
    setFilteredData([...data]);
    console.log(filteredData);
  };

  return (
    <>
      <Meta />
      <Nav />
      <ToastContainer />
      <Box style={{ padding: "5%" }}>
        <Row>
          <Col md={8}>
            <Card>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <div className="shop">Shop online</div>
                    <div className="point">
                      <ViewListIcon
                        className="ics"
                        onClick={() => setLayout("grid")}
                        style={{
                          color: layout === "grid" && "#3A8BCD",
                        }}
                      />
                      <AppsIcon
                        className="ic"
                        onClick={() => setLayout("list")}
                        style={{
                          color: layout === "list" && "#3A8BCD",
                        }}
                      />
                    </div>
                  </div>
                </ListGroup.Item>
                <ListGroup.Item>
                  <div className="point" onClick={handleClick}>
                    Sort By <SortIcon />
                  </div>
                </ListGroup.Item>
                <Menu
                  id="simple-menu"
                  anchorEl={anchorEl}
                  keepMounted
                  open={Boolean(anchorEl)}
                  onClose={() => handleClose("popular")}
                >
                  <MenuItem onClick={() => handleClose("popular")}>
                    Popularity
                  </MenuItem>
                  <MenuItem onClick={() => handleClose("new")}>
                    Newest Arrival
                  </MenuItem>
                  <MenuItem onClick={() => handleClose("low")}>
                    Price: Low to High
                  </MenuItem>
                  <MenuItem onClick={() => handleClose("high")}>
                    Price: High to Low
                  </MenuItem>
                  <MenuItem onClick={() => handleClose("rate")}>
                    Rating
                  </MenuItem>
                </Menu>
                <ListGroup.Item>
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      justifyContent: "space-evenly",
                    }}
                  >
                    {!result && filteredData === [] && (
                      <div>No result found for this filter</div>
                    )}
                    {loading ? (
                      <div
                        style={{
                          display: "flex",
                          flexWrap: "wrap",
                          justifyContent: "space-evenly",
                        }}
                      >
                        <Loader />
                        <Loader />
                        <Loader />
                        <Loader />
                        <Loader />
                        <Loader />
                        <Loader />
                        <Loader />
                        <Loader />
                        <Loader />
                      </div>
                    ) : error ? (
                      <>
                        <div
                          style={{
                            display: "flex",
                            flexWrap: "wrap",
                            justifyContent: "space-evenly",
                          }}
                        >
                          <Loader />
                          <Loader />
                          <Loader />
                          <Loader />
                          <Loader />
                          <Loader />
                        </div>
                        <PopUp message={error} error={true} />
                      </>
                    ) : (
                      <>
                        {layout === "grid" ? (
                          <>
                            {show &&
                              filteredData.map((propertyItem) => (
                                <GridCard
                                  key={propertyItem._id}
                                  propertyProp={propertyItem}
                                />
                              ))}
                            {!show &&
                              products.map((propertyItem) => (
                                <GridCard
                                  key={propertyItem._id}
                                  propertyProp={propertyItem}
                                />
                              ))}
                          </>
                        ) : (
                          <>
                            {" "}
                            {show &&
                              filteredData.map((propertyItem) => (
                                <Cards
                                  key={propertyItem._id}
                                  propertyProp={propertyItem}
                                />
                              ))}
                            {!show &&
                              products.map((propertyItem) => (
                                <Cards
                                  key={propertyItem._id}
                                  propertyProp={propertyItem}
                                />
                              ))}
                          </>
                        )}
                      </>
                    )}
                  </div>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Paginate
                    pages={pages}
                    page={page}
                    keyword={keyword ? keyword : ""}
                  />
                  {/* <FirstPageIcon
                    style={{
                      fontSize: "40px",
                      margin: "0px 10px",
                      cursor: "pointer",
                    }}
                    onClick={Paginate("down")}
                  />
                  <LastPageIcon
                    style={{
                      fontSize: "40px",
                      margin: "0px 10px",
                      cursor: "pointer",
                    }}
                    onClick={Paginate("up")}
                  /> */}
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <div className="shop">Cartegories</div>
                </ListGroup.Item>
                <ListGroup.Item>
                  <ListGroup as="ul">
                    <ListGroup.Item
                      style={{ cursor: "pointer" }}
                      as="li"
                      onClick={() => setCart("Electronics")}
                      active={cartegory === "Electronics"}
                    >
                      Electronics
                    </ListGroup.Item>
                    <ListGroup.Item
                      style={{ cursor: "pointer" }}
                      as="li"
                      onClick={() => setCart("Sports")}
                      active={cartegory === "Sports"}
                    >
                      Sports
                    </ListGroup.Item>
                    <ListGroup.Item
                      style={{ cursor: "pointer" }}
                      as="li"
                      onClick={() => setCart("Music")}
                      active={cartegory === "Music"}
                    >
                      Music
                    </ListGroup.Item>
                    <ListGroup.Item
                      style={{ cursor: "pointer" }}
                      as="li"
                      onClick={() => setCart("Gadges")}
                      active={cartegory === "Gadges"}
                    >
                      Gadges
                    </ListGroup.Item>
                    <ListGroup.Item
                      style={{ cursor: "pointer" }}
                      as="li"
                      onClick={() => setCart("Toys")}
                      active={cartegory === "Toys"}
                    >
                      Toys
                    </ListGroup.Item>
                    <ListGroup.Item
                      style={{ cursor: "pointer" }}
                      as="li"
                      onClick={() => setCart("Fashion")}
                      active={cartegory === "Fashion"}
                    >
                      Fashion
                    </ListGroup.Item>
                    <ListGroup.Item
                      style={{ cursor: "pointer" }}
                      as="li"
                      onClick={() => setCart("Automobile")}
                      active={cartegory === "Automobile"}
                    >
                      Automobile
                    </ListGroup.Item>
                    <ListGroup.Item
                      style={{ cursor: "pointer" }}
                      as="li"
                      onClick={() => setCart("Health")}
                      active={cartegory === "Health"}
                    >
                      Health
                    </ListGroup.Item>
                    <ListGroup.Item
                      style={{ cursor: "pointer" }}
                      as="li"
                      onClick={() => setCart("Food")}
                      active={cartegory === "Food"}
                    >
                      Food
                    </ListGroup.Item>
                  </ListGroup>
                </ListGroup.Item>
                <ListGroup.Item>
                  <div className="shop">Filter by Price</div>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Slider
                    value={value}
                    onChange={handleChange}
                    getAriaValueText={valuetext}
                    max={500000}
                    track={false}
                  />

                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <span>{value[0]}</span>
                    <span>{value[1]}</span>
                  </div>
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
        </Row>
      </Box>
      <Footer />
    </>
  );
};

export default Search;
