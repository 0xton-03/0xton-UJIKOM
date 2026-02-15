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
import daftarBarang from "./daftar barang/daftarBarang.json";
import Diskon from "@/componens/diskon";
import { Input } from "@/components/ui/input";



// page home adalah komponen
const PageHome = ()=>{
    const data = daftarBarang
         const daftarHero = ["/benner/3.jpg", "/benner/2-copy.png", ]

       const [Keranjang,setKeranjang] = React.useState([])
       const [diskon,setDiskon] = React.useState(0)
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
            </DrawerTrigger>
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
                        <Input placeHolder="Masukan Diskon" onChange = {(event)=> setDiskon(event.target.value)}>
                        </Input>
                        <Diskon diskon = {diskon} harga = {Keranjang.reduce((acc,data)=>(acc+=data.price),0)}>

                        </Diskon>
                    </DrawerFooter>
               </DrawerContent>
         </Drawer>
</section>
         
         <div>
            <Header to = "/base" cta ="layout"/>
         </div>

      
          <Carousel>
                <CarouselContent>
                    {daftarHero.map ((item,i)=>{
                        return(
                             <CarouselItem>
                                <img src= {item} alt="gamba1" className="w-full object-cover" />
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
            
            



          {/* <Card className={`max-w-2xl mx-auto`}>
            <CardHeader>
              <CardTitle> Product</CardTitle>
            </CardHeader>   
            <CardContent>
             Website ini sebuah komposisi fashion pria bernuansa luxury streetwear yang kuat, gelap, dan penuh karakter. Beragam item fashion premium ditata secara artistik di atas meja kayu bergaya vintage, menciptakan kesan eksklusif dan berkelas. Dominasi warna hitam, cokelat tua, dan aksen metal menghadirkan aura maskulin, elegan, dan edgy yang identik dengan gaya pria modern berjiwa bebas. Jaket, hoodie bergrafis gothic, tas kulit mewah, sepatu boots dan sneakers hitam mengilap berpadu dengan aksesoris seperti ikat pinggang, jam, parfum, dan celana berdetail bordir, membentuk satu kesatuan gaya yang tegas dan berani. Keseluruhan visual ini memancarkan citra gaya hidup pria premium percaya diri, stylish, dan penuh statement sangat cocok untuk menggambarkan identitas fashion kelas atas yang eksklusif dan berkarakter. 
            </CardContent>
              <CardFooter>
                <Button>BUY</Button>
                </CardFooter>


          </Card> */}








           </div>
          
        </div>
         

        
    )
}

export default PageHome ;