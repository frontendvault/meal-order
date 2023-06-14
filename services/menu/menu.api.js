import { AuthClient } from "@/utils/client";

export const getMenu = () => {
    return AuthClient().get("/v1/menus");
};

export const getMenuDetail = (item) => {
    return AuthClient().get(`/v1/menus/${item}`);
};