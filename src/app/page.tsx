// app/page.tsx
import Features from "./component/features";
import Link from 'next/link';

export default function Page() {
  return (
    <div className="flex flex-col gap-5 justify-center items-center mt-[140px] w-full">
      <Link
        className="bg-[#F5E1C8] w-[200px] h-[50px] text-[#8B4513] text-[20px] border-2 border-[#D2B48C] rounded-md text-center flex items-center justify-center"
        href="./home"
      >
        Home
      </Link>
      <Link
        className="bg-[#F5DEB3] w-[200px] h-[50px] text-[#8B4513] text-[20px] border-2 border-[#DEB887] rounded-md text-center flex items-center justify-center"
        href="./shop"
      >
        Shop
      </Link>
      <Link
        className="bg-[#FAEBD7] w-[200px] h-[50px] text-[#8B4513] text-[20px] border-2 border-[#FFE4B5] rounded-md text-center flex items-center justify-center"
        href="./single"
      >
        Single Product
      </Link>
      <Link
        className="bg-[#FFE4C4] w-[200px] h-[50px] text-[#8B4513] text-[20px] border-2 border-[#D2B48C] rounded-md text-center flex items-center justify-center"
        href="./cart"
      >
        Cart
      </Link>
      <Link
        className="bg-[#FDF5E6] w-[200px] h-[50px] text-[#8B4513] text-[20px] border-2 border-[#DEB887] rounded-md text-center flex items-center justify-center"
        href="./checkout"
      >
        Checkout
      </Link>
      <Link
        className="bg-[#FFF8DC] w-[200px] h-[50px] text-[#8B4513] text-[20px] border-2 border-[#D2B48C] rounded-md text-center flex items-center justify-center"
        href="./contact"
      >
        Contact
      </Link>
      <Link
        className="bg-[#FFEBCD] w-[200px] h-[50px] text-[#8B4513] text-[20px] border-2 border-[#DEB887] rounded-md text-center flex items-center justify-center"
        href="./cartSlider"
      >
        Cart Slider
      </Link>
      <Link
        className="bg-[#F5F5DC] w-[200px] h-[50px] text-[#8B4513] text-[20px] border-2 border-[#D2B48C] rounded-md text-center flex items-center justify-center"
        href="./product"
      >
        Product Comparison
      </Link>
      
      {/* Features Component */}
      <Features />
    </div>
  );
}
