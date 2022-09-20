import { useState } from 'react';

import { Typography, Menu, MenuItem, Box, styled } from '@mui/material';
import { PowerSettingsNew } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';


const Image = styled('img')`
  margin-right: 5;
  color: #2874f0
  `;

const Component = styled(Menu)`
    margin-top: 5px;
`;

const MenuItemText = styled(Typography)`
    font-size: 14px;
    margin-left: 20px;
`;

const Profile = ({ account, setAccount }) => {
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);

    const handleMouseEnter = (event) => {
        setOpen(event.currentTarget);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const logout = () => {
        setAccount('');
        sessionStorage.removeItem('ltk');
        sessionStorage.removeItem('userInfo');
        sessionStorage.removeItem('totalPrice');
        sessionStorage.setItem('loginStatus', 'LoggedOut');
    }

    const navigateToOrders = () => {
        navigate('/orders');
    }

    return (
        <>
            <Box onMouseEnter={handleMouseEnter} ><Typography style={{ marginTop: 2 }}>{account}</Typography></Box>
            <Component
                anchorEl={open}
                open={Boolean(open)}
                onClose={handleClose}
            >
                <MenuItem onClick={() => { handleClose(); navigateToOrders(); }}>
                    <Image src="/order-icon.svg" />
                    <MenuItemText>Orders</MenuItemText>
                </MenuItem>
                <MenuItem onClick={() => { handleClose(); logout(); }}>
                    <PowerSettingsNew fontSize='small' color='primary' />
                    <MenuItemText>Logout</MenuItemText>
                </MenuItem>
            </Component>
        </>
    )
}

export default Profile;