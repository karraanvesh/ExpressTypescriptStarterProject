import express from 'express';
import { pingHandler, pingHelloHandler } from '../../controllers/ping.controller.ts';
import { createHotelHandler, deleteHotelHandler, getAllHotelHandler, getHotelByIdHandler, updateHotelHandler } from '../../controllers/hotel.controller.ts';
import { validateRequestBody } from '../../validators/index.ts';
import { hotelSchema } from '../../validators/hotel.validator.ts';

const hotelRouter = express.Router();

hotelRouter.post('/', validateRequestBody(hotelSchema) , createHotelHandler);

hotelRouter.get('/:id' , getHotelByIdHandler);

hotelRouter.get('/' , getAllHotelHandler);

hotelRouter.delete('/:id' , deleteHotelHandler);

hotelRouter.patch('/' , updateHotelHandler);

export default hotelRouter;