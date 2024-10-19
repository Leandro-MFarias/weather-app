import { IoIosSearch } from "react-icons/io";

export function TopButtons({ inputRef, searchCity }) {
    const cities = [
        {
            name: "London"
        },
        {
            name: "Sydney"
        },
        {
            name: "Tokyo"
        },
        {
            name: "Paris"
        },
        {
            name: "Roma"
        },
    ]

  return (
    <div className="flex flex-col w-full items-center space-y-20">
      <div className="flex justify-between w-full text-xl">
        {
            cities.map((data, index) => (
                <button key={index} onClick={() => searchCity(data.name)} className="text-lg font-medium hover:bg-gray-700/20 px-3 py-2 rounded-md transition ease-in">{data.name}</button>
            ))

        }
      </div>

      <div className="flex items-center">
        <input
          ref={inputRef}
          type="text"
          placeholder="Digite o nome da cidade"
          className="rounded-l-md outline-none text-zinc-400 px-6 py-2"
        />
        <button
          onClick={searchCity}
          className="rounded-r-md cursor-pointer bg-orange-500 hover:bg-orange-400 px-5 py-2.5 outline-none"
        >
          <IoIosSearch className="size-5" />
        </button>
      </div>
    </div>
  );
}
