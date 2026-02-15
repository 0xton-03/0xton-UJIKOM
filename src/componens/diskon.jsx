
import { numberToIDR } from "@/hook/numberTOIDR"
import React from "react"

const Diskon = (props)=> {
    const totalDiskon = (props.harga * props.diskon)/100
    const totalHarga = (props.harga - totalDiskon)
    if (!props.diskon || !props.harga) return null
    return (
        <div className="w-full">
            {
                props.diskon >= 100 ? (
                    <p className="text-center text-2xl">
                            diskon tidak valid
                    </p>
                ): (
                    <div className="flex flex-col gap-2 items-end">
                        <div className="w-full text-lg font-bold flex justify-between">
                            <span>
                                Discount :
                            </span>
                            <span>
                                {props.diskon}%
                            </span>
                        </div>
                        <span className="w-full text-lg font-bold flex justify-between">
                            <span>
                                potongan harga :
                            </span>
                            <span>
                                - {numberToIDR(totalDiskon)}
                            </span>

                        </span>
                        <div className="flex justify-end items-end">
                            <span className="text-sm text-stone-950 line-through">
                                -{numberToIDR(props.harga)}
                            </span>
                            <span className="text-3xl font-bold">
                                {numberToIDR(totalHarga)}
                            </span>
                        </div>
                    </div>
                )
            }

        </div>
    )

}
export default Diskon