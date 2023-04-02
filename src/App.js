import { useEffect, useState } from "react";
import Header from "./Pages/Header";
import { useSelector, useDispatch } from "react-redux";
import { getImgData } from "./Action/action";
import styled from "styled-components";

const Appwrapper = styled.div`
  background-color: rgb(0, 0, 0);
  /* padding-bottom: 1rem; */
`;

// const API_URL = "https://picsum.photos/v2/list?page=2&limit=100";
const API_URL =
  "https://api.themoviedb.org/3/discover/movie?api_key=04c35731a5ee918f014970082a0088b1";
// const IMGPATH = "https://image.tmdb.org/t/p/w1280";

function App() {
  // const dt = useSelector( (state) => state?.GetImgReducer?.images)

  const dispatch = useDispatch();
  const [data, setData] = useState([]);

  //   useEffect(() => {
  //     const questionsData = async () => {
  //         await fetch(API_URL).then(async (response) => {
  //             let data = await response.json();
  //             console.log('data from api',data)
  //             setData([...data.results]);
  //         })
  //     }

  //     questionsData();
  // }, [])
  // useEffect ( () => {
  // fetch(API_URL).then(data=>data.json()).then(res=>setData({
  //   ...res,
  //   res
  // }))
  // dispatch(getImgData(data))

  // }, [])
  // useEffect( () => {
  //   dispatch(getImgData(data))
  // },[data] )
  return (
    <Appwrapper>
      <Header dt={data} />
    </Appwrapper>
  );
}

export default App;
