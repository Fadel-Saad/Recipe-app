import RecipeCard from "../components/RecipeCard";

export default function FavoritesPage({ favorites, onAddFavorites, onDeleteFavorites }) {
  return (
    <div className="bg-[#faf9fb] flex-1 p-10 min-h-screen">
      <div className="max-w-screen-lg mx-auto">
        <p className="font-bold text-3xl md:text-5xl my-4">My Favorites</p>

        {favorites.length === 0 && (
          <div className="h-[80vh] flex flex-col  gap-4">
            <h1 className="font-semibold md:text-3xl mt-25">No Favorites Found :/</h1>
          </div>
        )}

        <div className="grid grid-col-1 md:grid-cols-2 lg:grid-col-3 gap-4">
          {favorites.map((recipe) => (
            <RecipeCard
              key={recipe.id}
              recipe={recipe}
              favorites={favorites}
              onAddFavorites={onAddFavorites}
              onDeleteFavorites={onDeleteFavorites}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
