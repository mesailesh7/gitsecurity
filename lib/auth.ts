import { betterAuth } from 'better-auth';
import { prismaAdapter } from 'better-auth/adapters/prisma';
import prisma from './db';

export const auth = betterAuth({
  // clientId: process.env.REACT_APP_CLIENT_ID,
  // clientSecret: process.env.REACT_APP_CLIENT_SECRET,
  database: prismaAdapter(prisma, {
    provider: 'postgresql',
  }),
  socialProviders:{
    github:{
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      scope:["repo"]
    }
  }
});
