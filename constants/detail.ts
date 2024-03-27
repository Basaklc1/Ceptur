import { Review } from "./reviews";

export interface Detail{
    place_id:string;
    name:string;
    img_url:string;
    rating:number;
    user_ratings_total: number;
    formatted_address:string;
    opening_hours:Array<string>;
    editorial_summary:string;
    formatted_phone_number:number;
    international_phone_number:number;
    reviews:Array<Review>;
    text:string;
    geometry:number;
    location: any;
    photos: any;
}