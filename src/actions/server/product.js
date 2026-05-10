"use server"

import { dbconnect, Collections } from "@/lib/dbconnect"
import { ObjectId } from "mongodb";



export const getProduct = async()=>{
    const product = await dbconnect(Collections.PRODUCTS).find().toArray();
    return product
}

export const getSingleProduct = async(id)=>{
    if(id.length != 24){
        return {};
    }
    const query = {_id: new ObjectId(id)}
    const product = await dbconnect(Collections.PRODUCTS).findOne(query);
    return product || {};
}