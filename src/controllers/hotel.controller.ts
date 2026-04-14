import express, { type NextFunction } from 'express';
import type { createHotelDTO } from '../repositories/dto/hotel.dto';
import { createHotelService, deleteHotelService, getAllHotelsService, getHotelByIdService, updateHotelService } from '../services/hotel.service.ts';

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

export async function getAllHotelHandler(req : express.Request , res : express.Response , next : express.NextFunction) {
    const allHotels = await getAllHotelsService();

    res.status(200).json({
        message : "All hotels fetched successfully",
        data : allHotels,
        success : true
    });
}

export async function deleteHotelHandler(req : express.Request , res : express.Response , next : express.NextFunction) {
    try {
        const deletedHotelResponse = await deleteHotelService(Number(req.params.id));

        res.status(200).json({
            message : "Hotel successfully deleted",
            data : deleteHotelHandler,
            success : true
        });
    } catch (error) {
        res.status(501).json({
            message : "Unable to delete the hotel",
            success : false
        })
    }
    
}

export async function updateHotelHandler(req : express.Request , res : express.Response , next : express.NextFunction) {
    try {
        const updatedHotel = await updateHotelService(req.body.id , req.body.hotelRating);
        res.status(200).json({
            message : "Hotel updated successfully",
            data : updatedHotel,
            success : true
        })
    } catch (error) {
        res.status(501).json({
            message : "Unable to update the hotel",
            success : false
        });
    }
}