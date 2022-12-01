import '../../styles/globals.css'
import Link from 'next/link'
import { PrismaClient } from "@prisma/client";

async function getData() {
 const prisma = new PrismaClient();
  const posts = await prisma.post.findMany();

  return posts;
}

export default async function Page() {
  const data = await getData();
  return (
    <p>
      {data[0].title}
    </p>
  );
}