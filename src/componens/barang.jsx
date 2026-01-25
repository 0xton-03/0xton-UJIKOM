import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { Ghost } from 'lucide-react'
import React from 'react'

const BarangCard = (props) => {
  return (
  <Card className={`h-full justify-between`} >
    <CardHeader>
      <img className='w-full min-h-80 bg-white rounded-xl max-h-80 object-contain' src={props.barang.image} alt={`gambar ${props.barang.title}`} />
    </CardHeader>

    <CardContent  className={`h-full justify-between`}>
      {/* category */}
      <Badge>{props.barang.category}</Badge>
     {/* title */}
     <h6 className='text-xl font-extrabold'>
        {props.barang.title}
    </h6>
     
    {/* description */}
     <h5 className='text-black text-sm'>
        {props.barang.description}
     </h5>
    </CardContent>
    
     
<CardFooter className={`flex justify-between`}>
  {/* PRICE */}
    <span className='text-red-800 font-bold text-3xl'>
       $ {props.barang.price}
    </span>
    
    <div>
      <Button variant={`default`} onClick = {props.onClick} >BUY</Button>
    </div>
</CardFooter>
    
 
                 {/* <pre>
                    <code>
                        {JSON.stringify(props.barang,0,2)}
                    </code>
                </pre> */}

   </Card>
  )
}

export default BarangCard
// className='rounded-2xl font-extrabold px-8 text-white py-1 w-fit justify-between shadow-xl bg-red-800'>
//         BUY