import ThankYouImage from "../Images/illustration-thank-you.svg";

function Submit() {
  return (
    <div className="px-5 py-10 bg-gradient-to-t from-[#181e27] to-[#222a33] flex flex-col gap-10 rounded-xl">
      {/* Header image & Rating selected*/}
      <main className="flex flex-col justify-center items-center gap-8">
        <img src={ThankYouImage} alt="" />
        <div className="border px-4 py-1 rounded-full">
          <p className="text-[#FC7614]">You selected 4 out of 5</p>
        </div>
        <div className="flex flex-col justify-center items-center gap-4">
          <h1 className="text-3xl text-white">Thank you !</h1>
          <p className="text-center text-sm text-[#969FAD]">
            We appreciate you taking the time to give a rating. If you ever need
            more support, don’t hesitate to get in touch!
          </p>
        </div>
      </main>
    </div>
  );
}

export default Submit;
