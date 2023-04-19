import { request } from "../base";

export const wxApi = {
  getToken: ({ appId, secret, code }) => request.get(`sns/oauth2/access_token?appid=${appId}&secret=${secret}&code=${code}&grant_type=authorization_code`),
  getUserInfo: ({ token, openId }) => request.get(`sns/userinfo?access_token=${token}&openid=${openId}&lang=zh_CN`),
}
