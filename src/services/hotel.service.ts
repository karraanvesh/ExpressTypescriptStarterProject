import type { createHotelDTO } from "../repositories/dto/hotel.dto";
import { createHotel, getHotel } from "../repositories/hotel.repository.ts";

export async function createHotelService(hotelData : createHotelDTO) {
    const hotel = await createHotel(hotelData);

    return hotel;
}

export async function getHotelByIdService(id : number) {
    const hotel = await getHotel(id);

    return hotel;
}