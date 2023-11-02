import { AuthClient } from "@/utils/client";

export const createPaymentIntent = (body) => {
    return AuthClient().post("/v1/payment-intent", body);
};

export const updatePaymentIntent = (id, body) => {
    return AuthClient().put(`/v1/payment-intent/${id}`, body);
};
