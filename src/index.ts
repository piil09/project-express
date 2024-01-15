// INI FILE UTAMA DALAM MENJALANKAN PROSES MENJALANKAN SERVER BACKEND

// MEMANGGIL LIBRARY EXPRESS
import  express, { Request, Response }  from "express";
import {validationCube} from "./middleware/validateCube";
import routebangunDatar from "./route/bangunDatar";
import routebangunDatar2  from "./route/bangunDatar2";
// BUAT WADAH UNTUK INISIASI EXPRESS
const app = express()

// MENDEFINISIKAN PORT BERJALANNYA SERVER
const PORT = 8001

// allow to read JSON as request
app.use(express.json()
)

// PROSES PERTAMA HAANDLE REQUEST
app.get(`/SERENA`, (request : Request, response : Response) => {
    // ini adalah proses handle request dengan url/adress : https:localhost:8000/SERENA
    // method : GET
    
    // MEMBERI RESPONSE
    return response.status(200).json({
        message : `Hellloo SERENA anaknya Bu Heny`
        
        
    })
})
app.get(`/moklet`, (request : Request, response : Response) => {
    // asumsikan data yang dikirim adalah nama dan umur
    let nama: string | any = request.query.nama?.toString()
    let umur: string | any = request.query.umur?.toString()

    let message : string = `My name is ${nama} and i'm ${umur} years old`
    return response.status(200).json(message)
})

// read data request from parameter
app.get(`/telkom/:nama/:gender`, (request : Request, response : Response) => {
let nama: string = request.params.nama
let gender: string = request.params.gender
let message: string = `My name is ${nama} and i'm ${gender}`
return response.status(200).json(message)
})

// read a request from body
app.post(`/moklet`,(request: Request, response: Response) => {
    // asumsikan data yang dikirim adalah panjang dan lebar
    let panjang: number = request.body.panjang
    let lebar: number = request.body.lebar
    let luasPersegiPanjang: number = panjang * lebar
    let message = `Luas persegi panjang adalah ${luasPersegiPanjang}`
    return response.status(200).json(message)
})
    // create request for count volume of cube
app.post(`/balok, validationCube`, (request: Request, respons: Response) => {
    // read panjang, lebar, tinggi
    let panjang: number = Number(request.body.panjang)
    let lebar: number = Number(request.body.lebar)
    let tinggi: number = Number(request.body.tinggi)

    let volume: number= panjang * lebar * tinggi

    return respons.status(200).json({
        panjang,lebar,tinggi,volume
    })
})

app.use(routebangunDatar)
app.use(routebangunDatar2)

// RUN SERVER
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    })

    /**
     * Buatlah sebuah request untuk mengonversi
     * suhu ke fahrenheit, kelvin, dan reamur
     * menggunakan request parameter
     * exp : http://localhost.8000/celcius/80
     * (80 adalah nilai celciusnya)
     *  reamur : 7, farenheit : 7, kelvin : 7
     */