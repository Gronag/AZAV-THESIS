import { useState } from 'react';
import others from '../Components/Others.json'
import sheeps from '../Components/Sheeps.json'
import "./Animals.css";

// const CheckBox = () => {
//   const [permission, setPermission] = useState({
//     all: false,
//     sheeps: false,
//     others: false,
//     endagered: false,
//   })
//   return (
//   );
// };

export const Animals = () => {
  const data = sheeps.Sheep;
  const data2 = others.Other;
  

  return (
    <div>
      <div>
        <div className='check-box'>
        <div className="check-box-child">
          <input type="checkbox" name="All" id="all" />
          <label>All</label>
        </div>
        <div className="check-box-child">
          <input type="checkbox" name="Sheeps" id="sheeps" />
          <label>Sheeps</label>
        </div>
        <div className="check-box-child">
          <input type="checkbox" name="Others" id="others" />
          <label>Others</label>
        </div>
        <div className="check-box-child">
          <input type="checkbox" name="Endagered" id="endagered" />
          <label>Endagered</label>
        </div>
      </div>
        {/* <CheckBox /> */}
      </div>
      <h1>Animals</h1>
      <div className='Card-Box'>
        {data.map((post) => (
          <div className="card" key={post.id}>
            <img src={post.img} alt="" className='Card-Img'/>
              <li><h3 className="title">{post.breed}</h3></li>
              <li><p>{post.stapleLength} cm</p></li>
              <li><p>diameter {post.diameter} µm</p></li>
              <li><p>{post.endagered}</p></li>
          </div>
        ))}
        {data2.map((post2) => (
          <div className="card" key={post2.id}>
            <img src={post2.img} alt="" className='Card-Img'/>
              <li><h3 className="title">{post2.animal}</h3></li>
              <li><p>{post2.stapleLength} cm</p></li>
              <li><p>{post2.diameter} µm</p></li>
              <li><p>{post2.endagered}</p></li>
        </div>
        ))}
      </div>    
    </div>
  );
};
