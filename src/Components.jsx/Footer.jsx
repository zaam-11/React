function Footer(){
    return(
        <>
       <div class="container  ">
        <div class="bg-[#37b580] flex justify-center gap-20 py-6 w-full  shadow-lg flex-col md:flex-row p-10">
          <img src="img/logo.png" alt="" />
   
        </div>
   {/* <!-- links --> */}
   <div class="links flex bg-[#37b580] pl-32 gap-6 md:gap-10 py-6 w-full  shadow-lg text-white flex-col md:flex-row ">
    <div class="quicklinks">
      <h3 class="font-bold text-[#3e3e3e]">Quick Links</h3>
     <div>
     <a href="home"> Home Page</a>
     </div>
     <div>
     <a href="Contact">Contact</a>
     </div>
     <div>
     <a href="click.html">  Shop Now</a>
     </div>
    </div>

     {/* <!-- Get suport --> */}
   <div class="get suport">
    <h3 class="font-bold text-[#3e3e3e]"> Get Suport</h3>
   <div>
   <a href="home"> My acount</a>
   </div>
    <div>
    <a href="Contact">order history</a>
    </div>
   <div>
   <a href="Shop">  payment</a>
   </div>
   </div>

    {/* <!-- follow us --> */}
    <div class="follow us">
      <h3 class="font-bold text-[#3e3e3e]">Follow Us</h3>
     <div>
       <a href="home"> Facbook</a>
    <div>
    <a href="Contact">WhatsApp</a>
    </div>
      <a href="Shop">  instagram</a>
     </div>
    </div>

<div className="flex gap-5 pl-32 hidden md:flex">
<img className="h-10" src="img/payment-1.png" alt="" />
  <img className="h-10" src="img/payment-2.png" alt="" />
  <img className="h-10" src="img/payment-3.png" alt="" />
  <img className="h-10" src="img/payment-4.png" alt="" />
  <img className="h-10" src="img/payment-5.png" alt="" />
</div>

   </div>


        </div>

      </>
    )
}

export default Footer;