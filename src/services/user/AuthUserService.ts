import { prismaClient } from "../../prisma";
import { compare } from "bcryptjs";
import { sign } from 'jsonwebtoken';

interface LoginRequest {
    email: string,
    password: string
}

interface LoginResponse {
    id: string,
    name: string,
    email: string,
    token: string
}

class AuthUserService
{
    async execute({email, password}: LoginRequest): Promise<LoginResponse> {
        const user = await prismaClient.user.findFirst({
            where: {
                email: email
            }
        });

        if(!user) {
            throw new Error("User/passord incorrect");
        }

        const passwodMatch = await compare(password, user.password);

        if(!passwodMatch) {
            throw new Error("User/passord incorrect");
        }

        const token = sign(
            {
                name: user.name,
                email: user.email
            },
            process.env.JWT_SECRET,
            {
                subject: user.id,
                expiresIn: '30d'
            }
        );

        return {
            id: user.id,
            name: user.name,
            email: user.email,
            token: token
        };
    }
}

export default AuthUserService;