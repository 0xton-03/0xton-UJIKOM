"use client"
import Diskon from "@/componens/diskon"
import Header from "@/componens/header"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import React from "react"
import { useState } from "react"

const PageBaseApp = ()=>{
    const [diskon, setDiskon] = useState()
    const [harga, setHarga] = useState()
return (
        <div className="">
            
                <Header to="/" cta="Home" />

                <Card className="max-w-2xl mx-auto mt-20 shadow-2xl border-2 ">
                    <CardHeader>
                        <h1 className="text-2xl font-bold text-center">
                            Program Hitung diskon
                        </h1>
                    </CardHeader>
                    <CardContent className="flex flex-col gap-8 p-12">
                        <div>
                            <Input placeholder={"Harga Barang"} onChange={(e)=>setHarga(e.target.value)} className="h-14 text-xl px-6"/>
                        </div>
                        <div>
                            <Input placeholder={"Diskon Barang (%)"} onChange={(e)=>setDiskon(e.target.value)}/>
                        </div>
                    </CardContent >
                    <CardFooter className="p-6 pt-0">
                        <Diskon diskon={diskon} harga={harga}/>
                    </CardFooter>
                </Card>
        </div>
)
}
export default PageBaseApp