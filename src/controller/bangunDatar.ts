import { Request, Response, request, response } from "express";
import { number } from "joi";

/** conts atau let itu digunakan 
 * untuk mendeskripsikan sebuah variable 
 * object/ array / function
 */
const luasLingkaran = (request: Request, respone: Response) => {
    try {
        const phi = Math.PI
        const r: number = Number(request.body.r)
        const luas = phi * r * r 
        return respone.status(200).json({
            status: true,
             r,
             luas
        })
    } catch (error) {
        return respone.status(500).json({
            status: false,
            message: error
        })
    }
}


const kelilingLingkaran = (request: Request, respone: Response) => {
    try {
        const phi = Math.PI
        const r: number = Number(request.body.r)
        const keliling = 2 * phi  * r 
        return respone.status(200).json({
            status: true,
             r,
            keliling
        })
    } catch (error) {
        return respone.status(500).json({
            status: false,
            message: error
        })
    }
}

const luasPersegi= (request: Request, respone: Response) => {
    try {
        const sisi: number = Number(request.body.sisi)
        const luas = sisi*sisi
        return respone.status(200).json({
            status: true,
             sisi,
            luas
        })
    } catch (error) {
        return respone.status(500).json({
            status: false,
            message: error
        })
    }
}
const kelilingPersegi= (request: Request, respone: Response) => {
    try {
        const sisi: number = Number(request.body.sisi)
        const keliling = sisi*4
        return respone.status(200).json({
            status: true,
             sisi,
            keliling
        })
    } catch (error) {
        return respone.status(500).json({
            status: false,
            message: error
        })
    }
}
const luasPersegiPanjang=(request:Request,respone:Response)=>{
    try {
        const panjang: number = Number(request.body.panjang)
        const lebar:number= Number(request.body.lebar)
        const luas= panjang*lebar
        return respone.status(200).json({
            status: true,
             panjang,
             lebar,
             luas
        })
    } catch (error) {
        return respone.status(500).json({
            status: false,
            message: error
        })
    }
}
const kelilingPersegiPanjang=(request:Request,respone:Response)=>{
    try {
        const panjang: number = Number(request.body.panjang)
        const lebar:number= Number(request.body.lebar)
        const keliling= (panjang*lebar)*2
        return respone.status(200).json({
            status: true,
             panjang,
             lebar,
             keliling
        })
    } catch (error) {
        return respone.status(500).json({
            status: false,
            message: error
        })
    }
}
const luasSegitiga=(request:Request,respone:Response)=>{
    try {
        const a: number = Number(request.body.a)
        const t:number= Number(request.body.t)
        const luas= (a*t)/2
        return respone.status(200).json({
            status: true,
             a,
             t,
             luasSegitiga
        })
    } catch (error) {
        return respone.status(500).json({
            status: false,
            message: error
        })
    }
}


export {luasLingkaran, kelilingLingkaran,luasPersegi,kelilingPersegi,luasPersegiPanjang,kelilingPersegiPanjang,luasSegitiga}