import { IoIosSearch } from "react-icons/io";

export function Input({ city, setCity }) {

  return (
    <div className="">
      <div className="h-14 flex items-center justify-between bg-darkBox px-4 py-3 rounded-lg shadow-shape">
        <input
          type="text"
          placeholder="Buscar cidade"
          className="h-full w-full bg-transparent text-zinc-100 px-2 outline-none"
          onChange={(e) => setCity(e.target.value)}
          value={city}
        />
        <button
          type="submit"
          className="cursor-pointer hover:scale-110 transition ease-in"
        >
          <IoIosSearch className="size-7" />
        </button>
      </div>
    </div>
  );
}
