//functional imports
import React, { useState, useContext, useEffect } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import { SpotifyContext } from "../SpotifyContext";

// css and component imports
import "../Body.css";
import "../App.css";

//material ui imports
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Grid from '@mui/material/Grid';
import InputAdornment from '@mui/material/InputAdornment';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import InputBase from '@mui/material/InputBase';
import ClearIcon from '@mui/icons-material/Clear';
import SearchIcon from '@mui/icons-material/Search';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';



function Profile() {
  // sets state, params, navigate and context
  const { localUser, setLocalUser } = useContext(SpotifyContext);
  // const [errors, setErrors] = useState([]);
  // const [form, setForm] = useState(currentPlaylist);
  // const [open, setOpen] = useState(false);
  // const [search, setSearch] = useState('');
  // const [tracks, setTracks] = useState([]);
  // const params = useParams();
  // const navigate = useNavigate();

  // // sets the playlist from the id in the url
  // useEffect(() => {
  //   if (params.id.length < 20) {
  //     let thisPagesPlaylist = localUser.playlists.find((playlist) => {
  //       if (playlist.id.toString() === params.id) {
  //         return playlist
  //       }
  //     })
  //     setCurrentPlaylist(thisPagesPlaylist)
  //   }
  // }, [params, localUser])

  // //sets the form in state used in updating from the currentplaylist
  // useEffect(() => {
  //   setForm(currentPlaylist)
  // }, [currentPlaylist])

  // // sends the updates attributes of the playlist to the backend and updates state with the updated playlist
  // function handleSave(e) {
  //   e.preventDefault()
  //   fetch(`/playlists/${currentPlaylist.id}`, {
  //     method: "PATCH",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       name: form.name,
  //       description: form.description,
  //       image: form.image
  //     })
  //   }).then((res) => {
  //     if (res.ok) {
  //       res.json().then((updatedPlaylist) => {
  //         setCurrentPlaylist(updatedPlaylist)
  //         let updatedPlaylists = localUser.playlists.map((pl) => {
  //           if (params.id === pl.id.toString()) {
  //             return updatedPlaylist
  //           } else {
  //             return pl
  //           }
  //         })
  //         setLocalUser({ ...localUser, playlists: updatedPlaylists })
  //       });
  //     } else {
  //       res.json().then((err) => {
  //         setErrors(err.error)
  //       });
  //     }
  //   })
  //   setOpen(false);
  // }

  // // adds track to currentplaylist then updates state with the updated playlist from the backend
  // function handleAddTrack(track) {
  //   console.log("handle add track firing")
  //   fetch(`/playlists/${currentPlaylist.id}`, {
  //     method: "PATCH",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({ trackId: track.id })
  //   }).then((res) => {
  //     if (res.ok) {
  //       res.json().then((updatedPlaylist) => {
  //         setCurrentPlaylist(updatedPlaylist)
  //         let updatedPlaylists = localUser.playlists.map((pl) => {
  //           if (params.id === pl.id) {
  //             return updatedPlaylist
  //           } else {
  //             return pl
  //           }
  //         })
  //         setLocalUser({ ...localUser, playlists: [updatedPlaylists] })
  //       });
  //     } else {
  //       res.json().then((err) => {
  //         setErrors(err.error)
  //       });
  //     }
  //   })
  // }

  // // deletes the current playlist and updates states by removing it
  // function handleDeletePlaylist(e) {
  //   e.preventDefault()
  //   fetch(`/playlists/${currentPlaylist.id}`, {
  //     method: "DELETE",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(),
  //   }).then((res) => {
  //     if (res.ok) {
  //       let updatedPlaylists = localUser.playlists.filter((pl) => currentPlaylist.id !== pl.id)
  //       setLocalUser({ ...localUser, playlists: updatedPlaylists })
  //       setCurrentPlaylist({})
  //       navigate("/home")
  //     } else {
  //       res.json().then((err) => {
  //         setErrors(err.errors)
  //       });
  //     }
  //   })
  //   handleCloseDeleteMenu()
  // }
  

  //   //updates the form in state with the changed input values from the form
  //   function handleDialogUpdate(e) {
  //     setForm({ ...form, [e.target.name]: e.target.value })
  //   }
  
  //   //handles opening and closing the form
  //   const handleClickOpen = () => {
  //     setOpen(true);
  //   };
  //   const handleClose = () => {
  //     setOpen(false);
  //     setForm(currentPlaylist)
  //   };

  // //updates state held search value for song search input
  // function handleSearchInputChange(e) {
  //   setSearch(e.target.value)
  // }

  // console.log("params", params)

  // //menu open and close handling for the delete threedot button
  // const [anchorEl, setAnchorEl] = React.useState(null);
  // const openDeletePlaylist = Boolean(anchorEl);
  // const handleOpenDeleteMenu = (event) => {
  //   setAnchorEl(event.currentTarget);
  // };
  // const handleCloseDeleteMenu = () => {
  //   setAnchorEl(null);
  // };

  // // clear input value in update form in dialog
  // const handleFormNameClear = (val) => {
  //   setForm({ ...form, [val]: '' })
  // }


  return (
    <>

      <Grid container className='body'>
        <Grid item xs={4} sx={{}}>
          <img className="profile_image_class" src={localUser.avatar_url} alt={localUser.username} />
        </Grid>
        <Grid item xs={8} className="body__infoText" >
          <p>{`Username: ${localUser.username}`}</p>
          <p>{`Birthdate: ${localUser.birthdate}`}</p>
          <p>{`Region: ${localUser.region}`}</p>
          <p>{`Email: ${localUser.email}`}</p>
        </Grid>
      </Grid>

        <Grid Container className='body'>

        {localUser.spotify_token ? 
          <>
            <Grid item>
              <img className="profile_image_class" src={localUser.spotify_img} alt={`${localUser.username}'s avatar unavailable`} />
            </Grid>
            <Grid item className="body__infoText" >
              <h4>Associated Spotify account details :</h4>
              <p>{`Remaining minutes for this session: ${Math.floor((localUser.spotify_token_lifetime - Date.now()/1000)/60)}`}</p>
              <p>{`Spotify display name: ${localUser.spotify_display_name}`}</p>
              <p>{`Spotify Id: ${localUser.spotify_id}`}</p>
              <p>{`Spotify email: ${localUser.spotify_email}`}</p>
            </Grid>
          </>
        :
        <p>Login with Spotify using the link in the navigation bar!</p>
        }
        </Grid>
        </>
  )
}

export default Profile