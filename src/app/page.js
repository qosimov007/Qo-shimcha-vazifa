import Image from "next/image";
import Products from "../component/Products"

export default function Home() {



  return (
    <main className="px-40 ">
      <div className="flex gap-2 mt-16">
        <div className="w-[70%] pr-24">
          <h1 className="text-6xl font-bold">
            We are changing the way people shop
          </h1>
          <p className="mt-8 text-lg leading-8">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore
            repellat explicabo enim soluta temporibus asperiores aut obcaecati
            perferendis porro nobis.
          </p>
          <button className="btn mt-10 bg-blue-500 hover:bg-blue-800 text-white py-2 px-4 rounded-lg">
            OUR PRODUCTS
          </button>
        </div>
        
      </div>
      <div>
        <h2 className="text-4xl mt-20 mb-12">Featured Products</h2>
        <hr className="mb-16" />
          <Products/>
      </div>
    </main>
  );
}
