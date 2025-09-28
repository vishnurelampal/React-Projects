import React from "react";

const GptSearchContainer = () => {
  return (
    <div className="bg-black p-5 flex justify-center">
      <form>
        <input
          type="text"
          placeholder="Search with GPT..."
          className="border p-2 rounded-lg w-96"
        />
        <button
          type="submit"
          className="bg-red-600 text-white p-2 rounded-lg ml-2"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default GptSearchContainer;
