import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import Rating from "./Rating";
import FileCopyIcon from "@material-ui/icons/FileCopyOutlined";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { useDispatch } from "react-redux";
import { addToCart } from "../actions/cartAction";
import { toast } from "react-toastify";

const Product = ({ product }) => {
  const [links, setLinks] = React.useState("");

  useEffect(() => {
    setLinks(`http://mcbee.herokuapp.com/product/${product._id}`);
  }, [product._id]);

  const dispatch = useDispatch();

  return (
    <Card
      className="my-3 p-3 rounded"
      style={{ width: "230px", height: "325px" }}
    >
      <Link to={`/product/${product._id}`}>
        <Card.Img
          src={product.image}
          variant="top"
          style={{ height: "150px" }}
        />
      </Link>

      <Card.Body>
        <Link to={`/product/${product._id}`}>
          <Card.Title as="div" style={{ height: "50px", fontSize: "13px" }}>
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>
      </Card.Body>

      <Card.Text as="div">
        <Rating value={product.rating} text={`${product.numReviews} reviews`} />
      </Card.Text>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Card.Text style={{ fontSize: "15px" }} as="h3">
          <span>&#8358;</span>
          {product.price.toLocaleString("en-US")}.00
        </Card.Text>
        <div>
          <FileCopyIcon
            onClick={() => [
              navigator.clipboard.writeText(`${links}`),
              toast("Link Copied to Clipboard"),
            ]}
            style={{
              width: "17px",
              cursor: "pointer",
              marginTop: "14px",
              marginRight: "10px",
            }}
          />
          <ShoppingCartIcon
            onClick={() => [
              dispatch(addToCart(`${product._id}`, 1)),
              toast("Product Added to Cart"),
            ]}
            style={{
              width: "17px",
              cursor: "pointer",
              marginLeft: "px",
              marginTop: "14px",
            }}
          />
        </div>
      </div>
    </Card>
  );
};

export default Product;
