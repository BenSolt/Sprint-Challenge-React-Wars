import React, {useEffect, useState} from "react";

import PersonCard from './PersonCard';
import styled from "styled-components";

const Background = styled.div`
 display: flex;
 justify-content: center;
 background: lightgray;
 width: 400px;
`;

const Cardholder = () => {

    return (

    <Background>
        <PersonCard/>
    </Background>
    )
}
 export default Cardholder;