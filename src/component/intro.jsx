import ClickableButtons from "./buttons";

function Intro() {
  return (
    <div className="flex flex-col items-start justify-center h-fit gap-7 ">
      <p className="font-montserrat text-white font-semibold text-[32px] ">The Original URL Shortener</p>
      <p className="font-montserrat text-white text-[18px] ">Create shorter URLS with ShortenedURL</p>
      <p className="font-montserrat text-white text-[18px] w-[550px] ">
        Want more out of your link shortener? Track link analytics, use branded
        domains for fully coustom links, and manage your links with our paid
        plans.
      </p>
      <div className="flex gap-[10px] items-center ">
        <ClickableButtons title="View Plans" link= 'plans' default={false}  />
        <ClickableButtons title="Create Free Accounts" link='signup' default={true} />
      </div>
      <p className="font-montserrat text-white text-[18px] ">TinyURL plans include:</p>
      <div className=" flex gap-[20px] ">
           <div className="flex flex-col gap-[10px] ">
            <p className="font-montserrat text-white text-[18px] ">Detailed Link Analytics </p>
            <p className="font-montserrat text-white text-[18px] ">Fully Branded Domains </p>
           </div>
           <div className="flex flex-col gap-[10px] ">
            <p className="font-montserrat text-white text-[18px] ">Bulk Short URLs </p>
            <p className="font-montserrat text-white text-[18px] ">Link Management Features </p>
           </div>
      </div>
    </div>
  );
}





export default Intro