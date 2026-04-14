import logger from "../config/logger.config.ts";
import Hotel from "../db/models/hotel.ts";
import { NotFoundError } from "../utils/errors/app.error.ts";
import { type createHotelDTO } from "./dto/hotel.dto.ts";

export async function createHotel(hotelData : createHotelDTO) {
    const hotel = await Hotel.create({
        name: hotelData.name,
        address: hotelData.address,
        location: hotelData.location,
        rating: hotelData.rating,
        rating_count: hotelData.rating_count
    });

    logger.info(`Hotel created is : ${hotel.id}`);
    return hotel;
}

export async function getHotel(id: number) {
    const hotel = await Hotel.findByPk(id);

    if(!hotel) {
        logger.error(`Hotel not found : ${id}`);
        throw new NotFoundError("Hotel not found");
    }

    logger.info(`Hotel found : ${hotel.id}`);

    return hotel;
}

export async function getAllHotels() {
    const hotels = await Hotel.findAll();

    if(!hotels) {
        logger.error('Hotels not found');
        throw new NotFoundError("No hotels were found");
    }

    logger.info('Hotels are : ' , hotels);

    return hotels;
}

export async function deleteHotel(id : number) {
    const hotel = await Hotel.findByPk(id);

    if(hotel) {
        await hotel.destroy();
    } else {
        throw new NotFoundError("Hotel not found");
    }

    return hotel;
}

export async function updateHotel(id : number , hotelRating : number) {
    const hotel = await Hotel.findByPk(id);

    if(!hotel) {
        logger.error(`Hotel not found : ${id}`);
        throw new NotFoundError(`Hotel with ${id} is not found`);
    }

    hotel.rating = hotelRating;
    await hotel.save();

    logger.info(`Hotel found : ${hotel.id}`);

    return hotel;
}