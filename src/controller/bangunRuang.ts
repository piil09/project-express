import { Request, Response } from "express";

export const volumeTabung = (req: Request, res: Response)  => {
    try {
        const phi = Math.PI;
        const r = Number(req.body.r);
        const t = Number(req.body.t);

        const calculate = Math.floor(phi * (r * r) * t);

        res.status(200).json({
            status: true,
            data: {
                r,
                calculate
            }
        });
    } catch (err) {
        return res.status(500).json({
            status: false,
            message: err
        });
    }
}

export const luasPermukaanTabung = (req: Request, res: Response)  => {
    try {
        const phi = Math.PI;
        const r = Number(req.body.r);
        const t = Number(req.body.t);

        const calculate = Math.floor((2 * phi) * r * (r + t));

        res.status(200).json({
            status: true,
            data: {
                r,
                calculate
            }
        });
    } catch (err) {
        return res.status(500).json({
            status: false,
            message: err
        });
    }
}

export const volumeKubus = (req: Request, res: Response)  => {
    try {
        const s = Number(req.body.s);

        const calculate = Math.floor(s * s * s);

        res.status(200).json({
            status: true,
            data: {
                s,
                calculate
            }
        });
    } catch (err) {
        return res.status(500).json({
            status: false,
            message: err
        });
    }
}

export const luasPermukaanKubus = (req: Request, res: Response)  => {
    try {
        const s = Number(req.body.s);

        const calculate = Math.floor(6 * (s * s));

        res.status(200).json({
            status: true,
            data: {
                s,
                calculate
            }
        });
    } catch (err) {
        return res.status(500).json({
            status: false,
            message: err
        });
    }
}

export const volumeBalok = (req: Request, res: Response)  => {
    try {
        const p = Number(req.body.p);
        const l = Number(req.body.l);
        const t = Number(req.body.t);

        const calculate = Math.floor(p * l * t);

        res.status(200).json({
            status: true,
            data: {
                calculate
            }
        });
    } catch (err) {
        return res.status(500).json({
            status: false,
            message: err
        });
    }
}

export const luasPermukaanBalok = (req: Request, res: Response)  => {
    try {
        const p = Number(req.body.p);
        const l = Number(req.body.l);
        const t = Number(req.body.t);

        const calculate = Math.floor(2 * ((p * l) + (l * t) + (p * t)));

        res.status(200).json({
            status: true,
            data: {
                calculate
            }
        });
    } catch (err) {
        return res.status(500).json({
            status: false,
            message: err
        });
    }
}

export const volumeBola = (req: Request, res: Response)  => {
    try {
        const phi = Math.PI;

        const calculate = Math.floor((4/3) * (phi*phi*phi));

        res.status(200).json({
            status: true,
            data: {
                calculate
            }
        });
    } catch (err) {
        return res.status(500).json({
            status: false,
            message: err
        });
    }
}

export const luasPermukaanBola = (req: Request, res: Response)  => {
    try {   
        const phi = Math.PI;
        const r = Number(req.body.r);

        const calculate = Math.floor(4 * phi * (r * r));

        res.status(200).json({
            status: true,
            data: {
                r,
                calculate
            }
        });
    } catch (err) {
        return res.status(500).json({
            status: false,
            message: err
        });
    }
}