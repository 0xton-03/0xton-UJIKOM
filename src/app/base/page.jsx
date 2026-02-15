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
            
                <Header to="/" cta="asd" />

                <Card className="max-w-80 mx-auto mt-20">
                    <CardHeader>
                        <h1 className="text-2xl font-bold text-center">
                            Program Hitung diskon
                        </h1>
                    </CardHeader>
                    <CardContent className="flex flex-col gap-4">
                        <div>
                            <Input placeholder={"Harga Barang"} onChange={(e)=>setHarga(e.target.value)}/>
                        </div>
                        <div>
                            <Input placeholder={"Diskon Barang"} onChange={(e)=>setDiskon(e.target.value)}/>
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Diskon diskon={diskon} harga={harga}/>
                    </CardFooter>
                </Card>
        </div>
)
}
export default PageBaseApp