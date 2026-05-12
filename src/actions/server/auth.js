"use server"

import { Collections, dbconnect } from "@/lib/dbconnect";
import bcrypt from "bcryptjs";

export const postUser = async (payload) => {
    try {
        const { email, password, name } = payload;

        // check Payload
        if (!email || !password || !name) {
            return { error: "Missing required fields" };
        }

        // check user
        const usersCollection = await dbconnect(Collections.USERS);
        const existingUser = await usersCollection.findOne({ email });
        if (existingUser) {
            return { error: "User already exists" };
        }

        // create User
        const hashedPassword = await bcrypt.hash(password, 14);
        const newUser = {
            providerId: "Credentials",
            email,
            password: hashedPassword,
            name,
            role: "user"
        };

        // insert user
        const result = await (await dbconnect(Collections.USERS)).insertOne(newUser);

        if (result.acknowledged) {
            return {
                ...result,
                insertId: result.insertedId.toString()
            };
        } else {
            return { error: "Failed to create user" };
        }
    } catch (error) {
        console.error("Error in postUser:", error);
        return { error: "Internal server error" };
    }
}