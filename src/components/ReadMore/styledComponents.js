// Style your elements here
import styled from 'styled-components'

// MainContainer,
//   HeadingAndParaContainer,
//   Heading,
//   Para,
//   ImageAndTextAndButtonContainer,
//   Image,
//   Text,
//   Button,

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const HeadingAndParaContainer = styled.div`
  display: flex;
`

export const Heading = styled.h1`
  font-family: Roboto;
`

export const Para = styled.p`
  font-size: 16px;
`

export const ImageAndTextAndButtonContainer = styled.div`
  width: 500px;
`

export const Image = styled.img`
  height: 300px;
`

export const Text = styled.p`
  font-size: 18px;
`

export const Button = styled.button`
  background-color: #1f81ff;
  color: #fff;
  border-radius: 5px;
`
