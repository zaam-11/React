const Hero=()=>{
    return(
        <>
        {/* Hero */}
        <div class="header">
        <div class="img bg-[url('img/shop-hero.jpg')] bg-cover bg-center h-screen w-full">
          <h3 class="text-white text-center pt-[160px] text-6xl font-light font-[Roboto]">Products By Viasu
           
          </h3>
          <p class="text-white text-center text-5xl pt-6 font-thin text-8xl">Our Shop</p>
        </div>
      </div>
 {/* End Hero */}

 <div class="container flex justify-center mx-1 ">
        <div id="productimgs" class="grid grid-cols-1 md:grid-cols-4 gap-5 text-center my-20 mx-2">
          <img src="img/slider-slide-3.jpg" alt="" />
          <img src="img/slider-slide-2.jpg" alt="" />
          <img src="img/produc1.jpg" alt="" />
          <img src="img/instagram-1.jpg" alt="" />
           
        </div>
    </div>


    <div class="container flex mx-6 gap-5 flex-col md:flex-row">
     <div class="img">
      <img src="img/img-about.jpg" alt=""/>
      <h3 class="bg-[#F3E3DE]  w-32 px-2 py-2 font-[Poppins] text-4xl mb-20">ABOUT</h3>
     </div>
      <div class="text pl-10 pt-12">
        <h3 class="font-[Roboto] text-xl">viasun cosmetics</h3>
        <h2 class="py-4 text-3xl font-bold font-[Roboto]  ">Making Every Face Perfect</h2>
        <div>
        <p class="font-[Poppins]  ">Enim venia quis nostrud exrcit ulamco laboris nst aliquip com</p> 
        </div>
          <div>
          <div>
          conseq reprehen derit fugiat nula pariatur excpteur sint ipsum
            </div> 
          <div className="pb-20">
          conseq reprehen derit fugiat nula pariatur excpteur sint ipsum

          </div>
          </div>
           <a class="mt-30 bg-[#EA5A31] text-white px-7 py-4 hover:bg-[#222222]" href="#">VIEW COLLECTION</a>
      </div>
    </div>
     
        </>
    )
}

export default Hero;