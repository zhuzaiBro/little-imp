import request from './request';

export async function getCard() {
    return await request.get("/api/card");
}

export async function getSeries() {
    return await request.get("/api/series");
}