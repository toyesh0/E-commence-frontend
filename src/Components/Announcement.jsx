import styled from "styled-components";
const Container = styled.div`
height: 30px;
background-color: teal;
color: white;
display: flex;
align-content: center;
justify-content: center;
font-size: 14px;
font-weight: 500;
`;
const Heading = styled.div`
padding: 6px;
`;
const Announcement = () => {
  return (
   <Container>
   <Heading>Super deal ! 50% off</Heading></Container>
  )
}

export default Announcement
