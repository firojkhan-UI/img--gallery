import { useEffect, useState } from 'react';
import Header from './Pages/Header';
import {useSelector, useDispatch} from 'react-redux'
import { getImgData } from './Action/action'



const API_URL = "https://picsum.photos/v2/list?page=2&limit=100";

function App() {
  const dt = useSelector( (state) => state.GetImgReducer?.images)

  const dispatch = useDispatch()
  const [data, setData] = useState()

  useEffect ( () => {
  fetch(API_URL).then(data=>data.json()).then(res=>setData(res))
  }, [])

  useEffect( () => {
    dispatch(getImgData(data))
  },[data] )

  return (
    <>
     <Header res = {dt}/>
  
    </>
  );
}

export default App;