import request from './request';

export async function getBanner() {
    return await request.get("/api/banner");
}


export async function login(loginId, loginPwd) {
    const resp = await request.post("/api/admin/login", { loginId, loginPwd });
    return resp.data;
}