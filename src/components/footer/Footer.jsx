import "./Footer.css"
import { Box, Typography, TableHead, styled } from '@mui/material';

const UpperFooterSubBox = styled(Box)`
    width: 94%;
    margin: 2% 3%;
    display: flex;
`;

const UpperFooterSubLeftChildBox = styled(Box)`
    text-align: left;
    font-size: 12px;
    color: white;
    width: 20%;
    margin: 1%;
    line-height: 2;
`;

const UpperFooterSubLeftTableHead = styled(TableHead)`
    color: #72746e;
`;

const UpperFooterSubLeftBox = styled(Box)`
    display: flex;
    flex-wrap: wrap;
    width: 60%;
    border-right: 1px solid #ffffff2d;
    justify-content: space-evenly;
`;

const UpperFooterSubRightChildBox = styled(Box)`
    text-align: left;
    font-size: 12px;
    color: white;
    width: 40%;
    margin: 1% 5%;
    line-height: 18px;
`;

const UpperFooterSubRightTableHead = styled(TableHead)`
    color: #72746e;
`;

const UpperFooterSubRightBox = styled(Box)`
    display: flex;
    flex-wrap: wrap;
    width: 40%;
    justify-content: space-evenly;
`;

const UpperFooterSubRightText = styled(Typography)`
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-size: 12px;
`;

const HrDivBox = styled(Box)`
    border-bottom: 1px solid #ffffff2d;
    width: 100%;
`;

const LowerFooterSubBox = styled(Box)`
    width: 90%;
    margin: 1% 5%;
`;

const FooterMainBox = styled(Box)`
    width: 100%;
    height: inherit;
    background-color: #172337;
`;

const Tr = styled('tr')`
  &:hover {
    text-decoration: underline;
    cursor: pointer;
}
`;

const Footer = () => {
    return (
        <FooterMainBox>
            <br />
            <UpperFooterSubBox>
                <UpperFooterSubLeftBox>
                    <UpperFooterSubLeftChildBox>
                        <UpperFooterSubLeftTableHead>ABOUT</UpperFooterSubLeftTableHead>
                        <Tr>Contact Us</Tr>
                        <Tr>About us</Tr>
                        <Tr>Careers</Tr>
                        <Tr>Flipkart Stories</Tr>
                        <Tr>Press</Tr>
                        <Tr>Flipkart Wholesale</Tr>
                        <Tr>Corporate</Tr>
                        <Tr>Information</Tr>
                    </UpperFooterSubLeftChildBox>

                    <UpperFooterSubLeftChildBox>
                        <UpperFooterSubLeftTableHead>HELP</UpperFooterSubLeftTableHead>
                        <Tr>Payments</Tr>
                        <Tr>Shipping</Tr>
                        <Tr>Cancellation & Returns</Tr>
                        <Tr>FAQ</Tr>
                        <Tr>Report Infringement</Tr>
                    </UpperFooterSubLeftChildBox>

                    <UpperFooterSubLeftChildBox>
                        <UpperFooterSubLeftTableHead>POLICY</UpperFooterSubLeftTableHead>
                        <Tr>Return Policy</Tr>
                        <Tr>Terms Of Use</Tr>
                        <Tr>Security</Tr>
                        <Tr>Privacy</Tr>
                        <Tr>Sitemap</Tr>
                        <Tr>EPR Complianc</Tr>
                    </UpperFooterSubLeftChildBox>

                    <UpperFooterSubLeftChildBox>
                        <UpperFooterSubLeftTableHead>SOCIAL</UpperFooterSubLeftTableHead>
                        <Tr>Facebook</Tr>
                        <Tr>Twiter</Tr>
                        <Tr>YouTube</Tr>
                    </UpperFooterSubLeftChildBox>

                </UpperFooterSubLeftBox>
                <UpperFooterSubRightBox>
                    <UpperFooterSubRightChildBox>
                        <UpperFooterSubRightTableHead>Mail Us:</UpperFooterSubRightTableHead>
                        <UpperFooterSubRightText>
                            Flipkart Internet Private Limited,<br />
                            Buildings Alyssa, Begonia &<br />
                            Clove Embassy Tech Village,<br />
                            Outer Ring Road, Devarabeesanahalli Village,
                            Bengaluru, 560103,<br />
                            Karnataka, India
                        </UpperFooterSubRightText>
                    </UpperFooterSubRightChildBox>

                    <UpperFooterSubRightChildBox>
                        <UpperFooterSubRightTableHead>Registered Office Address:</UpperFooterSubRightTableHead>
                        <UpperFooterSubRightText>Flipkart Internet Private Limited,<br />
                            Buildings Alyssa, Begonia &<br />
                            Clove Embassy Tech Village,<br />
                            Outer Ring Road, Devarabeesanahalli Village,<br />
                            Bengaluru, 560103,<br />
                            Karnataka, India<br />
                            CIN : U51109KA2012PTC066107<br />
                            Telephone: 044-45614700
                        </UpperFooterSubRightText>
                    </UpperFooterSubRightChildBox>
                </UpperFooterSubRightBox>
            </UpperFooterSubBox>
            <HrDivBox />
            <br />
            <LowerFooterSubBox></LowerFooterSubBox>

        </FooterMainBox>
    )
}

export default Footer;
