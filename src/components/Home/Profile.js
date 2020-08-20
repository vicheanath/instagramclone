import React from 'react'
import styled from 'styled-components'
import { Avata } from '../style'
export default function Profile() {
    return (
        <ProfileWrap>
            <AvataWrap>
                <Avata style={{ background: 'URL(https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500)' }} />
            </AvataWrap>
            <p>Vichea Nath</p>
        </ProfileWrap>
    )
}

const ProfileWrap = styled.div`
    margin :20px 0;
    padding:20px;
    display:flex;
    flex-direction:row;
    p{
        margin-left:20px;
    }
`;
const AvataWrap = styled.div`
    width:60px;
    height:60px;
    cursor: pointer;
`;