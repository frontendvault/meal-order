import { AuthClient } from "@/utils/client";

export const getMenu = () => {
    return AuthClient().get("/v1/menus/64637dc0c16208b58b151613");
};

export const getMenuDetail = (item) => {
    return AuthClient().get(`/v1/meals/${item}`);
};