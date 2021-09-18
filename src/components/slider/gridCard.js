import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import Rating from "../Rating";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import FileCopyIcon from "@material-ui/icons/FileCopyOutlined";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { useDispatch } from "react-redux";
import { addToCart } from "../../actions/cartAction";
import { toast } from "react-toastify";

const GridCard = ({ propertyProp }) => {
  const [links, setLinks] = React.useState("");

  useEffect(() => {
    setLinks(`http://localhost:3000/product/${propertyProp._id}`);
  }, [propertyProp._id]);

  const dispatch = useDispatch();

  const actions = [
    {
      icon: (
        <FileCopyIcon
          onClick={() => [
            navigator.clipboard.writeText(`${links}`),
            toast("Link Copied to Clipboard"),
          ]}
          style={{ width: "16px" }}
        />
      ),
      name: "Copy Link",
    },
    {
      icon: (
        <ShoppingCartIcon
          onClick={() => [
            dispatch(addToCart(`${propertyProp._id}`, 1)),
            toast("Product Added to Cart"),
          ]}
          style={{ width: "16px" }}
        />
      ),
      name: "Add to Cart",
    },
  ];

  return (
    <Card
      className="my-3 p-3 rounded"
      style={{
        width: "100%",
        height: "235px",
        display: "flex",
        flexDirection: "row",
      }}
    >
      <Link to={`/product/${propertyProp._id}`}>
        <Card.Img
          src={propertyProp.image}
          variant="top"
          style={{ height: "200px" }}
        />
      </Link>

      <Card.Body
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Link to={`/product/${propertyProp._id}`}>
          <Card.Title as="div" style={{ height: "50px", fontSize: "20px" }}>
            <strong>{propertyProp.name}</strong>
          </Card.Title>
        </Link>
        <Card.Text as="div">
          <Rating
            value={propertyProp.rating}
            text={`${propertyProp.numReviews} reviews`}
          />
        </Card.Text>
      </Card.Body>
      <div>
        <div>
          <Card.Text as="h3">
            <span>&#8358;</span>
            {propertyProp.price}
          </Card.Text>
        </div>
        <SpeedDial
          ariaLabel="SpeedDial basic example"
          sx={{ position: "absolute", bottom: 16, right: 16 }}
          icon={<SpeedDialIcon />}
        >
          {actions.map((action) => (
            <SpeedDialAction
              key={action.name}
              icon={action.icon}
              tooltipTitle={action.name}
            />
          ))}
        </SpeedDial>
      </div>
    </Card>
  );
};

export default GridCard;
