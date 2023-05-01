import React from 'react';
import Template1 from "../assets/img/template/template1.jpg";
import {toPng} from 'html-to-image';
import download from 'downloadjs';
//import data
import {TemplateData} from '../data';

//import use params
import {useParams} from 'react-router-dom';

const MemesCreator = () => {
    const [text, setText] = React.useState("");

    function handleText(event) {
        const newText = event.target.value
        setText(newText)
    }

    const node = React.useRef(null)
    function downloadImage(){
        toPng(node.current)
            .then(dataURL =>{
            download(dataURL,'memes.png')
        })
            .catch(() => console.log("error"))
    }

    const {id} = useParams();
    const template = TemplateData.find(template=>{
        return template.id === parseInt(id);
    });


    return <div className="container mx-auto flex-col flex justify-between items-center">
        <input type="text" placeholder="Type text here" className="input" onChange={handleText}
               value={text}/>
        <div ref={node}>
            <img src={template.img} alt=""/>
            <h1 className="image-text relative bottom-40 text-center">{text}</h1>
        </div>
        <button className="download-button" onClick={downloadImage}>Download Image</button>
    </div>;




};

export default MemesCreator;

