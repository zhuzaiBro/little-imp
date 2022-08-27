import request from './request';

export async function getBlocks() {
    return await request.get("/api/block");
}