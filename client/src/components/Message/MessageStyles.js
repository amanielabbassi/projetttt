import styled from "styled-components";

export const MessageWrapper = styled.div`
display: flex;
flex-direction: column;
margin-top: 20px;
&.own{
    align-items: flex-end;
}

`




export const MessageTop = styled.div`
display: flex;

`
export const MessageBottom = styled.div`
font-size: 12px;
margin-top: 10px;
color: white;

`
export const MessageImg = styled.img`
width: 32px;
height: 32px;
border-radius: 50%;
object-fit: cover;
margin-right: 10px;

`
export const MessageText = styled.p`

padding: 10px;
border-radius: 20px;
background-color: orange;
color: white;
max-width: 300px;

`
