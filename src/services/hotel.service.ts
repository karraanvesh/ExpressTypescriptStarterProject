import type { createHotelDTO } from "../repositories/dto/hotel.dto";
import { createHotel, getHotel , getAllHotels, deleteHotel, updateHotel } from "../repositories/hotel.repository.ts";

export async function createHotelService(hotelData : createHotelDTO) {
    const hotel = await createHotel(hotelData);

    return hotel;
}

export async function getHotelByIdService(id : number) {
    const hotel = await getHotel(id);

    return hotel;
}

export async function getAllHotelsService() {
    const hotels = await getAllHotels();

    return hotels;
}

export async function deleteHotelService(id : number) {
    const result = await deleteHotel(id);

    return result;
}

export async function updateHotelService(id : number , hotelRating : number) {
    const hotel = await updateHotel(id , hotelRating);

    return
}