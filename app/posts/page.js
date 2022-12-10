import '../../styles/globals.css';
import Link from 'next/link';
import { PrismaClient } from '@prisma/client';
import BlogPostCreationForm from './BlogPostCreationForm';

async function getPosts() {
  const prisma = new PrismaClient();
  const posts = await prisma.post.findMany();

  return posts;
}

export default async function Page() {
  const posts = await getPosts();
  return (
    <div>
      <BlogPostCreationForm />
      {posts.map(post => (
        <p>
          {post.title}: {post.content}
        </p>
      ))}
    </div>
  );
}