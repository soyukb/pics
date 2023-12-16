import { useState } from "react";
import searchImages from "./api";
import ImageList from "./conpopnents/ImageList";
import SearchBar from "./conpopnents/SearchBar";

function App() {
  const [images, setImages] = useState([]);

  const handleSubmit = async (term) => {
    const result = await searchImages(term);
    setImages(result);
  };

  return (
    <div className="App">
      <SearchBar onSubmit={handleSubmit} />
      <ImageList images={images} />
    </div>
  );
}

export default App;
