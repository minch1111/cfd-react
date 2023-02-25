import React, { useEffect, useState } from 'react'
import Product from '../../../components/products'
import productServices from '../../../service/productServices'

export default function ProductsShop() {

    let [data,setData]= useState()

    useEffect(async ()=>{
        let res = await productServices.productList()
        if(res.data) setData(res.data)
    },[])
    // if(data) console.log(`data`, data)
    if(!data) return <div>Loading...</div>
    return (
        <div className="row">
            {
                data.map((value, key) => (
                    <Product
                        key={key}
                        data={value}
                    />
                ))
            }
            


        </div>
    )
}
