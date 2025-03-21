const Main=()=>{
    return (
        <>

        {/* Hero */}
             <div class="header">
        <div class="img bg-[url('img/home-hero1.jpg')] bg-cover bg-center h-screen w-full">
          <h3 class="text-white text-center pt-[160px] text-6xl font-light font-[Roboto]">Look <span className="text-gray-500">&</span> Feel Modern</h3>
          <p class="text-white text-center  pt-6 font-thin text-5xl">Our Product</p>
        </div>
      </div>
       {/* End Hero */}
      {/* Start Product 1 */}
      <div className="flex gap-9 flex-col md:flex-row">
      <div class="bg-[#fff] shadow-lg md:my-20 pb-10 md:w-4/10 mx-1 md:ml-20  ">
        <h2 class="pl-20 pt-10">Hair care</h2>
        <h3 class="pl-20 py-3 text-3xl">Hair Style Gel</h3>
        <h5 class="text-center py-3 text-xl mx-10 pb-12 ">Enim venia quis nostrud exrcit ulamco laboris com  conseq reprehen derit fugiat nula pariatur sint   ipsum occaecat. Lorem ipsum dolor sit am etur   adipisicing elit sed tempor.</h5>
        <button class="rounded-lg bg-[#EA5A31] px-4 py-6 cursor-pointer w-full hover:bg-[#222222] text-white"> View Collection</button>
                    
      </div>
      <div class="img">
        <img class="w-[470px] my-20" src="img/product1.1.jpg" alt="product name"></img>
      </div>
      </div>

      {/* // end product 1 */}
      <div className="flex gap-9 flex-col md:flex-row">
      <div class="bg-[#fff] shadow-lg md:my-20 pb-10 md:w-4/10 mx-1 md:ml-20  ">
        <h2 class="pl-20 pt-10">Creams</h2>
        <h3 class="pl-20 py-3 text-3xl">Anti-Aging Cream</h3>
        <h5 class="text-center py-3 text-xl mx-10 pb-12 ">Enim venia quis nostrud exrcit ulamco laboris com  conseq reprehen derit fugiat nula pariatur sint   ipsum occaecat. Lorem ipsum dolor sit am etur   adipisicing elit sed tempor.</h5>
        <button class=" w-6 rounded-lg bg-[#EA5A31] px-4 py-6 cursor-pointer w-full hover:bg-[#222222] text-white"> View Collection</button>
                    
      </div>
      <div class="img">
        <img class="w-[470px] my-20" src="img/product2.2.jpg" alt="product name"></img>
      </div>
      </div>

      {/* end product2 */}

      <div className="flex gap-9 flex-col md:flex-row">
      <div class="bg-[#fff] shadow-lg md:my-20 pb-10 md:w-4/10 mx-1 md:ml-20  ">
        <h2 class="pl-20 pt-10">A Skinny</h2>
        <h3 class="pl-20 py-3 text-3xl">A Skinny Lotion</h3>
        <h5 class="text-center py-3 text-xl mx-10 pb-12 ">Enim venia quis nostrud exrcit ulamco laboris com  conseq reprehen derit fugiat nula pariatur sint   ipsum occaecat. Lorem ipsum dolor sit am etur   adipisicing elit sed tempor.</h5>
        <button class=" w-6 rounded-lg bg-[#EA5A31] px-4 py-6 cursor-pointer w-full hover:bg-[#222222] text-white"> View Collection</button>
                    
      </div>
      <div class="img">
        <img class="w-[470px] my-20" src="img/product3.jpg" alt="product name"></img>
      </div>
      </div>

      {/* end product3 */}

 
        </>
        
    )
  }


export default Main;