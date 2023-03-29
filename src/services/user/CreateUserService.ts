import { User } from "@prisma/client";
import { prismaClient } from "../../prisma";
import { hash } from "bcryptjs";

interface CreateUserRequest {
    name: string;
    email: string;
    password: string;
}

interface CreateUserResponse {
    id: string,
    name: string,
    email: string
}

class CreateUserService 
{
    async execute( {name, email, password}: CreateUserRequest ): Promise<CreateUserResponse> {
        if(!email) {
            throw new Error("Email is incorrect");
        }

        const userAlreadyExists = await prismaClient.user.findFirst({
            where: {
                email: email
            }
        });

        if(userAlreadyExists) {
            throw new Error("The given e-mail is already being used by someone else")
        }
        
        const passwordHash = await hash(password, 8);

        return await prismaClient.user.create({
            data:{
                name: name,
                email: email,
                password: passwordHash
            },
            select:{
                id: true,
                name: true,
                email: true
            }
        })
    }
}

export default CreateUserService;