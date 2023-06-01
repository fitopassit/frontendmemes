import { toPng } from "html-to-image";
import React, {useEffect, useRef, useState} from "react";
import {useParams} from "react-router-dom";
import PostService from "../services/PostService";


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


function MemesCreator() {
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

        console.log(node.current)
        toPng(node.current, { cacheBust: false })

            .then((dataUrl) => {
                const link = document.createElement('a')
                link.download = 'my-image-name.png'
                link.href = dataUrl
                link.click()
            })
            .catch((err) => {
                console.log(err)
            })

        // console.log("DATAURL", node.current)
        // toPng(node.current, {cacheBust: true})
        //
        //     .then((dataURL) => {
        //         console.log("DATAURL", node.current)
        //         download(dataURL, "memes.png");
        //     })
        //     .catch((e) => console.log(e));
    }



    // function sendImage() {
    //     toPng(node.current)
    //         .then((dataURL) => {
    //             // отправка
    //         })
    //         .catch(() => console.log("error"));
    // }

    const {id} = useParams();
    const [template, SetTeamplate] = useState({});
    const [loading, Setloading] = useState(true);
    const back = "http://localhost:5000/static/patterns/"
    useEffect(() => {

        const getTemplates = async () => {
            return await PostService.currentTemplates(id);
        }
        getTemplates().then((resp) => {
            SetTeamplate(resp.data)

        }).finally(() => Setloading(false));
    }, []);

    if (loading){
        return (<div>
            loading
        </div>)
    }
    return (
        <div className="container">
            <div className="relative" ref={node} >
                <img
                    src={back + template.img}
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

export default MemesCreator;
