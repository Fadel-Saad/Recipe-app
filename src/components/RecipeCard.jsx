import { Heart, HeartPulse, Soup } from "lucide-react";

export default function RecipeCard() {
  return (
    <div className="flex flex-col rounded-md bg-[#ecf7d4] p-3 relative overflow-hidden">
      <a href="#" className="relative h-32">
        <img
          src="/1.jpg"
          alt="recipe img"
          className="rounded-md cursor-pointer object-cover h-full w-full"
        />
        <div className="absolute bottom-2 left-2 bg-white rounded-full flex items-center gap-1 text-sm p-1 cursor-pointer ">
          <Soup size={"16"} /> 4 Servings
        </div>

        <Heart
          size={"24"}
          className="hover:fill-red-500 hover:text-red-500 absolute top-1 right-1 p-0.5  bg-white rounded-full"
        />
      </a>

      <div className="flex mt-1">
        <p className="font-bold tracking-wide">Roasted Chicken</p>
      </div>
      <p className="my-2">Turkish Kitchen</p>

      <div className="flex gap-2 mt-auto">
        <div className="flex gap-1 bg-[#d6f497] items-center p-1 rounded-md">
          <HeartPulse size={"16"} />
          <span className="text-sm tracking-tighter font-semibold">
            Gluten-free
          </span>
        </div>
        <div className="flex gap-1 bg-[#d6f497] items-center p-1 rounded-md">
          <HeartPulse size={"16"} />
          <span className="text-sm tracking-tighter font-semibold">
            Heart-Healthy
          </span>
        </div>
      </div>
    </div>
  );
}
