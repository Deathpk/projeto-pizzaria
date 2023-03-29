import { prismaClient } from "../../prisma";

class DetailsService
{
    async execute(user_id: string) {
        return await prismaClient.user.findFirst({
            where: {
                id: user_id
            },
            select: {
                id: true,
                name: true,
                email: true
            }
        })
    }
}

export default DetailsService;