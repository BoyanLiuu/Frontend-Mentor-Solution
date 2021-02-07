import React, { useState, useEffect, createContext } from 'react';

export const ResizeContext = createContext();

const ResizeContextProvider = (props) => {
    const [viewport, setViewport] = useState(() => {
        if (window.innerWidth >= 1440) return 'desktop';
        else if (window.innerWidth >= 768 && window.innerWidth < 1440)
            return 'tablet';
        else return 'mobile';
    });

    useEffect(() => {
        function updateSize() {
            let view = '';
            if (window.innerWidth >= 1440) view = 'desktop';
            else if (window.innerWidth >= 768 && window.innerWidth < 1440)
                view = 'tablet';
            else view = 'mobile';
            setViewport(view);
        }
        window.addEventListener('resize', updateSize);
        return () => window.removeEventListener('resize', updateSize);
    });

    return (
        <ResizeContext.Provider value={{ viewport }}>
            {props.children}
        </ResizeContext.Provider>
    );
};

export default ResizeContextProvider;
