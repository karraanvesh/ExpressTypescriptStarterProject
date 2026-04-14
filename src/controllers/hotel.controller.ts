import express from 'express';
import type { createHotelDTO } from '../repositories/dto/hotel.dto';
import { createHotelService, getHotelByIdService } from '../services/hotel.service.ts';

export async function createHotelHandler(req : express.Request , res : express.Response , next : express.NextFunction) {
    // 1. Call the service layer

    const hotelResponse = await createHotelService(req.body);

    // 2. Send the response

    res.status(201).json({
        message : "Hotel created successfully",
        data : hotelResponse,
        success : true
    });
}

export async function getHotelByIdHandler(req : express.Request , res : express.Response , next : express.NextFunction) {
    // 1. Call the service layer

    const hotelResponse = await getHotelByIdService(Number(req.params.id));

    // 2. Send the response

    res.status(200).json({
        message : "Hotel fetched successfully",
        data : hotelResponse,
        success : true
    });
}