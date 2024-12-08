import Image from "next/image";

export default function Footer() {
  return (
    <div className="max-w-[1440px] w-full bg-black text-white flex flex-col items-center justify-center mt-5 px-4 sm:px-8 md:px-12 mx-auto">
      
      
      <div className="w-full flex flex-col md:flex-row justify-between gap-8 md:gap-0 mt-8">
        
       
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-[1170px]">
          
          
          <div className="grid gap-y-3">
            <h1 className="pb-5 text-[14px] font-bold">Find A Store</h1>
            <p className="text-[12px] font-bold">Become A Member</p>
            <p className="text-[12px] font-bold">Sign Up for Email</p>
            <p className="text-[12px] font-bold">Send Us Feedback</p>
            <p className="text-[12px] font-bold">Student Discounts</p>
          </div>

         
          <div className="grid gap-y-3">
            <h1 className="pb-5 text-[14px] font-bold">Get Help</h1>
            <p className="text-[12px] text-custom2">Order Status</p>
            <p className="text-[12px] text-custom2">Delivery</p>
            <p className="text-[12px] text-custom2">Returns</p>
            <p className="text-[12px] text-custom2">Payment Options</p>
            <p className="text-[12px] text-custom2">Contact Us On Nike.com Inquiries</p>
            <p className="text-[12px] text-custom2">Contact Us On All Other Inquiries</p>
          </div>

         
          <div className="grid gap-y-3">
            <h1 className="pb-5 text-[14px] font-bold">About Nike</h1>
            <p className="text-[12px] text-custom2">News</p>
            <p className="text-[12px] text-custom2">Careers</p>
            <p className="text-[12px] text-custom2">Investors</p>
            <p className="text-[12px] text-custom2">Sustainability</p>
          </div>
        </div>

        
        <div className="flex justify-center md:w-[337px] md:h-[48px] md:justify-end">
          <Image
            className="pt-4"
            src="/socialicons.png"
            alt="Social media icons"
            width={337}
            height={37}
          />
        </div>
      </div>

      
      <div className="w-full mt-16 pt-4 pb-6 flex flex-col sm:flex-row justify-between items-center text-center sm:text-left gap-4">
        
        
        <div className="flex items-center gap-4">
          <Image
            src="/location.png"
            alt="Location icon"
            width={18}
            height={15}
          />
          <p className="text-[11px]">India</p>
          <p className="text-[11px] opacity-40">&copy; 2023 Nike, Inc. All Rights Reserved</p>
        </div>

       
        <div className="flex flex-wrap justify-center sm:justify-end gap-4 sm:gap-8 text-[11px] opacity-40">
          <p>Guides</p>
          <p>Terms of Sale</p>
          <p>Terms of Use</p>
          <p>Nike Privacy Policy</p>
        </div>
      </div>
    </div>
  );
}
