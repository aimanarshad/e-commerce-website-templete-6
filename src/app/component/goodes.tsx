import Image from "next/image"

export default function Example(){
    return(
        <>
        <section className="w-full max-w-[1236px] mx-auto mt-[50px]">
  <h1 className="text-[60px] text-center font-bold mb-[30px]">Related Goods</h1>

  <div className="flex flex-wrap justify-between gap-[40px]">
    {/* Row 1 */}
    <div className="flex justify-between gap-[40px] w-full">
      <div className="w-[285px] h-[446px] flex flex-col justify-between">
        <Image
          src="/i1.png"
          alt="Syltherine"
          width={285}
          height={300}
          className="object-cover w-full h-[300px]"
        />
        <div className="bg-[#F4F5F7] p-4">
          <h4 className="text-[24px] font-bold">Syltherine</h4>
          <span className="text-[16px]">Stylish cafe chair</span>
          <p className="text-xl font-semibold mt-2">
            Rp 2.500.000
            <span className="ml-2 text-base font-normal line-through">
              Rp 3.500.000
            </span>
          </p>
        </div>
      </div>

      <div className="w-[285px] h-[446px] flex flex-col justify-between">
        <Image
          src="/carts.jpeg"
          alt="Laviosa"
          width={285}
          height={300}
          className="object-cover w-full h-[300px]"
        />
        <div className="bg-[#F4F5F7] p-4">
          <h4 className="text-[24px] font-bold">Laviosa</h4>
          <span className="text-[16px]">Stylish cafe chair</span>
          <p className="text-xl font-semibold mt-2">
            Rp 2.500.000
            <span className="ml-2 text-base font-normal line-through">
              Rp 3.500.000
            </span>
          </p>
        </div>
      </div>

      <div className="w-[285px] h-[446px] flex flex-col justify-between">
        <Image
          src="/i3.jpg"
          alt="Lotilo"
          width={285}
          height={300}
          className="object-cover w-full h-[300px]"
        />
        <div className="bg-[#F4F5F7] p-4">
          <h4 className="text-[24px] font-bold">Lotilo</h4>
          <span className="text-[16px]">Luxury big sofa</span>
          <p className="text-xl font-semibold mt-2">
            Rp 700.0000
            <span className="ml-2 text-base font-normal line-through">
              Rp 3.500.000
            </span>
          </p>
        </div>
      </div>

      <div className="w-[285px] h-[446px] flex flex-col justify-between">
        <Image
          src="/i4.png"
          alt="Respira"
          width={285}
          height={300}
          className="object-cover w-full h-[300px]"
        />
        <div className="bg-[#F4F5F7] p-4">
          <h4 className="text-[24px] font-bold">Respira</h4>
          <span className="text-[16px]">Outdoor bar table and stool</span>
          <p className="text-xl font-semibold mt-2">
            Rp 500.0000
            <span className="ml-2 text-base font-normal line-through">
              Rp 3.500.000
            </span>
          </p>
        </div>
      </div>
    </div>

    {/* Row 2 */}
    <div className="flex justify-between gap-[40px] w-full mt-[40px]">
      <div className="w-[285px] h-[446px] flex flex-col justify-between">
        <Image
          src="/sofa5.jpg"
          alt="Ergomo"
          width={285}
          height={300}
          className="object-cover w-full h-[300px]"
        />
        <div className="bg-[#F4F5F7] p-4">
          <h4 className="text-[24px] font-bold">Grifo</h4>
          <span className="text-[16px]">all mug</span>
          <p className="text-xl font-semibold mt-2">
            Rp 1.500.000
            <span className="ml-2 text-base font-normal line-through">
              Rp 2.800.000
            </span>
          </p>
        </div>
        
      </div>
      <div className="w-[285px] h-[446px] flex flex-col justify-between">
        <Image
          src="/sofa6.jpg"
          alt="Ergomo"
          width={285}
          height={300}
          className="object-cover w-full h-[300px]"
        />
        <div className="bg-[#F4F5F7] p-4">
          <h4 className="text-[24px] font-bold">Muggo</h4>
          <span className="text-[16px]">Modern desk chair</span>
          <p className="text-xl font-semibold mt-2">
            Rp 1.800.000
            <span className="ml-2 text-base font-normal line-through">
              Rp 2.800.000
            </span>
          </p>
        </div>
        
      </div>
      <div className="w-[285px] h-[446px] flex flex-col justify-between">
        <Image
          src="/sofa7.png"
          alt="Ergomo"
          width={285}
          height={300}
          className="object-cover w-full h-[300px]"
        />
        <div className="bg-[#F4F5F7] p-4">
          <h4 className="text-[24px] font-bold">Pingky</h4>
          <span className="text-[16px]">cute bed set</span>
          <p className="text-xl font-semibold mt-2">
            Rp 7000.000
            <span className="ml-2 text-base font-normal line-through">
              Rp 2.800.000
            </span>
          </p>
        </div>
        
      </div>
      <div className="w-[285px] h-[446px] flex flex-col justify-between">
        <Image
          src="/sofa8.png"
          alt="Ergomo"
          width={285}
          height={300}
          className="object-cover w-full h-[300px]"
        />
        <div className="bg-[#F4F5F7] p-4">
          <h4 className="text-[24px] font-bold">Potty</h4>
          <span className="text-[16px]">small mug</span>
          <p className="text-xl font-semibold mt-2">
            Rp 5000.000
            <span className="ml-2 text-base font-normal line-through">
              Rp 2.800.000
            </span>
          </p>
        </div>

      </div>


      
    </div>
  </div>
  
</section>

        </>
    )
}