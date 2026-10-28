import React from "react";
import { useNavigate } from "react-router";

const categories = [
  { name: "Electronics", path: "/products/electronics" },
  { name: "Men's Clothing", path: "/products/men's-clothing" },
  { name: "Women's Clothing", path: "/products/women's-clothing" },
  { name: "Jewelery", path: "/products/jewelery" },
];

const NavbarLinks = () => {
  let navigate = useNavigate();

  return (
    <nav className="hidden border-t border-slate-100 md:block">
      <div className="mx-auto flex max-w-360 items-center gap-10 overflow-x-auto px-8 py-4 text-sm font-medium text-slate-600 lg:px-12">
        {categories.map((elem) => {
          return (
            <span
              onClick={() => {
                navigate(`${elem.path}`);
              }}
              key={elem.name}
              className="whitespace-nowrap hover:text-blue-600 cursor-pointer"
            >
              {elem.name}
            </span>
          );
        })}
      </div>
    </nav>
  );
};

export default NavbarLinks;
