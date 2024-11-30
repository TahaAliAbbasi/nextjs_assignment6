import Image from "next/image"
export default function Main(){
    return(
        <div className="flex flex-col items-center justify-center p-3 m-3  border-2 border-blue-800 shadow-md shadow-blue-900 rounded-xl w-60  bg-gray-400 bg-opacity-5 " >
            
            <Image className="rounded-xl lg:blur-sm hover:blur-0" src="/pic.jpg" alt="random picture for main" width={200} height={200} />
           
            
            <h2 className="text-white text-xl mt-6" >Hover image to view :-</h2>
            <p className="text-white text-base mt-4" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque asperiores fugiat voluptatum vel.</p>
              
        </div>
    )
}