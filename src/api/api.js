import http from "./axios";

/**
 * 注册用户
 *
 * @param params 用户信息
 * @returns {Promise<AxiosResponse<T>>}
 */
export const register = params => http.post("/register", params);

/**
 * 用户登录
 *
 * @param params 用户信息
 * @returns {Promise<AxiosResponse<T>>}
 */
export const login = params => http.post("/login", params);
