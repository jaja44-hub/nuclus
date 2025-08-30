import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  console.log("Start seeding ...");

  const saltRounds = 10;
  const password = "password"; // The password for our test user
  const hashedPassword = await bcrypt.hash(password, saltRounds);

  const user = await prisma.user.upsert({
    where: { email: "user@nuclus.com" },
    update: {},
    create: {
      email: "user@nuclus.com",
      name: "Nuclus User",
      password: hashedPassword,
    },
  });

  console.log(`Created/found user: ${user.email}`);
  console.log("Seeding finished.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
