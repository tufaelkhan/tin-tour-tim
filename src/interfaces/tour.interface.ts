import { Model } from "mongoose";

interface ITour{
    name: string;
    duration: number;
    ratingAverage: number;
    ratingQuantity: number;
    price: number;
    imageCover: string;
    images: string[];
    createdAt: Date;
    startDates: Date[];
    startLocation: string;
    locations: string[];
    slug: string;
}

interface ITourMethods {
    getNextNearestStartAndEndDate(): {
        nextStartDate: Date | null
        estimatedEndDate: Date | null
    }
}

type TTourModel = Model<ITour, Record<string , never>, ITourMethods>

export {ITour, ITourMethods, TTourModel}