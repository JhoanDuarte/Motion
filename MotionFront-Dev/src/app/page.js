import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <div className={styles.wave}></div>
      <div className={styles.logo}>
        <Link href={'/'}>
          <Image src={'/images/Imagologo_motion.svg'} alt="image-phone" width={35} height={35} />
        </Link>
      </div>
      <div className={styles.imgPhone}>
        <Image className={styles.img} src={'/images/Telefono-01.png'} alt="image-phone" width={390} height={450} />
        <div className={styles.titleHomepage}>
          <h1 className={styles.titleTop}>BIENVENIDO A</h1>
          <h1 className={styles.titleBottom}>MONITORINGINNOVATION</h1>
        </div>
      </div>
      <div className={styles.links}>
        <ul>
          <li><Link target="_blank" rel="noopener noreferrer" href={'https://monitoringinnovation.com/'} className={styles.textLink}>MONITORINGINNOVATION</Link></li>
          <li><Link target="_blank" rel="noopener noreferrer" href={'https://gpscontrol.co/'} className={styles.textLink}>GPS CONTROL</Link></li>
          <li><Link target="_self" rel="noopener noreferrer" href={'http://localhost:3000/management'} className={styles.textLink}>CRUD</Link></li>
          <li><Link target="_blank" rel="noopener noreferrer" href={'https://github.com/BDuarte0175/MotionFrontend'} className={styles.textLink}>Link repo front</Link></li>
          <li><Link target="_blank" rel="noopener noreferrer" href={'https://github.com/BDuarte0175/MotionBackend'} className={styles.textLink}>Link repo back</Link></li>
        </ul>
      </div>
    </div>
  );
}
