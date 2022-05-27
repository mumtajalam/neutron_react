import React, { createContext, useState } from 'react';

const DataAppContext = createContext();

const DataApp = (props) => {
    const [isLoggedIn, setLogin] = useState(true);
    const [userName, setUserName] = useState('Newton School');
    return(
        <>
            <DataAppContext.Provider value={{isLoggedIn, setLogin, userName, setUserName}}>
                {props.children}
            </DataAppContext.Provider>
        </>
    );
}

export default DataApp;
export {DataAppContext};