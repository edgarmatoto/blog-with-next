'use client'

import Image from "next/image"
import styles from "./page.module.css"
import { notFound } from 'next/navigation';
import { useEffect, useState } from "react";

// export async function generateMetadata({ params }) {
//   const post = await getData(params.id);

//   return {
//     title: post.title,
//     description: post.desc,
//   }
// }

const BlogPost = ({ params }) => {
  const [data, setData] = useState({});

  async function getData(id) {
    const res = await fetch(`/api/posts/${id}`, {
      cache: 'no-store',
    });
  
    if (!res.ok) {
      return notFound();
    }
  
    const postData = await res.json();
    setData(postData);
  }

  useEffect(() => {
    getData(params.id);
  }, [params]);

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>{data.title}</h1>
          <p className={styles.desc}>
            {data.desc}
          </p>
          <div className={styles.author}>
            <Image
              src={data.img}
              alt=""
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>{data.username}</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src={data.img}
            alt=""
            fill={true}
            className={styles.image}
          />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>
        {data.content}
        </p>
      </div>
    </div>
  )
}

export default BlogPost