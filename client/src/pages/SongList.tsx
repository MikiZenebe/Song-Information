import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSongsFetch } from "../redux/reducer/songSlice";
import { RootState } from "../redux/store";

export default function SongList() {
  const dispatch = useDispatch();
  const { songs, loading, error } = useSelector(
    (state: RootState) => state.songs
  );

  useEffect(() => {
    dispatch(getSongsFetch());
  }, [dispatch]);

  console.log(songs);
  return <div>SongList</div>;
}
