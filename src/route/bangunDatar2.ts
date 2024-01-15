import express  from "express";
import { kelilingpersegi, luaspersegi } from "../controller/bangunDatar2";
const app = express()

app.use(express.json())
app.post (`/persegi/luas`, luaspersegi)
app.post (`/persegi/keliling`, kelilingpersegi)


export default app