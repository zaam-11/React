const Aboutm=()=>{
    return(
        <>
       <div class="service bg-gray-200 py-20">
            <h1 class="text-3xl md:text-4xl font-bold text-center mt-10 md:mt-20">Our Services</h1>
            <p class="text-base md:text-xl font-thin text-center mx-4">
                uis sed odio sit amet nibh vulputate cursus a sit amet mauris morbi accumsan<br />
                ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio.
            </p>
        </div>

        {/* <!-- boxs section --> */}

    <div class="container mt-20  grid grid-cols-1 sm:grid-cols-3 gap-5 sm:flex-col  text-center mr-5 pb-10 ">
        <div class="shadow-lg hover:scale-90 transition bg-light-300 bg-white" data-aos="flip-left">
           <div class="container  flex justify-center my-2">
            <ion-icon class="bg-orange-300 text-2xl p-2 text-white" name="beer-outline"></ion-icon>
           </div>
            <h2 class="text-5 font-bold text-center ">anivation skills</h2>
            <p class="text-3 font-thin text-center">Lorem ipsum dolor sit amet consectetur<br />
                Lorem ipsum dolor sit amet consectetur<br />
                Lorem ipsum dolor sit amet consectetur<br />.</p>
        </div>
 {/* box2 */}

        <div class="shadow-lg hover:scale-90 transition bg-light-300 bg-white" data-aos="flip-left">
           <div class="container  flex justify-center my-2">
            <ion-icon class="bg-orange-300 text-2xl p-2 text-white" name="beer-outline"></ion-icon>
           </div>
            <h2 class="text-5 font-bold text-center ">anivation skills</h2>
            <p class="text-3 font-thin text-center">Lorem ipsum dolor sit amet consectetur<br />
                Lorem ipsum dolor sit amet consectetur<br />
                Lorem ipsum dolor sit amet consectetur<br />.</p>
        </div>
{/* box3 */}

        <div class="shadow-lg hover:scale-90 transition bg-light-300 bg-white" data-aos="flip-left">
           <div class="container  flex justify-center my-2">
            <ion-icon class="bg-orange-300 text-2xl p-2 text-white" name="beer-outline"></ion-icon>
           </div>
            <h2 class="text-5 font-bold text-center ">anivation skills</h2>
            <p class="text-3 font-thin text-center">Lorem ipsum dolor sit amet consectetur<br />
                Lorem ipsum dolor sit amet consectetur<br />
                Lorem ipsum dolor sit amet consectetur<br />.</p>
        </div>
        </div>

        {/* <!-- ......search btn...... --> */}
    <div class="serch flex justify-center  ">
        <input class="border-2 border-black   py-2 mt-20 w-3/5  rounded-full text-center w-full md:w-3/5" type="text" value="" placeholder="Write what you are looking for here"/>
    </div>
     <div class="srch flex justify-center pt-7">
       <a class="bg-[#336666] text-white text-center w-1/5 w-full md:w-1/5 justify-center py-2 px-2 shadow-lg rounded-lg hover:bg-orange-300" href="background.jpg">Search</a>
     </div>

     {/* products */}
     <div class="images grid grid-cols-1 md:grid-cols-3 gap-4 mt-20 mx-20 mb-20 max-w-screen-2xl justify-center ">
                 <div class="img1">
                    <img  src="img/headphone.png" alt="" class="w-full h-auto hover:scale-90 transition  rounded-lg" data-aos="flip-left"/>
                    <p class="pt-3">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus, distinctio!</p>
                 </div>
          {/* img2 */}
                 <div class="img2">
                    <img  src="img/headphone3.jpg" alt="" class="w-full h-auto hover:scale-90 transition  rounded-lg" data-aos="flip-left"/>
                    <p class="pt-3">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus, distinctio!</p>
                 </div>
          {/* img3 */}
                 <div class="img3">
                    <img  src="img/headphone.png" alt="" class="w-full h-auto hover:scale-90 transition  rounded-lg" data-aos="flip-left"/>
                    <p class="pt-3">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus, distinctio!</p>
                 </div>
                 </div>
        
        </>
    )
   
}

export default Aboutm;