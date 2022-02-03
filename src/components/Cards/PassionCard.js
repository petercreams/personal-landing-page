import "./PassionCard.scss";
import { useState } from "react";

export default function PassionCard({ id, image, name, text }) {
  const [isClicked, setIsClicked] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  var windowWidth;

  return (
    <>
      <div
        className={"item-el"}
        onClick={(e) => {
          setIsClicked(!isClicked);

          console.log(isClicked);
          windowWidth = window.innerWidth;
          console.log("window width: ", windowWidth);
          if (windowWidth <= 600) setIsMobile(true);
          if (windowWidth > 600) setIsMobile(false);
        }}
      >
        <img src={image} alt={name}></img>
        <p id="passion-name">{name}</p>
        {!isClicked ? (
          <p>
            <span id="click">Click</span> to {`to read more >>`}
          </p>
        ) : (
          <p>
            <span id="click">Click</span> {`to hide >>`}
          </p>
        )}
        {isClicked & isMobile ? (
          <div id="text">
            <p>{text}</p>
          </div>
        ) : (
          <div id="text" style={{ display: "none" }}>
            <p>{text}</p>
          </div>
        )}
      </div>

      {isClicked & !isMobile ? (
        <div id="overlay" onClick={() => setIsClicked(false)}>
          <div id="modal">
            <h1>{name}</h1>
            <p>{text}</p>
          </div>
        </div>
      ) : (
        <div id="modal" style={{ display: "none" }}>
          <p>{text}</p>
        </div>
      )}
    </>
  );
}
