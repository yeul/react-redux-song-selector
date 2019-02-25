import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    { title: "Hounds of Love", duration: "3:03" },
    { title: "道", duration: "3:36" },
    { title: "Moderation", duration: "3:09" },
    { title: "How Big, How Blue, How Beautiful", duration: "5:35" }
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  } else {
    return selectedSong;
  }
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});
