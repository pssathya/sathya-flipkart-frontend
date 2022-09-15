import React from 'react';

import { Box, styled } from '@mui/material';

import NavBar from "./NavBar";
import Banner  from "./Banner";

const Component = styled(Box)`
    padding: 20px 10px;
    background: #F2F2F2;
`;

const Home = ()=> {
    return (
        <>
            <NavBar/>
            <Component>
                <Banner/>
            </Component>
        </>
    )
}

export default Home;