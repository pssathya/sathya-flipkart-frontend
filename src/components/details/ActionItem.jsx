import { useState, useContext } from 'react';

import { Button, Box, styled } from '@mui/material';
import { ShoppingCart as Cart, FlashOn as Flash } from '@mui/icons-material';

import { useNavigate } from 'react-router-dom';
import { payUsingPaytm } from '../../service/api';
import { post } from '../../utils/paytm';

import { addToCart } from '../../redux/actions/cartActions';
import { useDispatch } from 'react-redux';
import { LoginContext } from '../../context/ContextProvider';
import LoginDialog from '../login/LoginDialog';

const LeftContainer = styled(Box)(({ theme }) => ({
    minWidth: '40%',
    padding: '40px 0 0 80px',
    [theme.breakpoints.down('md')]: {
        padding: '20px 40px'
    }
}))

const Image = styled('img')({
    padding: '15px 20px',
    border: '1px solid #f0f0f0',
    width: '95%'
});

const StyledButton = styled(Button)`
    width: 46%;
    border-radius: 2px;
    height: 50px;
    color: #FFF;
`;

const ActionItem = ({ product }) => {
    const navigate = useNavigate();
    const { id } = product;

    const [quantity] = useState(1);
    const dispatch = useDispatch();
    //let sessionData = sessionStorage.getItem('userInfo') ? sessionStorage.getItem('userInfo').split(',') : [];

    const [open, setOpen] = useState(false);
    const { setAccount } = useContext(LoginContext);

    const openDialog = () => {
        setOpen(true);
    }

    const buyNow = async () => {
        if (sessionStorage.getItem('loginStatus') === 'LoggedIn') {

            let sessionUserInfo = sessionStorage.getItem('userInfo')
                ? sessionStorage.getItem('userInfo').split(',')
                : [];

            let name = sessionUserInfo ? sessionUserInfo[0] : '';
            let email = sessionUserInfo ? sessionUserInfo[1] : '';
            let phone = sessionUserInfo ? sessionUserInfo[2] : '';

            let response = await payUsingPaytm({ amount: product.price.cost, name: name, phone: phone, email: email });

            var information = {
                action: response.paymentUrl,
                params: response.params
            }
            post(information);
        } else {
            openDialog();
        }
    }

    const addItemToCart = () => {
        if (sessionStorage.getItem('loginStatus') === 'LoggedIn') {
            dispatch(addToCart(id, quantity));
            navigate('/cart');
        } else {
            openDialog();
        }
    }

    return (
        <LeftContainer>
            <Image src={product.detailUrl} /><br />
            <StyledButton onClick={() => addItemToCart()} style={{ marginRight: 10, background: '#ff9f00' }} variant="contained"><Cart />Add to Cart</StyledButton>
            <StyledButton onClick={() => buyNow()} style={{ background: '#fb641b' }} variant="contained"><Flash /> Buy Now</StyledButton>
            <LoginDialog open={open} setOpen={setOpen} setAccount={setAccount} />
        </LeftContainer>
    )
}

export default ActionItem;