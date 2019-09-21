import React from 'react';
import './list.css';

const List = (props) => {
     return (
         <div className="list">
            <h3 class="hotpink listTitle">{props.title}</h3>
            <ul>
                {props.items.map((item, index) => (
                <li>{item}</li>
                ))}
            </ul>
         </div>
     );
} 

export default List;