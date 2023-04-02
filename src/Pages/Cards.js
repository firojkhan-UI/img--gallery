import styled from "styled-components";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";

const WrapperCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 10px;
  margin: 10px;
  width: 400px;
  height: 300px;
  box-sizing: border-box;
  border-radius: 8px solid black;
`;

const Cards = (props) => {
  return (
    <WrapperCards>
      <div>
        {/* <img src={IMGPATH+ '/' +props.url} style={{width: '400px', height: '300px'}} alt='img items'></img> */}
      </div>
    </WrapperCards>
  );
};

export default Cards;
