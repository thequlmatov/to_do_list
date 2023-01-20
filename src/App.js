import React, { useState } from 'react';
import Input from './Todos/Input';
import {datas} from './Todos/Api';

const App = () => {

  // inputni qiymatlarini olish qismi
  const [api,setApi] = useState(datas);
  const [name,setName] = useState("");
  const [price,setPrice] = useState("");
  const [year,setYear] = useState("");

 // inputdan olingan qiymatlarni API ichiga qo`shib yuborish qismi
  const addDatas = (e) => {
    let newInfo = {
      id:Date.now(),
      name:name,
      price:price,
      year:year
    }

    setApi(  [...api , newInfo] );
    setName('');
    setPrice('');
    setYear('');

    e.preventDefault();
  }

  // tanlangan itemni o`chirib tashlash qismi

      const removeItem = (id , e) => {
        let newData = api.filter( oby => {
          return oby.id !=id
        })
        setApi(newData);

        e.preventDefault();
      }

  return (
    <div className='admin-panel'>
      <form>
      <Input value = {name} onChange={(e) => setName(e.target.value)}  className="form-control mt-3" type="text" placeholder="Product Name" />
      <Input value = {price} onChange={(e) => setPrice(e.target.value)}  className="form-control mt-3" type="text" placeholder="Price" />
      <Input value = {year} onChange={(e) => setYear(e.target.value)}  className="form-control mt-3" type="text" placeholder="Year" />
      <button onClick={addDatas} className='btn btn-success mt-3 w-100'>Add to List</button>

      <table className="table table-hover mt-3">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Brand Name</th>
            <th scope="col">Price</th>
            <th scope="col">Year</th>
            <th scope="col">Deleting</th>
          </tr>
        </thead>


        {
          api.length == 0
          ? <h5>List is empty, please add something</h5>
          : <tbody>
          {
           api.map((arr, index) => {
             return  <tr key ={arr.id}>
             <th scope="row">{index + 1}</th>
             <td>{arr.name}</td>
             <td>{arr.price}</td>
             <td>{arr.year}</td>
             <td>
               <button onClick={() => removeItem(arr.id)} className='btn btn-danger'>Remove</button>
             </td>
           </tr>
           })
          }
         </tbody>
        }


      </table>
      </form>
    </div>
  )
}

export default App