import Image from "next/image";
import Features from "../component/features";
import Example from "../component/goodes";
import Link from "next/link"

export default function Home() {
  return (
    <div>
      {/* Banner Section */}
      <div className="relative w-full h-[300px] mt-[100px] bg-cover bg-center" style={{ backgroundImage: 'url("/img2.jpg")' }}>
        <div className="absolute top-1/2 left-[70%] transform -translate-x-1/2 -translate-y-1/2 text-center bg-[#FFF3E3] text-[#B88E2F] h-[230px] p-6">
          <h2 className="text-2xl md:text-3xl mb-4">Discover Our New Collection</h2>
          <p className="text-lg mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <Link href="#" className="bg-[#B88E2F] text-white py-2 px-4 rounded">Shop Now</Link>
        </div>
      </div>

      {/* Product Showcase */}
      <section className="text-center mt-12">
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-2">Browse The Range</h2>
          <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="flex justify-between space-x-4">
          <div className="flex-1 p-4 border border-gray-300 rounded text-center">
            <Image src="/img3.png" alt="Dining" width={480} height={480} className="mx-auto mb-4" />
            <p className="font-bold text-lg">Dining</p>
          </div>
          <div className="flex-1 p-4 border border-gray-300 rounded text-center">
            <Image src="/img4.png" alt="Living" width={480} height={480} className="mx-auto mb-4" />
            <p className="font-bold text-lg">Living</p>
          </div>
          <div className="flex-1 p-4 border border-gray-300 rounded text-center">
            <Image src="/img5.png" alt="Bedroom" width={480} height={480} className="mx-auto mb-4" />
            <p className="font-bold text-lg">Bedroom</p>
          </div>
        </div>
      </section>
      <section>
      <Example/>
      </section>
      {/* Image Grid */}
      <section className=" mt-[100px]">
        <h4 className="text-xl text-center text-gray-800">Share you Setup with us</h4>

        <h1 className="text-[40px] text-center font-bold text-[#3A3A3A]">#FuniroFurniture</h1>
        <Image
                src="/fu.png"
                alt="logo"
                width={780}
                height={500}
                className="w-[1350px] h-[500px] mt-6"
              />
        
      </section>
      <Features/>
    </div>

  );
}
