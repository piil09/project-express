import { Request, Response } from "express";

import express  from "express";
const luaspersegi = (request : Request, response : Response) => {
    try {
      const s: number = Number(request.body.s);
      const luas = s*s;
      return response.status(200).json({
          status: true,
          s,
          luas
      })
    } catch (error) {
      return response.status(200).json({
        status: false,
        message: error,
      });
    }
  };
  const kelilingpersegi = (request : Request, response : Response) => {
    try {
        const s: number = Number(request.body.s);
        const keliling = 4*s
        return response.status(200).json({
            status: true,
            s,
            keliling
        })
    } catch (error) {
        return response.status(500).json({
            status: false,
            message: error,
          });
    }
  }
  export { luaspersegi, kelilingpersegi };
