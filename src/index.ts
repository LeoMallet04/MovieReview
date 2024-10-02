import express from 'express';
import { string, z } from "zod"

const app = express();
const PORT = 3000;

// Definindo um endpoint GET
app.get('/api/saudacao', (req, res) => {
    res.json({ message: 'I am, greed!' });
});

// Iniciando o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});

import { PrismaClient, Review } from '@prisma/client'
import { title } from 'process';
import { GridFSBucket } from 'mongodb';
import e from 'express';
import { randomBytes } from 'crypto';
import { create } from 'domain';
import { get } from 'http';

const prisma = new PrismaClient()

async function main() {
  const username = 'Leo'
  const password = '123456'
  const email = 'leonardoms.2010@email.com'

  createUser(username, password, email)
  //createReview(username, "Harry Potter - Philopher's stone", "JK Rowling", "Fantasy", 5, 150, "AVADA KEDRABAAAA!!... Said Camly")
  findMany();
  findUser(username)
  //deleteReview("Harry Potter - Philopher's stone")
  //deleteUser(username)
  updateUser(username,"FDS", "123", "fds@gmail.com");
}

main()
  .catch(async (e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
})

async function findMany() {
  const allUsers = await prisma.user.findMany({
    include: {
      reviews: true,
    },
  })
  console.dir(allUsers, { depth: null })
}

async function deleteReview(title: string) {
  const review = await prisma.review.findUnique({where: {title: title}});
  if(review == null){
    console.log("Review not found");
  }else{
    await prisma.review.delete({
      where: { id: review.id },
    })
    console.log("Review deleted");

  }
}

async function createUser(username: string, password: string, email: string) {
  try {
    if(await prisma.user.findUnique({where: {username: username}}) == null && await prisma.user.findUnique({where: {email:email}}) == null){
  
      const user = z.object({
        username: z.string(),
        password: z.string(),
        email: z.string()
      })
      const verify = user.safeParse({username: username, password: password, email: email});
      
      if(verify){
        const user = await prisma.user.create({
          data: {
            username: username,
            password: password,
            email: email,
          },
        })
        console.log(user)
      }else{
        console.log("Invalid data")
      }
    
      }else{
        console.log("Username or Email already exists")
      }
  } catch (error) {
    console.log(error)
  }
  
  
}
  


async function createReview(username: string, title: string, author: string, gender: string, rating: number, durationMinutes: number, commentary: string) {  
  if(await prisma.review.findUnique({where: {title: title}}) == null){
    const review = z.object({
      title: z.string(),
      author: z.string(),
      gender: z.string(),
      rating: z.number(),
      durationMinutes: z.number(),
      commentary: z.string(),
    })

    const verify = review.safeParse({title: title, author: author, gender: gender, rating: rating, durationMinutes: durationMinutes, commentary: commentary});
    if(verify){
      await prisma.review.create({
        data: {
          user: {
            connect: { username: username },
          },
          title: title,
          author: author,
          gender: gender,
          rating: rating,
          durationMinutes: durationMinutes,
          commentary: commentary,
        },
      }),
      console.log("Review created")
    }else {
      console.log("Invalid data")
    }

  }else{
    console.log("Review already exists")
  }
}

async function updateUser(username: string, name: string, password: string, email: string) {
  try {
    const user = await prisma.user.findUnique({where: {username: username}});
    if(user == null){
      console.log("User not found");
    }else{
      await prisma.user.update({
        where: { id: user.id },
        data: {
          username: name,
          password: password,
          email: email,
        },
      })
    }
  } catch (error) {
    console.log(error);
  }
}


async function findUser(username: string){
  if(await prisma.user.findUnique({where: {username: username}}) == null){
    console.log("User not found");
  }else{
   console.log(await prisma.user.findUnique({where: {username: username}}));
  }

}

async function deleteAllReviews(username: string){
  const user = await prisma.user.findUnique({where: {username: username}});
  if(user == null){
    console.log("User not found");
  }else{
    await prisma.review.deleteMany({where: {userId: user.id}});  
  }
}

async function deleteUser(username: string) {
  const user = await prisma.user.findUnique({where: {username: username}});
  if(user == null){
    console.log("User not found");
  }else{
    deleteAllReviews(username);
    await prisma.user.delete({
      where: { id: user.id},
    })
    console.log("User deleted");
  }
}


// async function findReviewId(title: string) {
//   var id = "";
//   try {
//     const review = await prisma.review.findUnique({where: {title: title}});
//     if(review == null){
//       console.log("Review not found");
//     }else{
//       id = review.id;
//     }
//   } catch (error) {
//     console.log(error);
//   }
//   return id;
// }

// async function findUserId(username: string) {
//   var id = "";
//   try {
//     const user = await prisma.user.findUnique({where: {username: username}});
//     if(user == null){
//       console.log("User not found");
//     }else{
//       id = user.id;
//       console.log(user);
//     }
//   } catch (error) {
//     console.log(error);
//   }
//   return id;
// } 