'use client'

import Link from "next/link";
import styles from "./page.module.css"
import Image from "next/image";
import { useEffect, useState } from "react";

const Blog = () => {
  const [data, setData] = useState([])

  async function getData() {
    const res = await fetch('/api/posts', {
      cache: 'no-store',
    });
  
    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }
    const postData = await res.json();
    setData(postData);
  }

  useEffect(() => {
    getData();
  }, []);
  
  
  return (
    <div className={styles.mainContainer}>
      {data.map(item => (
        <Link href={`blog/${item._id}`} className={styles.container} key={item.id}>
          <div className={styles.imageContainer}>
            <Image
              src={item.img}
              alt=""
              width={400}
              height={250}
              className={styles.image}
            />
          </div>
          <div className={styles.content}>
            <h1 className={styles.title}>{item.title}</h1>
            <p className={styles.desc}>{item.desc}</p>
          </div>
        </Link>
      ))}
  </div>
  );
}

export default Blog;