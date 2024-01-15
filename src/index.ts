/**ini adalah file utama */
/** dimana ada proses menjalankan server backend
 */

/**memanggil library express */
import express, { Request, Response, request } from "express"
import { validateCube } from "./middleware/validateCube"
import routeBangunDatar from "./Route/bangunDatar"
import routebangunRuang from "./Route/bangunRuang"
import { validateSquare } from "./middleware/validateSquare"

/**buat wadah untuk inisiasi express */
const app=express()

/**mendefinisikan port berjalannya server */
const PORT=8000
/**allow to read Json as request */
app.use(express.json())

/**proses pertama untuk handle request */
app.get(`/serena`,(request: Request,response: Response)=>{
    /**
     * ini adalah proses handle request dengan 
     * url/address: https//localhost:8000/serena
     * method get
     */
    /**buatlah request konversi suhu celcius kefahrenheit,kelvin,reamur
     * menggunakan request parameter
     * exp:http://localhost:8000/celcius/80
     * 80 nilai celcius
     * reamur:?,fahrenhait,kelvin
     */
    return response.status(200).json({
        message:`Hello Serena Anaknya Bu Siana` 
    })
})

/**read a query request */
app.get(`/moklet`,(request: Request,response: Response)=>{
    /** Asumsikan data yang dikirim adalah nama dan umur
     * 
    */
   let nama :any=request.query.nama?.toString()
   let umur:any=request.query.umur?.toString()

   let message : string = `My name is ${nama} and i'm ${umur} years old`
    return response.status(200).json(message)
})

/**read data request from parameter */
app.get(`/telkom/:nama/:gender`,(request:Request,response:Response)=>{
    let nama:string=request.params.nama
    let gender:string=request.params.gender
    let message:string=`My name is ${nama} and i'm ${gender}`
    return response.status(200).json(message)
})

/**read a reuest from body */
app.post(`/moklet`,(request:Request,response:Response)=>{
    /**asumsikan data yang dikirimkan pannjang dan lebar */
    let panjang:number=request.body.panjang
    let lebar:number=request.body.lebar

    let luasPersegiPanjang:number=panjang*lebar
    let message=`luas persegi panjang adalah ${luasPersegiPanjang}`
    return response.status(200).json(message)
})

/**create request for count volume of long cube */
app.post(`/balok,validateCube` ,(request:Request,response:Response)=>{
    /**read panjjang,lebar,tinggi */
    let panjang:number=Number(request.body.panjang)
    let lebar:number=Number(request.body.lebar)
    let tinggi:number=Number(request.body.tinggi)

    let volume:number=panjang*lebar*tinggi
    return response.status(200).json({
        panjang,lebar,tinggi,volume
    })
})

/**register route of bangun datar */
app.use(routeBangunDatar)
app.use(routebangunRuang)

/**run server */
app.listen(PORT,()=>{
    console.log(`server running on port ${PORT}`)
})