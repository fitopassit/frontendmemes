import {toPng} from "html-to-image";
import download from "downloadjs";
import React from 'react';

function TextArea({onClick, style, value, onChange}) {
    return (
        <textarea
            onClick={onClick}
            style={style}
            value={value}
            onChange={onChange} // adding onChange
            placeholder="Click to add text"
        />
    );
}

function ImageWithText() {
    const [textAreas, setTextAreas] = React.useState({});


    function handleImageClick(e) {
        const x = e.nativeEvent.offsetX;
        const y = e.nativeEvent.offsetY;
        const newArea = {
            position: 'absolute',
            left: x + 'px',
            top: y + 'px',
            value: textAreas.value ? textAreas.value : "", // adding value property
        };
        setTextAreas(newArea);
    }

    function handleTextChange(e) { // adding index
        setTextAreas({...textAreas, value: e.target.value});
    }

    const node = document.getElementById("image-download")

    function downloadImage() {
        toPng(node)
            .then(dataURL => {
                download(dataURL, 'memes.png')
            })
            .catch(() => console.log("error"))
    }

    return (
        <div className="container">
            <div className="image-wrapper" id="image-download">
                <img
                    src="https://placekitten.com/600/400"
                    alt="Click to add text"
                    onClick={handleImageClick}
                />
                {textAreas && (
                    <TextArea
                        style={textAreas}
                        value={textAreas.value}
                        onChange={(e) => handleTextChange(e)} // pass index to handler
                    />
                )}
            </div>

            <div>
                <button className="download-button" onClick={downloadImage}>Download Image</button>
            </div>
        </div>

    );
}

export default ImageWithText;