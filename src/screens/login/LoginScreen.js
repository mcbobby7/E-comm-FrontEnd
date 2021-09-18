import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../actions/userAction";
import { makeStyles } from "@material-ui/core";
import VisibilityIcon from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import { NavLink } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "./style.css";
import Loading from "../../components/loading/loading";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: theme.spacing(2),
    marginTop: "30%",

    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "300px",
    },
    "& .MuiButtonBase-root": {
      margin: theme.spacing(2),
    },
  },

  input: {
    padding: "25px 250px",
  },
}));

const LoginScreen = ({ location, history }) => {
  // const History = useHistory();

  const classes = useStyles();
  // create state variables for each input
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mode, setMode] = useState("password");

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;

  const redirect = location.search ? location.search.split("=")[1] : "/";

  useEffect(() => {
    if (userInfo) {
      history.push(redirect);
      toast.success("Login Successfull");
    }
  }, [history, userInfo, redirect, error]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  const handleClick = () => {
    if (mode === "password") {
      setMode("text");
    } else {
      setMode("password");
    }
  };

  return (
    <div className="containers">
      <div className="form">
        <form className={classes.root} onSubmit={submitHandler}>
          <img
            style={{ width: "200px", marginBottom: "20px" }}
            src="assets/images/logoWhite.png"
            alt="logo"
          />
          <h2>Login</h2>
          <label className="label">
            Email
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input"
              placeholder="Email"
            />
          </label>
          <label className="label">
            Password
            <input
              type={mode}
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input"
              placeholder="Password"
            />
            {mode === "password" ? (
              <VisibilityIcon className="icon" onClick={handleClick} />
            ) : (
              <VisibilityOff className="icon" onClick={handleClick} />
            )}
          </label>
          {}
          <ToastContainer />
          <div className="write">
            <NavLink to="/auth/forgot-password" className="link">
              Forgot password?
            </NavLink>
            <NavLink to="/auth/signup" className="link">
              Sign up
            </NavLink>
          </div>

          <div>
            <button className="button" disabled={loading}>
              {loading ? <Loading color="#3a8bcd" /> : "Submit"}
            </button>
          </div>
        </form>
      </div>
      <div className="img"></div>
    </div>
    // <FormContainer>
    //   <h1>Sign In</h1>
    //   {error && <Message variant="danger">{error}</Message>}
    //   {loading && <Loader />}
    //   <Form onSubmit={submitHandler}>
    //     <Form.Group controlId="email">
    //       <Form.Label>Email Address</Form.Label>
    //       <Form.Control
    //         type="email"
    //         placeholder="Enter email"
    //         value={email}
    //         onChange={(e) => setEmail(e.target.value)}
    //       ></Form.Control>
    //     </Form.Group>

    //     <Form.Group controlId="password">
    //       <Form.Label>Password</Form.Label>
    //       <Form.Control
    //         type="password"
    //         placeholder="Enter password"
    //         value={password}
    //         onChange={(e) => setPassword(e.target.value)}
    //       ></Form.Control>
    //     </Form.Group>

    //     <Button type="submit" variant="primary">
    //       Sign in
    //     </Button>
    //   </Form>

    //   <Row className="py-3">
    //     <Col>
    //       New Customer?{" "}
    //       <Link to={redirect ? `/register?redirect=${redirect}` : "/register"}>
    //         Register
    //       </Link>
    //     </Col>
    //   </Row>
    // </FormContainer>
  );
};

export default LoginScreen;
