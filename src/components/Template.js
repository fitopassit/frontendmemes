import React from 'react';


// import icons

const Template = ({temp}) => {
    const {name, hashtag, id, img} = temp;
    return <div className='bg-white shadow-1 p-5 rounded-lg
    w-full max-w-[352px] mx-auto cursor-pointer
    hover:shadow-2xl transition'>
        <img className='mb-8' src={img} alt=""/>
        <div className='text-lg font-semibold max-w-[260px]'>{hashtag.map((item, index) => ((index ? ', ': '') + item))}</div>
    </div>;
};

export default Template;
