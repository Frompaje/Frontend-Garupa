import { useSearchParams } from "react-router-dom";
import { Input } from "../ui/input";
import { useRef } from "react";

export const SearchFilter = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const debounceRef = useRef<NodeJS.Timeout | null>(null);

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;

    if (debounceRef.current) {
      clearTimeout(debounceRef.current);
    }

    debounceRef.current = setTimeout(() => {
      const newSearchParams = new URLSearchParams(searchParams);
      newSearchParams.set("search", value);
      setSearchParams(newSearchParams);
    }, 400);
  }

  return (
    <Input
      className=" w-3/4 sm:w-1/2"
      placeholder="ID Externo"
      onChange={handleInputChange}
    />
  );
};
