import { toPng } from "html-to-image";
import download from "downloadjs";
import React, { useRef, useState } from "react";

function TextArea({ onClick, style, value, onChange }) {
  return (
    <textarea
      onClick={onClick}
      style={{ position: "absolute", background: "none", ...style }}
      value={value}
      onChange={onChange}
      placeholder="Click to add text"
    />
  );
}

function ImageWithText() {
  const [textAreaValue, setTextAreaValue] = useState("");
  const [showTextArea, setShowTextArea] = React.useState(false);
  const [textAreaPosition, setTextAreaPosition] = useState({
    left: null,
    top: null,
  });

  const node = useRef(null);
  function handleImageClick(e) {
    setShowTextArea(true);
    const x = e.nativeEvent.offsetX;
    const y = e.nativeEvent.offsetY;
    setTextAreaPosition({ left: x + "px", top: y + "px" });
  }
  function handleTextChange(e) {
    setTextAreaValue(e.target.value);
  }
  function downloadImage() {
    toPng(node)
      .then((dataURL) => {
        download(dataURL, "memes.png");
      })
      .catch(() => console.log("error"));
  }

  return (
    <div className="container">
      <div className="relative" ref={node}>
        <img
          src="https://placekitten.com/600/400"
          alt="Click to add text"
          onClick={handleImageClick}
        />
        {showTextArea && (
          <TextArea
            style={textAreaPosition}
            value={textAreaValue}
            onChange={handleTextChange}
          />
        )}
      </div>

      <div>
        <button className="download-button" onClick={downloadImage}>
          Download Image
        </button>
      </div>
    </div>
  );
}

export default ImageWithText;
