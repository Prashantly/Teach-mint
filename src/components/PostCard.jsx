import React, { useState } from "react";
import Modal from "./Modal";

function PostCard({ title, content }) {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  return (
    <>
      <div className="post-card" onClick={toggleModal}>
        <h3 className="post-title">{title}</h3>
        <p className="post-content">{content}</p>
      </div>

      {modal && (
        <Modal toggleModal={toggleModal} title={title} content={content} />
      )}
    </>
  );
}

export default PostCard;
