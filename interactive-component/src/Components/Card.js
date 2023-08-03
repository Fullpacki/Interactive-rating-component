import Staricon from "../Images/icon-star.svg";
import { Link } from "react-router-dom";
import { useState } from "react";

function Card() {
  return (
    <div className="px-5 py-7 bg-gradient-to-t from-[#181e27] to-[#222a33] flex flex-col gap-5 rounded-xl">
      {/* Star button */}
      <header>
        <div>
          <img
            className="p-3 rounded-full bg-[#262e38]"
            src={Staricon}
            alt=""
          />
        </div>
      </header>
      {/* Title & paragraphs & interactive buttons */}
      <main>
        <section className="flex flex-col gap-6">
          {/* Title and paragraph */}
          <div className="flex flex-col gap-4">
            <h1 className="text-2xl text-white font-bold">How did we do?</h1>
            <p className="text-sm text-[#969FAD]">
              Please let us know how we did with your support request. All
              feedback is appreciated to help us improve our offering!
            </p>
          </div>
          {/* Form */}
          <div className="flex flex-row justify-around items-center ">
            <span>1</span>
            <span>2</span>
            <span>3</span>
            <span>4</span>
            <span>5</span>
          </div>
        </section>
      </main>
      {/* Submit button */}
      <footer>
        <Link to={"/rating-service"}>
          <button className="w-full py-2 rounded-full bg-[#FC7614] text-sm font-bold text-white tracking-[0.2em]">
            SUBMIT
          </button>
        </Link>
      </footer>
    </div>
  );
}

export default Card;
