import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [image, setImage] = useState([]);

  const getImg = async () => {
    const response = await fetch(
      "http://www.mocky.io/v2/5ecb5c353000008f00ddd5a0"
    );
    setImage(await response.json());
  };

  useEffect(() => {
    getImg();
  }, []);

  return (
    <>
      <div className="container-fluid">
        <div className="gallery mt-1 ">
          {image.map((currElem) => {
            return <img src={currElem.urls.small} />;
          })}
        </div>
      </div>
    </>
  );
}

export default App;
