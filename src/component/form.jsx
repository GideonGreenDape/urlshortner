import { useState } from "react";
import shortenerUtility from "../utility/shortener";

function ShortenURL() {
  return (
    <div className="w-[500px] h-[471px] bg-white flex flex-col items-start px-5 py-5 gap-[20px] rounded-[10px]">
      <p className="font-montserrat font-medium text-grey text-[18px] ">
        Shorten a long URL{" "}
      </p>
      <InputUrl />
    </div>
  );
}

function InputUrl() {
  const [url, setUrl] = useState("");
  const [shortenedUrl, setShortenedUrl] = useState("");
  return (
    <div className="flex flex-col gap-[20px]">
      <input
        onInput={(e) => {
          setUrl(e.target.value);
        }}
        type="text"
        className="font-montserrat text-[18px] border-solid border-[1px] border-gray rounded-[6px] w-[450px] h-[49px] px-3 py-2"
        placeholder="Enter your URL here"
      />

      <div onClick={()=>{
        if(url.length > 0){
        const shorturl= shortenerUtility(url);
        setShortenedUrl(shorturl);
        }
      }} className="bg-linksbg w-[450px] h-[49px] rounded-[6px] flex items-center justify-center cursor-pointer">
        <p className="font-montserrat text-white text-[18px] ">Submit</p>
      </div>
      <p className="font-montserrat font-medium text-joshua text-[18px] ">
        Your shortened URL will appear here:
      </p>
      <p className="font-montserrat font-semibold text-linksbg text-[22px] ">{shortenedUrl}</p>
    </div>
  );
}

export default ShortenURL;
