import React from 'react';
import "./heroImage.scss"

const HeroImage = (props) => {
    return ( 
        <div className={"container"}>
            <img className={"hero"} src={props.image}></img>
        </div>
     );
}
 
export default HeroImage;