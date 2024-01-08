import React from 'react'
import Girl from './assets/girl.png'
import Panera from './assets/Panera.png'
import Egg from './assets/eggRole.png'
import Burger from './assets/burger.png'
import Chicken from './assets/chicken.png'
import EggG from './assets/eggGravy.png'
import Noodles from './assets/noodles.png'
import Fish from './assets/fishfry.png'
export default function Food() {
  return (
    <>
        <head>
        <script src="https://cdn.tailwindcss.com"></script>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
        </head>

        <body>

        <div className="h-screen w-screen">
        <div class="flex">
         <div class="flex-cols bg-gray-300 w-[8rem] h-[54rem]">
            <div class="flex flex-col justify-center items-center">
            <i class="fa-solid fa-bars mt-[15rem] hover:bg-orange-300 cursor-pointer"></i>
            <i class="fa-solid fa-heart mt-[4rem] hover:bg-orange-300 cursor-pointer"></i>
            <i class="fa-solid fa-house mt-[4rem] hover:bg-orange-300 cursor-pointer"></i>
            <i class="fa-solid fa-book mt-[4rem] hover:bg-orange-300 cursor-pointer"></i>
            <i class="fa-solid fa-bell-concierge mt-[4rem] hover:bg-orange-300 cursor-pointer"></i>
            </div>
         </div>
    
    <div>   
    <div class="flex items-center bg-gray-300 h-[4rem] w-[50rem] ml-9 mt-2">
        
        <i class="fa-solid fa-magnifying-glass ml-8"></i>
        <input type="text" class="bg-gray-300 ml-3 w-[40rem]" placeholder="What Whould you like to eat?"></input>
        <i class="fa-solid fa-bars mr-2"></i>
        </div>
       
       
       
        <div class="relative bg-gray-300 h-[10rem] w-[50rem] mt-9 ml-9 rounded">
            <img src={Girl} alt="" className="hover:scale-125 transition duration-500 cursor-pointer"/>
           <div class="absolute top-0 bg-orange-500 w-[20rem] h-[13.7rem] rounded text-center">
            <h1 class="text-5xl mt-9">30% Off</h1>
            <h1 class="text-white text-5xl mt-3">Fitess Meals</h1>
            </div> 
        </div>
        <div class="flex gap-[4rem] mt-[6rem] ml-9">
            <h1 class="hover:underline decoration-orange-400 cursor-pointer"><i class="fa-solid fa-location-dot text-orange-500"></i>Nearby</h1>
            <h1 class="hover:underline decoration-orange-400 cursor-pointer"><i class="fa-solid fa-square-caret-up text-orange-500"></i>Promotion</h1>
            <h1 class="hover:underline decoration-orange-400 cursor-pointer"><i class="fa-solid fa-bell-concierge text-orange-500"></i>New comers</h1>
            <h1 class="hover:underline decoration-orange-400 cursor-pointer"><i class="fa-solid fa-award text-orange-500"></i>Best sellers</h1>
            <h1 class="hover:underline decoration-orange-400 cursor-pointer"><i class="fa-solid fa-star text-orange-500"></i>Top rated</h1>
            <h1 class="hover:underline decoration-orange-400 cursor-pointer"><i class="fa-solid fa-list text-orange-500"></i>All</h1>
         </div> 
         <hr class="ml-9 mt-2"></hr>
    <div class="flex">
         <div class="flex-col ml-9 gap-9 mt-9">
           <img src={Panera} alt=""/>
              <div class="flex gap-[5rem] text-xl">
                    <h1>Panera soup</h1>
                    <h1>&145</h1>
              </div>
                    <h1 class="text-gray-500">Fast-food</h1>
           <img src={Egg} alt="" class="mt-4"/>
           <div class="flex gap-[5rem] text-xl">
            <h1>Egg Role</h1>
            <h1 class="ml-8">&110</h1>
      </div>
            <h1 class="text-gray-500">Fast-food</h1>
         </div>
        
        
         <div class="flex-col ml-9 gap-9 mt-8">
            <img src={Noodles} alt=""/>
            <div class="flex gap-[7rem] text-xl">
                <h1>Noodle's</h1>
                <h1>&125</h1>
          </div>
                <h1 class="text-gray-500">Fast-food</h1>
            <img src={Fish} alt="" class="mt-4"/>
            <div class="flex gap-[5rem] text-xl">
                <h1>Fish Fry</h1>
                <h1 class="ml-8">&175</h1>
          </div>
                <h1 class="text-gray-500">Fast-food</h1>
         </div>
         
         <div class="flex-col ml-9 gap-9 mt-8">
            <img src={EggG} alt=""/>
            <div class="flex gap-[6rem] text-xl">
                <h1>Egg Gravy</h1>
                <h1>&170</h1>
          </div>
                <h1 class="text-gray-500">Fast-food</h1>
            <img src={Chicken} alt="" class="mt-4"/>
            <div class="flex gap-[5rem] text-xl">
                <h1>Chicken Role</h1>
                <h1>&145</h1>
          </div>
                <h1 class="text-gray-500">Fast-food</h1>
        </div>
    </div>    
 </div>
    
           
        <div class="bg-gray-300 ml-4 mt-1 mr-2 w-[38rem]">
                
                <div class="ml-9">
                <h1 class="text-3xl">My Order</h1>
                <h1 class="text-gray-500 mt-2">Delivery Address</h1>
                <h1 class="text-3xl">1354 Morris street
                    <button><i class="fa-solid fa-angle-down ml-9"></i></button>
                </h1>
                </div>
                  <div class="flex text-gray-500 gap-9 ml-16 mt-2">
                    <h1><i class="fa-solid fa-location-dot"></i>40mins</h1>
                    <h1><i class="fa-solid fa-clock"></i>5km</h1>
                  </div>
               <div class="bg-gray-500 w-[28rem] h-[10rem] ml-[5rem] mt-5">   
                  <div class="flex">
                    <div>
                        <img src={Burger} alt=""></img>
                    </div>
                    <div class="ml-3">
                        <h1 class="text-2xl">Burger Mozza XL</h1>
                        <h1 class="mt-3 text-xl">Extra Cheese</h1>
                        <i class="fa-solid fa-x mt-3"></i>
                    </div>
                    <div>
                        <h1 class="text-2xl ml-8">&39</h1>
                    </div>
                </div>
                </div>
            
                <div class="flex mt-9 ml-5">
                    <div>
                        <img src={Burger} alt=""/>
                    </div>
                    <div class="ml-3">
                        <h1 class="text-2xl">Burger Mozza XL</h1>
                        <h1 class="mt-3 text-xl">Extra Cheese</h1>
                        <i class="fa-solid fa-x mt-3"></i>
                    </div>
                    <div>
                        <h1 class="ml-8 text-2xl">&39</h1>
                    </div>
                </div>
                <hr class="mt-2 ml-3 mr-3 h-[0.5rem] my-2 dark:bg-gray-400"></hr>
                <div class="flex text-2xl">
                    <h1 class="ml-3">Sub Total</h1>
                    <h1 class="ml-auto mr-3">&162</h1>
                </div>
                <div class="flex text-2xl">
                    <h1 class="ml-3">Delivery App</h1>
                    <h1 class="ml-auto mr-3">&9</h1>
                </div>
                <hr class="mt-5 ml-3 mr-3 h-[0.5rem] my-2 dark:bg-gray-400"></hr>
                <div class="flex text-2xl mt-5">
                    <h1 class="ml-3">Total</h1>
                    <h1 class="ml-auto mr-3">&171</h1>
                </div>
                <button class="border bg-orange-500 text-2xl w-[90%] h-[4rem] ml-7 text-center rounded mt-7">Check Out</button>
                                 
 
 
 
 
 
 </div>
 
    </div>


    </div>     
            
        </body> 
  </>
  )
}
