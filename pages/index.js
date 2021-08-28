import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <Head>
        <title>IT List | Home</title>
        <meta name="keywords" content="itlist" />
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae eius
          aliquam fuga hic minima neque qui tenetur alias ad dicta voluptate
          porro consequatur amet aspernatur iste, nostrum esse vero dolore!
        </p>
        <p className={styles.text}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia
          perspiciatis nobis, omnis facere mollitia officiis, asperiores
          veritatis unde, exercitationem maiores nesciunt. Fuga earum quos vitae
          consectetur pariatur praesentium, est expedita.
        </p>
        <Link href="/it_pages">
          <a className={styles.btn}>See IT Listings</a>
        </Link>
      </div>
    </>
  );
}
