import { AuthClient } from "@/utils/client";

export const getTags = (params) => {
    return AuthClient().get(`/v1/tags`, {
        params
    });
};
