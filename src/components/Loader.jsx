import React from "react";
import { Audio } from "react-loader-spinner";

const Loader = () => {
  return (
    <div style={styles.loadContainer}>
      <Audio
        height="80"
        width="80"
        radius="9"
        color="green"
        ariaLabel="three-dots-loading"
      />
    </div>
  );
};

const styles = {
  loadContainer: {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    zIndex: "9999",
  },
};

export default Loader;
