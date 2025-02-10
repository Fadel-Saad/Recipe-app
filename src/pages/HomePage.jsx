import { Search } from "lucide-react";
import RecipeCard from "../components/RecipeCard";
import { useState, useEffect } from "react";

const APIKey = import.meta.env.VITE_App_key;

export default function HomePage({ favorites, setFavorites, onAddFavorites, onDeleteFavorites }) {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [recipes, setRecipes] = useState([]);

  useEffect(
    function () {
      // const controller = new AbortController();

      async function fetchRecipes() {
        try {
          setLoading(true);

          const res = query
            ? await fetch(
                `https://api.spoonacular.com/recipes/complexSearch?query=${query}&addRecipeInformation=true&number=15`,

                {
                  headers: {
                    "x-api-key": APIKey,
                  },
                }
              )
            : await fetch(
                `https://api.spoonacular.com/recipes/complexSearch?query=chicken&addRecipeInformation=true&number=15`,
                {
                  headers: {
                    "x-api-key": APIKey,
                  },
                }
              );

          if (!res.ok) throw new Error("something went wrong");

          const data = await res.json();

          setRecipes(data.results);
        } catch (error) {
          console.log(error.message);
        } finally {
          setLoading(false);
        }
      }

      fetchRecipes();

      // return function () {
      //   controller.abort();
      // };
    },
    [query]
  );

  return (
    <div className="bg-[#faf9fb] p-10 flex-1">
      <div className="max-w-screen-lg mx-auto ">
        <form>
          <label className="input  focus-within:outline-gray-400 focus-within:border-gray-400 shadow-md flex items-center gap-2 w-full">
            <Search size={"24"} />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="tex-sm md:text-md grow"
              placeholder="Search for a recipe"
            />
          </label>
        </form>
        <h1 className="font-bold text-3xl md:text-5xl mt-4">Recommended Recipes</h1>
        <p className="text-slate-500 font-semibold ml-1 my-2">Popular Choices</p>
        <div className="grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {!loading &&
            recipes.map((recipe, index) => (
              <RecipeCard
                key={index}
                recipe={recipe}
                favorites={favorites}
                setFavorites={setFavorites}
                onAddFavorites={onAddFavorites}
                onDeleteFavorites={onDeleteFavorites}
              />
            ))}

          {loading &&
            [...Array(9)].map((_, index) => (
              <div key={index} className="flex w-full flex-col gap-4">
                <div className="skeleton h-32 w-full"></div>
                <div className="flex justify-between">
                  <div className="skeleton h-4 w-28"></div>
                  <div className="skeleton h-4 w-24"></div>
                </div>
                <div className="skeleton h-4 w-1/2"></div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
