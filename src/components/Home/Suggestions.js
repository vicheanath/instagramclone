import React from 'react'
import styled from 'styled-components'
import { Avata, Follow } from '../style'
import { Link } from 'react-router-dom'
import { colors } from './../../theam'

const data = [1, 21, 31, 23, 12, 31]
export default function Suggestions() {
    return (
        <SuggWrap>
            <SuggHead>
                <p>Suggestions For You</p>
                <Link to="/explore/people/suggested">See All</Link>
            </SuggHead>
            <SuggContent>
                {
                    data.map((ind, id) => {
                        return (
                            <ProfileSugg key={id}>
                                <AvataWrap>
                                    <Avata style={{ background: 'URL(https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500)' }} />
                                </AvataWrap>
                                <TextWrap>
                                    <p>Nath Vichea</p>
                                    <Follow>Follow</Follow>
                                </TextWrap>
                            </ProfileSugg>
                        )
                    })
                }

            </SuggContent>
        </SuggWrap>
    )
}
const AvataWrap = styled.div`
    width:40px;
    height:40px;
    cursor: pointer;
`;
const TextWrap = styled.div`
    width:100%;
    justify-content:space-between;
    display:flex;
    flex-direction:row;
`; 
const ProfileSugg = styled.div`
    padding: 15px 0;
    display: flex;
    flex-direction: row;
    p{
        margin: 7px 15px;
    }

`;
const SuggContent = styled.div`
padding: 15px 0;
`;

const SuggWrap = styled.div`
padding: 0 20px;
`;
const SuggHead = styled.div`
display: flex;
flex - direction: row;
justify - content: space - between;
padding: 0;
p{
    font - weight: bold;
    margin: 0;
    color: ${ colors.border };
}
`;