import React from 'react';

const Pagination = ({totalCountry,countPage,click}) => {
    const pagination = [];

    for(let i = 1; i <=Math.ceil(totalCountry/countPage); i++ ) {
        pagination.push({i:i,completed:false});
    }

    return (
        <ul className='pagination mt-2'>
            {
                pagination.map((value,index)=>(
                    <li className={`page-item `} >
                        <a href={"!#"} className={`page-link `} onClick={()=>click(value.i)}  >{value.i}</a>
                    </li>
                ))
            }
        </ul>
    );
};

export default Pagination;