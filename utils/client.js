import Axios from "axios";
import Cookies from "js-cookie";

class Client {
    axios = Axios;

    constructor() {
        this.axios.defaults.baseURL = 'https://mpo.herokuapp.com';
    }

    create = () => {
        return this.axios;
    };

    _getToken(name) {
        return Cookies.get(name);
    }

    saveToken(name, value) {
        Cookies.set(name, value)
    }
    destroyToken() {
        Cookies.remove("access-token")
        Cookies.remove("refresh-token")
    }

    createWithAuth = () => {
        const access_token = this._getToken("access-token");

        this.axios.interceptors.response.use(
            (response) => response,
            (error) => {
                // Reject promise if usual error
                if (error.response.status !== 401) {
                    return Promise.reject(error);
                }

                /*
                 * When response code is 401, try to refresh the token.
                 * Eject the interceptor so it doesn't loop in case
                 * token refresh causes the 401 response.
                 *
                 * Must be re-attached later on or the token refresh will only happen once
                 */

                return this.axios
                    .post("/v1/auth/refresh-tokens", {
                        refreshToken: this._getToken("refresh-token"),
                    })
                    .then((response) => {
                        this.saveToken("access-token", response.data.refresh.token)
                        error.response.config.headers["Authorization"] =
                            "JWT " + response.data.acc;
                        // Retry the initial call, but with the updated token in the headers. 
                        // Resolves the promise if successful
                        return this.axios(error.response.config);
                    })
                    .catch((error2) => {
                        // Retry failed, clean up and reject the promise
                        this.destroyToken();
                        // window.location = '/auth/login'
                        return Promise.reject(error2);
                    })
            })


        this.axios.defaults.headers.common[
            "Authorization"
        ] = `JWT ${access_token}`;

        return this.axios;
    };
}

export default new Client().create();
export const AuthClient = new Client().createWithAuth;
