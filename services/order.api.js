import { AuthClient } from "@/utils/client";

export const placeOrder = (body) => {
    console.log("order API",body)
    return AuthClient().post("/v1/orders", body);
};
