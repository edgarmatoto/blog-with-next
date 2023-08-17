import Image from "next/image";
import styles from "./footer.module.css"

const Footer = () => {
  return (
    <div className={styles.container}>
      <div>©2023 Edgar. All rights reserved.</div>
      <div className={styles.social}>
        <Image src={'/1.png'} alt="FB icon" width={15} height={15} className={styles.icon}></Image>
        <Image src={'/2.png'} alt="IG icon" width={15} height={15} className={styles.icon}></Image>
        <Image src={'/3.png'} alt="TWT icon" width={15} height={15} className={styles.icon}></Image>
        <Image src={'/4.png'} alt="YT icon" width={15} height={15} className={styles.icon}></Image>
      </div>
    </div>
  );
}

export default Footer;