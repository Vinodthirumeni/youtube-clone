import React,{useState} from "react";
import "./VideoRow.css";
import YouTube from "react-youtube";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";

function VideoRow({
  views,
  subs,
  description,
  timestamp,
  channel,
  title,
  image,
  videoId,
}) {
  const [trailerUrl, setTrailerUrl] = useState("");

  const opts = {
    playerVars: {
      autoplay: 1,
    },
  };

  const useStyles = makeStyles((theme) => ({
    modal: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    paper: {
      height: "390",
      width: "640",
      padding: theme.spacing(2, 4, 3),
    },
  }));

  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleOpen = (videoId) => {
    setOpen(true);
    if (videoId) {
      setTrailerUrl(videoId);
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Modal
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 50,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
          </div>
        </Fade>
      </Modal>
      <div className="videoRow" onClick={() => handleOpen(videoId)}>
        <img src={image} alt="" />
        <div className="videoRow__text">
          <h3>{title}</h3>
          <p className="videoRow__headline">
            {channel} .
            <span className="videoRow__subs">
              <span className="videoRow__subsNumber">{subs}</span>
            </span>
            Subscribers {views} views . {timestamp}
          </p>
          <p className="videoRow__description">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default VideoRow;
