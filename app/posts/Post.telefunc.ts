import { PrismaClient } from '@prisma/client';

interface Post {
  title: string;
  content: string;
}

const prisma = new PrismaClient();

export async function readAllPosts(): Promise<Post[]> {
  return prisma.post.findMany();
}

export async function saveNewPost(title: string, content: string): Promise<Post> {
  return prisma.post.create({
    data: {
      title: title,
      content: content
    }
  });
}