import { AuthClient } from "@/utils/client";

export const placeOrder = (body) => {
    return AuthClient().post("/v1/orders", body);
};
