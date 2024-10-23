export function Buttons({ searchCity }) {
    const cities = [
      {
        name: "Londres",
      },
      {
        name: "Sydney",
      },
      {
        name: "Tóquio",
      },
      {
        name: "Atenas",
      },
      {
        name: "Paris",
      },
      {
        name: "Roma",
      },
    ];
  
    return (
      <div className="h-[800px] flex flex-col text-xl bg-darkBox px-2 rounded-2xl pt-12 space-y-12 shadow-shape">
        {cities.map((btn, index) => (
            <button
              key={index}
              type="button"
              onClick={() => searchCity(btn.name)}
              className="text-lg text-zinc-100 font-medium hover:text-zinc-200 hover:bg-gray-400/30 px-3 py-2 rounded-md transition ease-in"
            >
              {btn.name}
            </button>
        ))}
      </div>
    );
  }
  