import React,  { useEffect } from 'react';

import { Box, styled } from '@mui/material';

import NavBar from "./NavBar";
import Banner  from "./Banner";

import { useSelector, useDispatch } from 'react-redux'; // hooks
import { getProducts as listProducts } from '../../redux/actions/productActions';

const Component = styled(Box)`
    padding: 20px 10px;
    background: #F2F2F2;
`;

const Home = ()=> {

    const getProducts = useSelector(state => state.getProducts);
    const { products, error } = getProducts;

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(listProducts())
    }, [dispatch])

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