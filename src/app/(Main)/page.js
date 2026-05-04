import Image from "next/image";
import Hero from "../components/Hero";
import SummerCare from "../components/SummerCare";
import TopBrands from "../components/TopBrands";

export default function Home() {
  return (
    <div>
      <Hero></Hero>
      <SummerCare></SummerCare>
      <TopBrands></TopBrands>
    </div>
  );
}
