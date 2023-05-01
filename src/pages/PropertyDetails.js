import React, {useState} from 'react';
//import data
import {TemplateData} from '../data';

//import use params
import {useParams} from 'react-router-dom';

//import link
import { Link } from 'react-router-dom';
import {MdFavorite,MdOutlineFavoriteBorder} from "react-icons/md";
const PropertyDetails = () => {
  const {id} = useParams();
  const template = TemplateData.find(template=>{
    return template.id === parseInt(id);
  });
  const [buttonText, setButtonText] = useState(<MdOutlineFavoriteBorder/>);
  const handleClick = () => {
    console.log(buttonText.type.name==='MdOutlineFavoriteBorder')
    buttonText.type.name==='MdOutlineFavoriteBorder' ? setButtonText(<MdFavorite />): setButtonText(<MdOutlineFavoriteBorder/>)
  };
  return <section className='container mx-auto min-h-[800px] mb-14'>
    <div>
      <div className='flex flex-col lg:flex-col lg: items-center lg: justify-between'>
        <h1 className='text-2xl'>{template.name}
          <button onClick={handleClick}>{buttonText}</button>
        </h1>

        <img src={template.img} alt=''/>
        <h2 className='text-lg mb-4 font-semibold'>{template.hashtag.map((item, index) => ((index ? ', ': '') + item))}</h2>
        <div className='text-center'>
          <Link to={`/memescreator/${template.id}`}>Создать мем</Link>
        </div>
      </div>
    </div>
  </section>;
};

export default PropertyDetails;
