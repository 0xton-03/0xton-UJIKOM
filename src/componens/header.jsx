"use client"
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";


const Header = (props)=>{
    const router = useRouter()
    return(
        <div className="bg-[#2B1B14] px-2 py-5 flex justify-between font-bold">
           <h1 className="text-3xl italic font-mono  text-[#C8A46A] font-extrabold">
                 🆁🄸🆉🄷🅾🄿
           </h1>
           <Button onClick={()=>router.push(props.to)}>
              {props.cta}
           </Button>
        </div>
    )
}


export default Header;