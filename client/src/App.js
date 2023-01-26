// importing hooks, route components and context
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { SpotifyContext } from "./SpotifyContext";

// importing components from nodes
import { HelmetProvider } from "react-helmet-async";
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
import Collection from "./Collection";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [localUser, setLocalUser] = useState({});
  const [currentPlaylist, setCurrentPlaylist] = useState({});
  const [currentTrack, setCurrentTrack] = useState();
  const [currentQueue, setCurrentQueue] = useState([]);
  const [mainSearch, setMainSearch] = useState('');
  const [autoLoginError, setAutoLoginError] = useState([]);

  // checks the browser session for a logged in user and automatically logs them in
  useEffect(() => {
    (async () => {
      const response = await fetch("/me");
      const data = await response.json();
      if (response.ok) {
        setIsAuthenticated(true);
        setLocalUser(data);
      } else {
        setAutoLoginError(data.errors)
      };
    })();
  }, []);

  // display login/signup if no user is logged in
  ////////////////// Add this to protected routes in the future so that helmet will work without the component route error
  if (!isAuthenticated)
    return (
      <SpotifyContext.Provider value={{ setIsAuthenticated, setLocalUser, autoLoginError }}>
        <HelmetProvider>
          <Helmetcode />
          <Login />
        </HelmetProvider>
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
          setMainSearch,
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
              <Route path='/collection/' element={<Collection />} >
                {/* <Route path='playlists' element={<Playlists />} /> */}
              </Route>
            </Routes>
          </Grid>
        </Grid>
        {currentTrack ? <Footer /> : <></>}
      </SpotifyContext.Provider>
    </Router>
  );
};

export default App;