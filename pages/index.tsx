import Head from "next/head";
import Image from "next/image";
import { relative } from "path";
import styles from "../styles/Home.module.css";
import containerStyles from "../styles/HomeContainers.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pierre Houy</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main} style={{ overflow: "clip" }}>
        <section
          id="hi"
          className={`${styles.section1bgimage}`}
          // style={{ position: "fixed" }}
        >
          <div className={`${styles.section1shadowbg} ${styles.container}`}>
            {/* <h1
              className={styles.title}
              style={{ textAlign: "left", fontSize: "150px", lineHeight: 0.8 }}
            >
              A<span className={styles.shadowspan}>mazing</span>
              <br />
              fu<span className={styles.shadowspan}>ll</span>
              <br />
              sta<span className={styles.shadowspan}>ck</span>
            </h1> */}

            <div style={{ width: "100%", padding: "0 15% 0 15%" }}>
              <p
                style={{
                  color: "white",
                  fontSize: "90px",
                  lineHeight: 1,
                  fontWeight: "bolder",
                }}
              >
                Hello I'm Pierre,
                <br />
                I'm a Full Stack Developer
                <br />
                and computer science engineer
              </p>
            </div>
            {/* <Image
              src="/images/LogoEpita.png"
              width={400}
              height={270}
              alt="MOI"
            /> */}
          </div>
        </section>
        <section
          className={containerStyles.section}
          style={{ backgroundColor: "yellow", position: "relative" }}
        >
          <div className={containerStyles.flexContainer}>
            <div
              style={{ backgroundColor: "red", width: "100%" }}
              // className={containerStyles.flexItemsAboutSection}
            >
              <p> PICTURE </p>
            </div>
            <div
              style={{ backgroundColor: "blue", width: "100%" }}
              // className={containerStyles.flexItemsAboutSection}
            >
              ABOUT SECTION
            </div>
          </div>
        </section>
        <section
          className={containerStyles.section}
          style={{
            backgroundColor: "blue",
            width: "100%",
            position: "relative",
          }}
        >
          <p> WORK SECTION</p>
        </section>
        <section
          className={containerStyles.section}
          style={{ backgroundColor: "pink", position: "relative" }}
        >
          {" "}
          FORM SECTION / CONTACT
        </section>
        <section
          className={containerStyles.section}
          style={{
            backgroundColor: "blue",
            width: "100%",
            position: "relative",
          }}
        ></section>
      </main>

      <footer style={{ backgroundColor: "purple" }}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel" className={styles.logo} />
        </a>
      </footer>

      {/* <style jsx>{`
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style> */}
    </div>
  );
}
