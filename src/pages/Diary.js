// Diary.js
import React, { useParams } from "react";

const Diary = () => {
  // id state
  const { id } = useParams();
  return (
    <div>
      <h1>Diary</h1>
      <p>This is Diary!</p>
    </div>
  );
};

export default Diary;
