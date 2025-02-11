import SideBar from "./components/SideBar";
import FavoritesPage from "./pages/FavoritesPage";
import HomePage from "./pages/HomePage";
import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";

function App() {
  const [favorites, setFavorites] = useState(function () {
    const storedValue = JSON.parse(localStorage.getItem("favorites"));
    return storedValue || [];
  });

  function handleAddFavorites(recipe) {
    setFavorites((favorites) => [...favorites, recipe]);
  }

  function handleDeleteFavorites(recipe) {
    setFavorites((favorites) => favorites.filter((fav) => fav.id !== recipe.id));
  }

  useEffect(
    function () {
      localStorage.setItem("favorites", JSON.stringify(favorites));
    },
    [favorites]
  );

  return (
    <div className="flex">
      <SideBar />
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              favorites={favorites}
              setFavorites={setFavorites}
              onAddFavorites={handleAddFavorites}
              onDeleteFavorites={handleDeleteFavorites}
            />
          }
        />
        <Route
          path="/favorites"
          element={
            <FavoritesPage
              favorites={favorites}
              setFavorites={setFavorites}
              onAddFavorites={handleAddFavorites}
              onDeleteFavorites={handleDeleteFavorites}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
