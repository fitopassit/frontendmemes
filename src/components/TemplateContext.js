import React, {useState, useEffect, createContext} from 'react';

//import data
import {TemplateData} from '../data'


// create context
export const TemplateContext = createContext();
const TemplateContextProvider = ({ children }) => {
    const [template, setTemplate] = useState(TemplateData);
    const [loading, setLoading] = useState(false);

    return <TemplateContext.Provider value={
       {
           template,
           loading,
           setTemplate,
           setLoading,
       }
        }> {children}
    </TemplateContext.Provider>;
};

export default TemplateContextProvider;
