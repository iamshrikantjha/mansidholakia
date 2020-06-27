import React, { useState } from "react";
// import ModalVideo from 'react-modal-video'

const PodcastCard = (props) => {
  // const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* <ModalVideo channel='youtube' isOpen={isOpen} autoplay={true} onClose={() => setIsOpen(false)} videoId='OnRWz_q3TAM' /> */}
      {/* <ModalVideo channel='youtube' isOpen={isOpen} autoplay={true} onClose={() => setIsOpen(false)} videoId='OnRWz_q3TAM' /> */}

      <div className="px-5 py-5">
        <img
          className="img"
          src={props.url}
          style={{
            borderRadius: "25px",
            overflow: "hidden",
          }}
        />
      </div>
    </>
  );
};

export default PodcastCard;
