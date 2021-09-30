import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { reset_password } from "../../actions/userAction";
import { makeStyles } from "@material-ui/core";
import VisibilityIcon from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import { ToastContainer, toast } from "react-toastify";
import "./style.css";
import Loading from "../../components/loading/loading";
import logo from "../images/logoWhite.png";

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

const Forgot = ({ match }) => {
  // const History = useHistory();

  const classes = useStyles();
  // create state variables for each input
  const [confirmPassword, setConfirmPassword] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");
  const [mode, setMode] = useState("password");

  const dispatch = useDispatch();

  const resetPassword = useSelector((state) => state.resetPassword);
  const { loading } = resetPassword;

  const submitHandler = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      dispatch(reset_password(password, token));
    } else {
      toast.error("Password must match");
    }
  };

  const handleClick = () => {
    if (mode === "password") {
      setMode("text");
    } else {
      setMode("password");
    }
  };
  useEffect(() => {
    setToken(match.params.token);
  }, [match]);

  return (
    <div className="containers">
      <ToastContainer />
      <div className="form">
        <form className={classes.root} onSubmit={submitHandler}>
          <img
            style={{ width: "200px", marginBottom: "20px" }}
            src={logo}
            alt="logo"
          />
          <h2>Reset Password</h2>
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
          <label className="label">
            Confirm Password
            <input
              type={mode}
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="input"
              placeholder="Confirm Password"
            />
            {mode === "password" ? (
              <VisibilityIcon className="icon" onClick={handleClick} />
            ) : (
              <VisibilityOff className="icon" onClick={handleClick} />
            )}
          </label>
          {}
          <div>
            <button className="button" disabled={loading}>
              {loading ? <Loading color="#3a8bcd" /> : "Submit"}
            </button>
          </div>
        </form>
      </div>
      <div className="img"></div>
    </div>
  );
};

export default Forgot;
