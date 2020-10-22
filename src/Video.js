import React, { useState } from "react";
import "./Video.css";
import Avatar from "@material-ui/core/Avatar";
import YouTube from "react-youtube";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";

function Video({
  image,
  title,
  channel,
  timestamp,
  views,
  channelImage,
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

      <div className="videoCard" onClick={() => handleOpen(videoId)}>
        <img className="videoCard__thumbnail" src={image} alt="" />
        <div className="videoCard__info">
          <Avatar
            className="videoCard__avatar"
            src={channelImage}
            alt={channel}
          />
          <div className="videoCard__text">
            <h4>{title}</h4>
            <p>{channel}</p>
            <p>
              {views} . {timestamp}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Video;
