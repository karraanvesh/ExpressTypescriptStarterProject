export type createHotelDTO = {
    name : string,
    address : string,
    location : string,
    rating?: number,
    rating_count?: number
}

export type updateHotelDTO = {
    id : number,
    hotelRating : number
}