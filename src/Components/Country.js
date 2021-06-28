import React, { useState } from 'react';


const Country = ({data,index}) => {

    return (
        <tr>
            <td>{index+1}</td>    
            <td>{data.name}</td>    
            <td>{data.capital}</td>    
            <td>{data.callingCodes}</td>    
            <td>{data.topLevelDomain}</td>    
            <td>{data.subregion}</td>   
            <td>{data.area}</td>   
            <td><img src={data.flag} className="img-fluid" style={{width:25}}/></td>   
        </tr>
    );
};

export default Country;