import  Express from "express";
import { volumeTabung } from "../controller/bangunRuang";
const app =  Express()
/**allow read a body */
app.use(Express.json())

app.post('/tabung/volume',volumeTabung)

export default app