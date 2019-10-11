import React, {useEffect, useState} from "react";

import {Card} from 'semantic-ui-react';
import styled from "styled-components";


const Background = styled.div`

display: flex;
flex-direction: column;
justify-content: center;
margin: 5%;

`;




export default function PersonCard = () => {

const [starwarInfo, setStarwarInfo] = useState([])

useEffect(()=> {
    axios
    .get ('http https://swapi.co/api/people')
    .then(response => {
        const res = response.data;
        console.log('response', Response.data);
        setStarwar(res);
    });
}, []);

return(

<Background>


    {starwarInfo.map(props => {
        return(
            <Card>
            <h1>Name:</h1>
            <h2>birth Year:</h2>
            <h2>Height: </h2>
            <h2>Weight: </h2>

            </Card>
        )
    })}

</Background>

)

}