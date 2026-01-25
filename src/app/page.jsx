"use client"

import BarangCard from "@/componens/barang";
import Ton from "@/componens/footer";
import Header from "@/componens/header"
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { Drawer, DrawerContent, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer";
import { ScrollArea } from "@/components/ui/scroll-area";
import axios from "axios";
import { ShoppingBag } from "lucide-react";
import React, { useEffect } from "react";




// page home adalah komponen
const PageHome = ()=>{
    const [data,setData] = React.useState([])
    
    const daftarHero =[
        "https://static.vecteezy.com/system/resources/previews/043/340/156/non_2x/3d-winter-seasonal-clothing-collection-ads-banner-concept-poster-card-vector.jpg"
    ]

    const listHero =[
        {
            url:"https://static.vecteezy.com/system/resources/previews/032/207/297/non_2x/winter-clothes-and-warm-accessories-banner-cozy-winter-banner-hand-drawn-warm-clothes-in-doodle-style-casual-warm-clothes-poster-cozy-winter-with-elements-winter-wardrobe-accessories-vector.jpg",
            text:"outfit-winter",
            cta:"limitededition",
            link:"/product/outfit"

        }
    ]
       const [Keranjang,setKeranjang] = React.useState([])
       const [diskon,setDiskon] = React.useState(50)
       const [potongHarga,setPotonganHarga] = React.useState(0)
       const [totalHarga,setTotalHarga] = React.useState(0)
       const [checkoutPrice,setCheckoutPrice] = React.useState(0)
    // state program diskon
    
    React.useEffect(()=>{
        setTotalHarga(Keranjang.reduce((acc,data)=>(acc+=data.price),0))
        setPotonganHarga(totalHarga*diskon/100)
        setCheckoutPrice(totalHarga-potongHarga)

    },[diskon,potongHarga,totalHarga,Keranjang])
// denagn aray 0 hanya satu kali
    useEffect(()=>{
      const fethcingData = async (path)=>{
          const response = await axios.get(`https://fakestoreapi.com/${path}`)
          console.log (response.data)
          setData(response.data)
      }
      fethcingData('products')

    },[])
 const handleKeranjang =(item)=>{
        setKeranjang([...Keranjang,item])    
    }

  return(
        <div>
<section className="fixed bottom-10 right-10">
    <Drawer >
            <DrawerTrigger>
                <Button>
                    <ShoppingBag/>
                    {Keranjang?.length}
                </Button>
                <DrawerContent>
                    <DrawerHeader >
                        <DrawerTitle>
                            KERANJANG
                        </DrawerTitle>
                    </DrawerHeader>
                    <ScrollArea className="h-[30vh] w-full">
                        {
                            Keranjang.map((item,i)=>{
                                return(
                                    <div key={i} className="flex justify-between gap-8 p-4 ">
                                        <span>
                                            {item.title}
                                        </span>
                                        <span>
                                            {item.price}
                                        </span>
                                    </div>
                                )
                            })
                          }  
                    </ScrollArea>
                    <DrawerFooter>
                        <div className="flex justify-between">
                            <span className=" text-xl font-extrabold text-black">Total Harga</span>
                            <span className="text-xl font-semibold text-black ">${totalHarga}</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-xl font-semibold text-black "> Diskon</span>
                            <span className="text-xl font-semibold text-black ">{diskon}%</span>
                        </div>
                        <div className="flex justify-end gap-5 items-end">
                            <span className="text-xl font-extrabold text-neutral-400 line-through">{checkoutPrice}</span>
                            <span className="text-3xl font-extrabold text-black ">$ {totalHarga} </span>
                        </div>
                        <Button className={"bold"}>
                            CHECKOUT
                        </Button>
                    </DrawerFooter>
               </DrawerContent>
            </DrawerTrigger>
         </Drawer>
</section>
         
         <div>
            <Header/>
         </div>

      
          <Carousel>
                <CarouselContent>
                    {daftarHero.map ((item,i)=>{
                        return(
                             <CarouselItem>
                                <img src= {item} alt="gamba1" className="w-full h-screen object-cover" />
                                </CarouselItem>
                        )
                    })}
                </CarouselContent>
            </Carousel>
           <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            
            {
                data?.map((item,i)=>{
                    return(
                        <div key={i} onClick={()=>handleKeranjang(item)}>
                       <BarangCard  barang={item}/>
                
                        </div>
                    )
                })
            }
            
            



          <Card className={`max-w-2xl mx-auto`}>
            <CardHeader>
              <CardTitle> Product</CardTitle>
            </CardHeader>
            <CardContent>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro recusandae atque aliquam perferendis magni, quis consectetur ad fugit repudiandae ratione voluptatum obcaecati necessitatibus, illo velit! Fugit unde porro deserunt provident modi! Sunt, cupiditate officia repellat aut, cumque saepe quo nulla veniam quisquam deserunt tempora molestiae consequatur! Explicabo voluptates id similique?
            </CardContent>
              <CardFooter>
                <Button>BUY</Button>
                </CardFooter>


          </Card>








           </div>
          
        </div>
         

        
    )
}

export default PageHome ;