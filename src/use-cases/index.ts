import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

interface userUpdateInput {
  id: string;
  name?: string;
  email?: string;
  active?: boolean;
}

interface userCreateInput {
  name?: string | undefined;
  email: string;
  active: boolean;
}

const user = {
  getById: async (id: string) =>
    await prisma.user.findOne({ where: { id: id } }),
  update: async (user: userUpdateInput) =>
    await prisma.user.update({
      where: { id: user.id },
      data: user,
    }),
  create: async (user: userCreateInput) => await prisma.user.create({ user }),
  delete: async (id: string) => await prisma.user.delete({ where: { id: id } }),
};

export default Object.freeze({ user });
export { user };
