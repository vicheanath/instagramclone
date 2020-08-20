import React from 'react'
import styled from 'styled-components'
import { Container, Row, Col } from 'styled-bootstrap-grid';
import { colors } from './../theam'
import { RiHomeFill } from "react-icons/ri";
import { FiSend } from "react-icons/fi";
import { AiOutlineCompass } from "react-icons/ai";
import { Avata } from './style'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <Container fluid>
            <WrappHeader>
                <Container>
                    <Row>
                        <Col md={4} sm={3} >
                            <img src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" />
                        </Col>
                        <Col md={4} sm={3} >
                            <input type='text' placeholder='Search' />
                        </Col>
                        <Col md={4} sm={6} >
                            <IconWrapp>
                                <Link to='/'>
                                    <RiHomeFill />
                                </Link>
                                <Link to='/direct/inbox'>
                                    <FiSend />
                                </Link>
                                <Link to='/explore'>
                                    <AiOutlineCompass />
                                </Link>

                                <AvataWrap>
                                    <Avata style={{ background: 'URL(https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500)' }} />
                                </AvataWrap>
                            </IconWrapp>
                        </Col>
                    </Row>
                </Container>
            </WrappHeader>
        </Container>
    )
}

export default Header;

const AvataWrap = styled.div`
    width:33px;
    height:33px;
    margin-left:15px;
    cursor: pointer;
`;
const IconWrapp = styled.div`
display:flex;
flex-direction:row;
justify-content:flex-end;
padding:5px;
svg{
    height:33px;
    width:33px;
    margin-left:15px;
    cursor: pointer;
}
`;

const WrappHeader = styled.header`
    height:50px;
    background: ${colors.write};
    border: 1px solid ${colors.border};
    img{
        margin:10px 0;
    }
    input{
        margin:10px 0; 
        outline:none;
        border: 1px solid ${colors.border};
        border-radius:5px;
        padding: 5px 10px;
    }
`;