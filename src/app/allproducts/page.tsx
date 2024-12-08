import Image from "next/image";

export default function Allproducts (){
    const allproducts = [
        {
          id: 1,
          img: "/item1.png",
        },
        {
          id: 2,
          img: "/item2.png",
        },
        {
          id: 3,
          img: "/item3.png",
        },
        {
          id: 4,
          img: "/item4.png",
        },
        {
          id: 5,
          img: "/item5.png",
        },
        {
          id: 6,
          img: "/item6.png",
        },
      ];
    return(
        <div className="max-w-[1440px] mx-auto px-4 py-6 flex   gap-6 ">
            <div className="max-w-[1440px] w-[200px] md:w-260px mx-auto px-1 md:px-4">
                <p className="text-[15px]">Shoes</p>
                <p className="text-[15px]">Sports Bras</p>
                <p className="text-[15px]">Tops & T-Shirts</p>
                <p className="text-[15px]">Hoodies & Sweatshirts</p>
                <p className="text-[15px]">Jackets</p>
                <p className="text-[15px]">Trousers & Tights</p>
                <p className="text-[15px]">Shorts</p>
                <p className="text-[15px]">Tracksuits</p>
                <p className="text-[15px]">Jumpsuits & Rompers</p>
                <p className="text-[15px]">Skirts & Dresses</p>
                <p className="text-[15px]">Socks</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
                {allproducts.map((allproduct) => (
                    <div
                        key={allproduct.id}
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-center bg-white rounded-lg shadow-md ">
                            <div className=" w-[174px] md:w-[348px] xl:w-[348px] h-[266.5px] md:h-[355px] xl:h-[533px] md:mb-40 ">
                                <Image
                                 src={allproduct.img}
                                 alt="items"
                                  width={348}
                                  height={533}
                                 className="rounded-lg"
                                />
                            </div>
                        
            
                    </div>
                 ))}
            </div>
    
        </div>
    )
}


