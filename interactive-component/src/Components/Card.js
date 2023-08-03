import Staricon from "../Images/icon-star.svg";
import IllustrationThankYou from "../Images/illustration-thank-you.svg";
import { useState } from "react";

function Card() {
  const [rateValue, setRateValue] = useState(0);
  const [isSubmit, setIsSubmit] = useState(false);

  const handleSubmit = () => {
    if (rateValue) {
      setIsSubmit(true);
    }
  };

  return (
    <div className="max-w-[412px]">
      {!isSubmit && (
        <div
          className="flex flex-col gap-8 px-5 py-7 rounded-xl bg-gradient-to-t from-[#181e27] to-[#222a33]
          "
        >
          <div>
            <img src={Staricon} alt="A star" />
          </div>
          {/* Header Content */}
          <div className="flex flex-col gap-3">
            <h1 className="text-2xl text-white font-bold">How did we do?</h1>
            <p className="text-sm font-semibold text-[#7C8798]">
              Please let us know how we did with your support request. All
              feedback is appreciated to help us improve our offering!
            </p>
          </div>
          {/* End Of Header Content */}
          {/* Rating Buttons Lists */}
          <div className="flex flex-row justify-between items-center">
            {[1, 2, 3, 4, 5].map((value) => (
              <div
                className={`w-12 h-12 flex justify-center items-center rounded-full bg-[#262E38] text-[#7C8798] hover:text-white hover:bg-[#FC7614] ${
                  value === rateValue ? "bg-orange-500  text-white" : ""
                }`}
                onClick={() => setRateValue(value)}
                key={value}
              >
                {value}
              </div>
            ))}
          </div>
          {/* End Of Rating Buttons Lists */}
          <button
            className="py-2 font-medium tracking-[0.2em] rounded-full bg-[#FC7614] text-white hover:bg-white hover:text-[#FC7614]"
            onClick={handleSubmit}
          >
            SUBMIT
          </button>
        </div>
      )}
      {isSubmit && (
        <div className="flex flex-col gap-5 px-5 py-7 rounded-xl bg-gradient-to-t from-[#181e27] to-[#222a33]">
          <div className="flex flex-col gap-7 items-center">
            <img
              src={IllustrationThankYou}
              alt="A phone with a credit card and a circle"
            />
            <button className="px-4 py-1.5 rounded-full bg-[#262E38] text-[#FC7614]">
              You selected {rateValue} out of 5
            </button>
            <h1 className="text-2xl text-white font-semibold">Thank you !</h1>
            <p className="text-[#7C8798] text-sm text-center">
              We appreciate you taking the time to give a rating. If you ever
              need more support, don’t hesitate to get in touch!
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Card;
