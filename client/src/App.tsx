import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Post from "./pages/Post";
import Button from "./components/Button";
import { useCallback, useEffect, useState } from "react";
import cn from "classnames";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { axios } from "./utils/axios";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import jwt from "jwt-decode";
import { getUser, getUserAction } from "./features/user/userSlice";
import { IUser } from "./types/user";

const App: React.FC = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const [scroll, setScroll] = useState(0);
  const onScroll = useCallback(() => setScroll(Math.round(window.scrollY)), []);
  // useEffect(() => {
  //   onScroll();
  //   window.addEventListener("scroll", onScroll);
  //   // if (scroll >= 500) {
  //   //   window.scrollTo(0, 0);
  //   // }
  //   console.log(scroll);

  //   return () => window.removeEventListener("scroll", onScroll);
  // }, [onScroll, scroll]);
  useEffect(() => {
    dispatch(getUserAction());
  }, []);
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post/:id" element={<Post />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Button
        appearence="primary"
        className={cn("right", {
          hide: scroll <= 300,
        })}
      >
        Back To Top
      </Button>
    </>
  );
};

export default App;
