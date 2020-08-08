import React from 'react';

const ValidationComponent = (props) => {
    var lengt = props.lengt;
    var msg = "";
    if(lengt<5){
        msg = "too short paragraph, make it atleast 5 character long"
    }
    else{
        msg = "okay"
    }


return <p>{msg}</p> ;
    }


  export default ValidationComponent;