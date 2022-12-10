import { PrismaClient } from '@prisma/client';

interface Post {
  title: string;
  content: string;
}

export async function addPost(post : Post) {
  const prisma = new PrismaClient();

  const created = await prisma.post.create({
    data: {
      title: post.title,
      content: post.content
    }
  });
}