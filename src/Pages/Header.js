import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Cards from "./Cards";
import useInfiniteScroll from "../Hooks/useInfiniteScroll";

const WrapperHeader = styled.div`
  box-sizing: border-box;
  width: 100%;
  padding: 1rem;
  position: fixed;
  scroll-behavior: auto;
  background-color: rgb(0, 0, 0);
`;
const WrapperCards = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const Header = (props) => {
  const IMGPATH = "https://image.tmdb.org/t/p/w1280";

  const UpdateData = async () => {
    await fetch(
      "https://api.themoviedb.org/3/discover/movie?api_key=04c35731a5ee918f014970082a0088b1"
    ).then(async (response) => {
      let data = await response.json();
      setItems((initialState) => [...initialState, ...data.results]);
      setIsFetching(false);
    });
  };

  const [items, setItems] = useState([]);
  const fetchData = () => {
    setIsFetching(true);
    setTimeout(UpdateData, [1000]);
  };

  useEffect(() => {
    UpdateData();
  }, []);

  const [isFetching, setIsFetching] = useInfiniteScroll(fetchData);
  console.log(items, "items array::::");
  return (
    <>
      <WrapperHeader
        style={{ color: "#800025", fontWeight: "400", fontSize: "1.5rem" }}
      >
        <img
          style={{ width: "10%" }}
          src={`${require("..//Asets/netflix-logo-png-large.png")}`}
          alt="logo img"
        />
      </WrapperHeader>
      {console.log("items", items)}
      <WrapperCards>
        <div style={{ display: "contents" }}>
          {items.map((item) => (
            <img
              key={item}
              style={style}
              src={IMGPATH + "/" + item.backdrop_path}
              alt=""
            />
          ))}
          {isFetching && "Loading..."}
        </div>
      </WrapperCards>
    </>
  );
};
export default Header;
const style = {
  height: 200,
  width: 300,
  padding: 30,
  margin: 20,
};
