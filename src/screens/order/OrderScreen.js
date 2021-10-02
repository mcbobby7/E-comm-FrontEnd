import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Row, Col, ListGroup, Image, Card, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "../../components/Message";
import Loader from "../../components/dash-loader/loader";
import {
  getOrderDetails,
  deliverOrder,
  payOrder,
} from "../../actions/orderActions";
import Nav from "../../components/nav/nav";
import Footer from "../../components/Footer";
import { PaystackButton } from "react-paystack";
import axios from "axios";

const OrderScreen = ({ match, history }) => {
  const orderId = match.params.id;

  const dispatch = useDispatch();

  const orderDetails = useSelector((state) => state.orderDetails);
  const { order, loading, error } = orderDetails;

  const orderPay = useSelector((state) => state.orderPay);
  const { loading: loadingPay } = orderPay;

  const orderDeliver = useSelector((state) => state.orderDeliver);
  const { loading: loadingDeliver } = orderDeliver;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const publicKey = "pk_test_8b4f5f4c86233ec5ab09207fe044969824ad211a";

  const verifyPayment = (data) => {
    const headers = {
      Authorization: "Bearer sk_test_8f5a0e4557737eea4edf050e7fd79e9bcfc72416",
    };
    axios
      .get(`https://api.paystack.co/transaction/verify/${data.trxref}`, {
        headers,
      })
      .then((response) => {
        console.log(response.data);
        if (response.data.status) {
          dispatch(payOrder(orderId));
        }
      });
  };
  let componentProps = {
    email: "",
    amount: "",
    metadata: {
      name: "",
      phone: "",
    },
    publicKey,
    text: "Pay Now",
    onSuccess: (data) => verifyPayment(data),
    onClose: () => console.log(""),
  };
  //   message: "Approved"
  // reference: "T353535159833405"
  // status: "success"
  // trans: "1363215266"
  // transaction: "1363215266"
  // trxref: "T353535159833405"

  if (!loading) {
    // Calculate prices
    console.log(order);
    componentProps.email = order.user.email;
    componentProps.metadata.name = order.user.email;
    componentProps.amount = order.totalPrice * 100;
    const addDecimals = (num) => {
      return Math.round(num * 100) / 100;
    };

    order.itemsPrice = addDecimals(
      order.orderItems.reduce((acc, item) => acc + item.price * item.qty, 0)
    );
  }

  useEffect(() => {
    if (!userInfo) {
      history.push("/login");
    }
    dispatch(getOrderDetails(orderId));
  }, [dispatch, history, orderId, userInfo]);

  const deliverHandler = () => {
    dispatch(deliverOrder(order));
  };

  return loading ? (
    <>
      <Nav />
      <Loader style={{ zIndex: "1000" }} />
    </>
  ) : error ? (
    <>
      <Nav />
      <Message variant="danger">{error}</Message>
    </>
  ) : (
    <>
      <Nav />
      <div style={{ padding: "5%" }}>
        <h1>Order {order._id}</h1>
        <Row>
          <Col md={8}>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h2>Shipping</h2>
                <p>
                  <strong>Name: </strong> {order.user.name}
                </p>
                <p>
                  <strong>Email: </strong>{" "}
                  <a href={`mailto:${order.user.email}`}>{order.user.email}</a>
                </p>
                <p>
                  <strong>Address:</strong>
                  {order.shippingAddress.address}, {order.shippingAddress.city}{" "}
                  {order.shippingAddress.postalCode},
                  {order.shippingAddress.country}
                </p>
                {order.isDelivered ? (
                  <Message variant="success">
                    Delivered on {order.deliveredAt}
                  </Message>
                ) : (
                  <Message variant="danger">Not Delivered</Message>
                )}
              </ListGroup.Item>

              <ListGroup.Item>
                <h2>Payment Methods</h2>
                <p>
                  <strong>Method: </strong>
                  {order.paymentMethod}
                </p>
                {order.isPaid ? (
                  <Message variant="success">Paid on {order.paidAt}</Message>
                ) : (
                  <Message variant="danger">Not Paid</Message>
                )}
              </ListGroup.Item>

              <ListGroup.Item>
                <h2>Order Items</h2>
                {order.orderItems.length === 0 ? (
                  <Message>Order is empty</Message>
                ) : (
                  <ListGroup variant="flush">
                    {order.orderItems.map((item, index) => (
                      <ListGroup.Item key={index}>
                        <Row>
                          <Col md={1}>
                            <Image
                              src={item.image}
                              alt={item.name}
                              fluid
                              rounded
                            />
                          </Col>
                          <Col>
                            <Link to={`/product/${item.product}`}>
                              {item.name}
                            </Link>
                          </Col>
                          <Col md={4}>
                            {item.qty} x <span>&#8358;</span>
                            {item.price.toLocaleString("en-US")}.00 ={" "}
                            <span>&#8358;</span>
                            {(item.qty * item.price).toLocaleString("en-US")}.00
                          </Col>
                        </Row>
                      </ListGroup.Item>
                    ))}
                  </ListGroup>
                )}
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col md={4}>
            <Card>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <h2>Order Summary</h2>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col>Items</Col>
                    <Col>
                      <span>&#8358;</span>
                      {order.itemsPrice.toLocaleString("en-US")}.00
                    </Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col>Shipping</Col>
                    <Col>
                      <span>&#8358;</span>
                      {order.shippingPrice.toLocaleString("en-US")}.00
                    </Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col>Tax</Col>
                    <Col>
                      &#8358;{order.taxPrice.toLocaleString("en-US")}.00
                    </Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col>Total</Col>
                    <Col>
                      <span>&#8358;</span>
                      {order.totalPrice.toLocaleString("en-US")}.00
                    </Col>
                  </Row>
                </ListGroup.Item>
                {!order.isPaid && (
                  <ListGroup.Item>
                    {loadingPay && <Loader />}
                    <Button type="button" className="btn btn-block">
                      Pay
                    </Button>{" "}
                    <PaystackButton
                      className="btn btn-block"
                      style={{ backgroundColor: "black" }}
                      {...componentProps}
                    />
                  </ListGroup.Item>
                )}

                {loadingDeliver && <Loader />}
                {userInfo &&
                  userInfo.isAdmin &&
                  order.isPaid &&
                  !order.isDelivered && (
                    <ListGroup.Item>
                      <Button
                        type="button"
                        className="btn btn-block"
                        onClick={deliverHandler}
                      >
                        Mark As Delivered
                      </Button>
                    </ListGroup.Item>
                  )}
              </ListGroup>
            </Card>
          </Col>
        </Row>
      </div>
      <Footer />
    </>
  );
};

export default OrderScreen;
