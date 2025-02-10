import { Heart, HeartPulse, Soup, Hourglass } from "lucide-react";

export default function RecipeCard({ recipe, onAddFavorites, onDeleteFavorites, favorites }) {
  const alreadyInFavorites = favorites?.map((fav) => fav?.id).includes(recipe.id);

  return (
    <div className="flex flex-col rounded-md bg-[#FCE7C8]  p-3 relative overflow-hidden">
      <a
        href={`https://www.youtube.com/results?search_query=${recipe.title} recipe`}
        className="relative h-40"
        target="_blank"
      >
        <img
          src={recipe.image}
          alt="recipe img"
          className="rounded-md cursor-pointer object-cover h-full w-full"
        />
        <div className="absolute bottom-2 left-2 bg-white rounded-full flex items-center gap-1 text-sm p-1 cursor-pointer ">
          <Soup size={"16"} /> {recipe.servings} Servings
        </div>

        {/* change favorites button depending on if it's already added */}
        {alreadyInFavorites && (
          <div
            className="absolute top-1 right-1 p-1  bg-white rounded-full"
            onClick={(e) => {
              e.preventDefault();
              onDeleteFavorites(recipe);
            }}
          >
            <Heart size={"24"} className="fill-red-500 " />
          </div>
        )}
        {!alreadyInFavorites && (
          <div
            className="absolute top-1 right-1 p-1  bg-white rounded-full"
            onClick={(e) => {
              e.preventDefault();
              onAddFavorites(recipe);
            }}
          >
            <Heart size={"24"} className="hover:fill-red-500 hover:text-red-500 " />
          </div>
        )}
      </a>

      <div className="flex mt-1">
        <p className="font-bold tracking-wide">{recipe.title}</p>
      </div>
      <p className="my-2 font-semibold">Health Score: {recipe.healthScore}</p>

      <div className="flex gap-2 mt-auto">
        <div className="bg-[#FADA7A] flex gap-1  items-center p-1 rounded-md">
          <Hourglass size={"16"} />
          <span className="text-sm tracking-tighter font-semibold">
            {recipe.readyInMinutes} Minutes
          </span>
        </div>
        {recipe.dairyFree && <HealthLabel>Dairy-Free</HealthLabel>}
        {!recipe.glutenFree && recipe.glutenFree && <HealthLabel>Gluten-Free</HealthLabel>}
        {recipe.vegan && <HealthLabel>Vegan</HealthLabel>}
      </div>
    </div>
  );
}

function HealthLabel({ children }) {
  return (
    <div className="bg-[#FADA7A] flex gap-1 items-center p-1 rounded-md">
      <HeartPulse size={"16"} />
      <span className="text-sm tracking-tighter font-semibold">{children}</span>
    </div>
  );
}
