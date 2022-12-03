import '../../styles/globals.css'
import Link from 'next/link'
import { PrismaClient } from '@prisma/client';
import Refresh from './refresh';

async function getPosts() {
 const prisma = new PrismaClient();
  const posts = await prisma.post.findMany();

  return posts;
}

export default async function Page() {
  const data = await getPosts();
  return (
    <div>
      <Refresh />
      <p>
        {data[0].title}
      </p>
    </div>
  );
}