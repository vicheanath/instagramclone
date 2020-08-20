import React from 'react'
import { Row, Col } from 'styled-bootstrap-grid';
import styled from 'styled-components'
import { colors } from '../../theam'
import { Avata } from '../style'
import Profile from './Profile'
import Suggestions from './Suggestions'

const data = [1, 3, 234, 12, 34, 12, 34, 123, 4, 231,]

export default function Home() {
    return (
        <Row>
            <Col md={8}>
                <StoryWrap>
                    {data.map((ind, id) => {
                        return (
                            <Storys key={id}>
                                <Gcolor>
                                    <Story style={{ background: 'URL(https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500)' }} />
                                </Gcolor>
                                <p>Vichea</p>
                            </Storys>
                        )
                    })}
                </StoryWrap>
            </Col>
            <Col md={4}>
                <Profile />
                <Suggestions />
            </Col>
        </Row>
    )
}


const Gcolor = styled.div`
    padding:3px 3px 3px 3px;
    border-radius:100%;
    background: radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%);
`;
const Story = styled.div`
    width :60px;
    height:60px;
    border-radius:100%;
    background: #333;
    background-position:center !important;
    background-repeat:no-repeat !important;
    background-size:cover !important;
    border:3px solid ${colors.write}
    
`;
const Storys = styled.div`
    text-align:center;
    margin: 0 10px;
`;
const StoryWrap = styled.div`
    overflow-x:auto;
    display:flex;
    padding:15px;
    margin:20px 0;
    border:1px solid ${colors.border};
    border-radius:3px;
    ::-webkit-scrollbar {
    display: none;
}
`;