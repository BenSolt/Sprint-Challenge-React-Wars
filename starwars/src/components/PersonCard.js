import React, {useEffect, useState} from "react";



import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';

import styled from "styled-components";
import axios from 'axios';




const Cardstyle = styled.div`
border: 2px solid black;
background: #e8d89f;
 width: 300px;
`;




const PersonCard = () => {

const [starwarInfo, setStarwarInfo] = useState([])

useEffect(() => {
    axios
    .get (`https://swapi.co/api/people/`)
    .then(response => {
        const res = response.data.results;
        console.log('response', response.data.results);
        setStarwarInfo(res);
    });
}, []);

return(


<div>
    
         
    {starwarInfo.map(props => {
        return(

        
        <Cardstyle>
        <Card>
            {/* <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" /> */}
            <CardBody>
                <CardTitle>Name:{props.name}</CardTitle>
                <CardSubtitle>birth Year:{props.birth_year}</CardSubtitle>
                <CardSubtitle>Height:{props.height}</CardSubtitle>
                <CardSubtitle>Weight:{props.mass}</CardSubtitle> 
                {/* <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText> */}
                {/* <Button>Button</Button> */}
            </CardBody>
      </Card>
      </Cardstyle>

        )

        
    })}

</div>


)

}

export default PersonCard