import {GetProductImageResponse} from "./getProductImageResponse";

export interface GetAllProductResponse {
  brandName?: string;
  id?: number;
  images?: Array<GetProductImageResponse>;
  name?: string;
  price?: number;
}
