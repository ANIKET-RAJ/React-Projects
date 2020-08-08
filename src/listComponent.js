import React from 'react';
import Button from 'react-bootstrap/Button';

const ListComponent = (props) => {
return  <div><ul>
{props.mylist.map(item => (
  <li key={item.id} item={item.firstname} >{item.firstname} <Button onClick={(e) => props.deleteItem(item.id, e)} variant="danger">Delete</Button> </li>
))}
</ul>
</div>;
    }


  export default ListComponent;