import React from "react";
import { ArrowRight } from "lucide-react";

const CategoryCard = ({ category }) => {
  return (
    <div
      key={category.name}
      className={`group relative h-52 cursor-pointer overflow-hidden rounded-2xl ${category.color} sm:h-64`}
    >
      <img
        src={category.image}
        alt={category.name}
        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
      <div className="absolute inset-x-0 bottom-0 flex items-center justify-between p-4 text-white sm:p-5">
        <h3 className="text-sm font-bold sm:text-lg">{category.name}</h3>
        <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
      </div>
    </div>
  );
};

export default CategoryCard;
