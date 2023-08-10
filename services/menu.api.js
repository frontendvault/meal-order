import { AuthClient } from "@/utils/client";

export const getMenu = (params) => {
    return AuthClient().get(`/v1/menus/${process.env.NEXT_PUBLIC_RESTAURANT_ID}/meals`, {
        params
    });
};

export const getMealDetail = (item) => {
    return AuthClient().get(`/v1/meals/${item}`);
    
};