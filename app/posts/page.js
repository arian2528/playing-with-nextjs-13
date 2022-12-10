import '../../styles/globals.css';
import Link from 'next/link';
import { PrismaClient } from '@prisma/client';
import BlogPostCreationForm from './BlogPostCreationForm';
import { readAllPosts } from './Post.telefunc';

export default async function Page() {
  const posts = await readAllPosts();
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