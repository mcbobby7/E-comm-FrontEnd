import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { Box } from "./style";
import error1 from "./error.gif";
import error2 from "./error2.svg";
import success1 from "./success.gif";
import success2 from "./success2.svg";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    outline: "none",
  },
}));

export default function TransitionsModal({ message, error }) {
  const classes = useStyles();
  const classNamees = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };
  useEffect(() => {
    setOpen(true);
  }, []);

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classNamees.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <Box>
              <div className="box paper">
                {!error && (
                  <img className="icns" src={success1} alt="success" />
                )}
                {error && <img className="icns" src={error1} alt="error" />}

                <div className="image">
                  {!error && (
                    <img className="err" src={success2} alt="success" />
                  )}
                  {error && <img className="err" src={error2} alt="error" />}
                </div>
                <div className="error">{message}</div>
              </div>
            </Box>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
