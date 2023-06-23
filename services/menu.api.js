import { AuthClient } from "@/utils/client";

export const getMealsByRestaurant = (params) => {
    return AuthClient().get(`/v1/restaurants/${process.env.NEXT_PUBLIC_RESTAURANT_ID}/meals`, {
        params
    });
};

export const getMealDetail = (item) => {
    return AuthClient().get(`/v1/meals/${item}`);
};