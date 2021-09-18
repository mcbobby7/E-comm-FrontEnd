import React from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import Rating from "../Rating";
import Box from "@mui/material/Box";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import FileCopyIcon from "@material-ui/icons/FileCopyOutlined";
import SaveIcon from "@material-ui/icons/Save";
import PrintIcon from "@material-ui/icons/Print";
import ShareIcon from "@material-ui/icons/Share";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

const actions = [
  { icon: <FileCopyIcon />, name: "Copy Link" },
  { icon: <ShareIcon />, name: "Share" },
  { icon: <ShoppingCartIcon />, name: "Add to Cart" },
];

const GridCard = ({ propertyProp }) => {
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
