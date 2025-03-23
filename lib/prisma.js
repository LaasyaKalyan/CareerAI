import { PrismaClient } from "@prisma/client";

export const db = globalThis.prisma || new PrismaClient();  //to query our database

if (process.env.NODE_ENV !== "production") {
    globalThis.prisma = db;
}

