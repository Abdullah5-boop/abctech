import Image from "next/image";
import Nav from "./Component/Navbar/Nav";
import Banner from "./Component/Banner/Banner";
import Part2 from "./Component/Part2/Part2";
import '../app/Component/Banner/Banner.css'
import Part3 from "./Component/Part3/Part3";
export default function Home() {
  return (
    <div>
      <div className="banner-container flex justify-center h-[100vh] w-[99vw]  text-black text-5xl" data-new-gr-c-s-check-loaded="14.1219.0" >
        <Banner></Banner>
      </div>
      
      <div className="w-full h-[100vh]  ">
        <Part2></Part2>
      </div>
      <section className="mt-20 w-full h-[100vh] ">
        <Part3></Part3>
      </section>

    </div >
  );
}
