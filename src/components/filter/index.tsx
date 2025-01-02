import { useSearchParams } from "react-router-dom";
import { Input } from "../ui/input";

export const SearchFilter = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.set("search", e.target.value);
    setSearchParams(newSearchParams);
  }

  return (
    <Input
      className="w-1/2 ml-4"
      placeholder="ID Externo"
      onChange={handleInputChange}
    />
  );
};
