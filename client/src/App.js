// importing hooks, route components and context
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { SpotifyContext } from "./SpotifyContext";

// importing components from nodes
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';


// importing components and css
import "./App";
import "./Body.css";
import Footer from "./Footer";
import Header from "./Header";
import Home from "./components/Home";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import Search from "./components/Search";
import Playlist from "./Playlist";
import Helmetcode from "./components/Helmetcode";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [localUser, setLocalUser] = useState({});
  const [currentPlaylist, setCurrentPlaylist] = useState({});
  const [currentTrack, setCurrentTrack] = useState();
  const [currentQueue, setCurrentQueue] = useState([]);
  const [mainSearch, setMainSearch] = useState('');

  // checks the browser session for a logged in user and automatically logs them in
  useEffect(() => {
    fetch("/me").then((response) => {
      if (response.ok) {
        response.json().then((user) => {
          setIsAuthenticated(true);
          setLocalUser(user);
        });
      }
    });
  }, []);

  console.log("main search from app", mainSearch)

  // display login/signup if no user is logged in
  ////////////////// Add this to protected routes in the future so that helmet will work without the component route error
  if (!isAuthenticated)
    return (
      <SpotifyContext.Provider value={{ setIsAuthenticated, setLocalUser }}>
        <Login />
      </SpotifyContext.Provider>
    );

  return (
    <Router>
      <SpotifyContext.Provider
        value={{
          isAuthenticated,
          setIsAuthenticated,
          localUser,
          setLocalUser,
          currentPlaylist,
          setCurrentPlaylist,
          currentTrack,
          setCurrentTrack,
          currentQueue,
          setCurrentQueue,
          mainSearch,
          setMainSearch
        }}
      >
        <Helmetcode />
        <Grid container>
          <Grid item >
            <Navbar />
          </Grid>
          <Grid item sx={{ flexGrow: 1 }}>
            <Header />
            <Routes>
              <Route index element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path='/search' element={<Search />} />
              <Route path="/playlists/:id" element={<Playlist />} />
              <Route path="/profile" element={<Profile />} />
              {/* <Route path='/*' element={<></>} /> */}
              {/* <Route path='/collection/' element={<CollectionHeader />} >
                <Route path='playlists' element={<Playlists />} />
              </Route> */}
            </Routes>
          </Grid>
        </Grid>
        <Footer />
      </SpotifyContext.Provider>
    </Router>
  );
};

export default App;