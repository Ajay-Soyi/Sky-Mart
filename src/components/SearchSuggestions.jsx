import { Search, Clock, TrendingUp, ArrowUpLeft, X } from "lucide-react";
import { useContext, useEffect, useState } from "react";
import { MyStore } from "../context/MyContext";
import { useNavigate } from "react-router";

const SearchSuggestions = ({ setHasSuggestion }) => {
  const { searchData, productsData } = useContext(MyStore);
  const [suggestions, setSuggestions] = useState([]);

  // have to filter suggestions and then use debouncing .
  const filteredSearchData = () => {
    const tempSuggestedData = productsData.filter((elem) => {
      return elem.title.toLowerCase().includes(searchData.toLowerCase());
    });
    setSuggestions(tempSuggestedData);
  };

  // debouncing
  useEffect(() => {
    if (!searchData) return;
    const timeout = setTimeout(() => {
      filteredSearchData();
    }, 700);

    return () => {
      clearTimeout(timeout);
    };
  });

  const navigate = useNavigate();

  return (
    <div className="absolute left-0 right-0 top-full z-50 mt-2 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-xl">
      <div className="h-px bg-gray-100" />

      {/* Suggested Products */}
      <div className="p-4">
        <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-gray-400">
          Suggestions
        </h3>

        <div className="space-y-1">
          {suggestions.map((item, index) => (
            <div
              onClick={() => {
                navigate(`/products/${item.category}`);
                setHasSuggestion(false);
              }}
              key={index}
              className="flex cursor-pointer items-center gap-3 rounded-xl px-3 py-3 transition hover:bg-indigo-50"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gray-100 text-gray-500 transition group-hover:bg-indigo-100">
                <Search size={17} />
              </div>

              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-medium text-gray-800">
                  {item.title}
                </p>

                <p className="mt-0.5 text-xs text-gray-400">
                  in {item.category}
                </p>
              </div>

              <ArrowUpLeft size={16} className="text-gray-300" />
            </div>
          ))}
        </div>
      </div>

      {/* Trending Searches */}
      <div className="border-t border-gray-100 bg-gray-50/80 px-5 py-4">
        <div className="mb-3 flex items-center gap-2">
          <TrendingUp size={15} className="text-indigo-600" />

          <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-500">
            Trending Searches
          </h3>
        </div>

        <div className="flex flex-wrap gap-2">
          {["Smartphones", "Sneakers", "Backpacks", "Gaming"].map((item) => (
            <button
              key={item}
              className="rounded-full border border-gray-200 bg-white px-3 py-1.5 text-xs font-medium text-gray-600 transition hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-600"
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchSuggestions;
