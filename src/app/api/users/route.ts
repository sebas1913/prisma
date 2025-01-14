import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Maneja solicitudes GET
export async function GET() {
  const users = await prisma.user.findMany();
  return new Response(JSON.stringify(users), { status: 200 });
}

// Maneja solicitudes POST
export async function POST(request: Request) {
  const { name, email } = await request.json();
  const newUser = await prisma.user.create({
    data: { name, email },
  });
  return new Response(JSON.stringify(newUser), { status: 201 });
}
