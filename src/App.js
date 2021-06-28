import React,{ useEffect, useState } from 'react';
import axios from 'axios';
import Country from './Components/Country'
import Pagination from './Components/Pagination'

const App = () => {

  const [data,setData] = useState([]);
  const [currentPage,setCurrentPage] = useState(1);
  const [countPage] = useState(10);
  const lastIndex = currentPage*countPage;
  const firstIndex = lastIndex - countPage;
  const newData = data.slice(firstIndex,lastIndex);
  const [search,setSearch] = useState('');

  useEffect(()=>{
    const get = async() => {
          await axios.get(`https://restcountries.eu/rest/v2/all`)
                .then(res => setData(res.data))
    }

    get();
  },[])

  const click = pageNumber => setCurrentPage(pageNumber);
  
  const searchItem = newData.filter(item=>{
    return ((item.name).toLowerCase()).includes(search.toLowerCase())
  })

   console.log(newData)

  return (
    <React.Fragment>
      <div className="container "> 
        <h1 className="my-4 ms-4 text-primary" >Countries Information</h1>
        <input type="search" className="form-control my-3 w-25" placeholder="Search country..." onChange={(e)=>setSearch(e.target.value)}/>
          <table className="table table-striped table-hover table-bordered text-center w-100">
             <thead>
              <tr>
                <th>#</th>
                <th>Country</th>
                <th>Capital</th>
                <th>Phone Code</th>
                <th>Level Domain</th>
                <th>Located</th>
                <th>Square (km2)</th>
                <th>Flag</th>
              </tr>
             </thead>
             <tbody className="">
               {
                 searchItem.map((value,index)=>(
                   <Country data={value} index={index}/>
                 ))
               }
             </tbody>
          </table>
            <Pagination totalCountry={data.length} countPage={countPage} click={click}/>
      </div>
    </React.Fragment>
  );
};

export default App;