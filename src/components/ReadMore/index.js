// Write your code here
import {useState} from 'react'
import {
  MainContainer,
  HeadingAndParaContainer,
  Heading,
  Para,
  ImageAndTextAndButtonContainer,
  Image,
  Text,
  Button,
} from './styledComponents'

const ReadMore = props => {
  const [readMore, setReadMore] = useState(false)
  const {reactHooksDescription} = props
  const slicedText = reactHooksDescription.slice(0, 170)
  const onClickButton = () => {
    setReadMore(prev => !prev)
  }

  return (
    <MainContainer>
      <HeadingAndParaContainer>
        <Heading>React Hooks</Heading>
        <Para>Hooks are a new addition to React</Para>
      </HeadingAndParaContainer>
      <ImageAndTextAndButtonContainer>
        <Image
          src="https://assets.ccbp.in/frontend/hooks/react-hooks-img.png "
          alt="react hooks"
        />
        <Text>{readMore ? reactHooksDescription : slicedText}</Text>
        <Button type="button" onClick={onClickButton}>
          {readMore ? 'Read Less' : 'Read More'}
        </Button>
      </ImageAndTextAndButtonContainer>
    </MainContainer>
  )
}
export default ReadMore
