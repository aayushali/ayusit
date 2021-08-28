import Head from "next/head";
import styles from "../../styles/it_pages.module.css";
import Link from "next/link";
export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  return {
    props: {
      ninjas: data,
    },
  };
};

const Ninjas = ({ ninjas }) => {
  return (
    <>
      <Head>
        <title>IT List | Our Team</title>
      </Head>
      <div>
        <h1>All IT lists</h1>
        {ninjas.map((ninja) => (
          <Link href={"/it_pages/" + ninja.id} key={ninja.id}>
            <a className={styles.single}>
              <h3>{ninja.name}</h3>
            </a>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Ninjas;
