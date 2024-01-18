import Image from "next/image";

const Loading = () => (
  <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-[#7b022e] z-[30]">
    <Image height={300} width={300} src="/Loading.jpg" alt="Logo" className=" w-[70px] md:w-[300px] animate-pulse h-full object-cover"/>
  </div>
);

export default Loading;