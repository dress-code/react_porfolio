import React from 'react';
import './list.css';

const List = (props) => {
     return (
         <div className="list">
            <h3 className="hotpink listTitle">{props.title}</h3>
            <ul>
                {props.items.map((item, index) => (
                <li key={index}>{item}</li>
                ))}
            </ul>
         </div>
     );
} 

export default List;