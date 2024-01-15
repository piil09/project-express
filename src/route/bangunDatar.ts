import  Express  from "express";
import { kelilingLingkaran, kelilingPersegi, kelilingPersegiPanjang, luasLingkaran, luasPersegi, luasPersegiPanjang, luasSegitiga} from "../controller/bangunDatar";
const app =  Express()


/**allow read a body */
app.use(Express.json())

/**fungsi use()digunakan untuk menerapkan sebuah fungsi pada object express fungsi tersebut akan otomatis 
 * dijalankan
 */

app.post(`/lingkaran/luas`,luasLingkaran)
app.post(`/lingkaran/keliling`,kelilingLingkaran)
app.post(`/persegi/luas`,luasPersegi)
app.post(`/persegi/keliling`,kelilingPersegi)
app.post(`PersegiPanjang/luas`,luasPersegiPanjang)
app.post(`PersegiPanjang/keliling`,kelilingPersegiPanjang)
app.post(`Segitiga/luas,luasSegitiga`)
export default app