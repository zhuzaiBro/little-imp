import request from './request';

export async function addGood(from: object) {
    const result = await request.post("api/good",
        from);
    return result;
}

export async function getGood(page: number) {
    return await request.get("/api/good", {
        params: {
            page: page
        },
    });
}