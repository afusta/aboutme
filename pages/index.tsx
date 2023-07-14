import Head from "next/head";
import Image from "next/image";
import { relative } from "path";
import styles from "../styles/Home.module.css";
import containerStyles from "../styles/HomeContainers.module.css";
// images
import profilePic from "../public/images/ProfilePic.jpeg";
import reactLogo from "../public/images/ReactLogo.png";
import CLogo from "../public/images/CLogo.png";
import CPPLogo from "../public/images/CPPLogo.png";
import JSLogo from "../public/images/JSlogo.png";
import mySQLLogo from "../public/images/mySQLLogo.png";
import NestLogo from "../public/images/NestLogo.png";
import NextLogo from "../public/images/NextLogo.png";
import NodeLogo from "../public/images/NodeLogo.png";
import PostreSQLLogo from "../public/images/PostgSQLLogo.png";
import Python from "../public/images/PythonLogo.png";
import ReduxLogo from "../public/images/ReduxLogo.png";
import TypeScriptLogo from "../public/images/TypescriptLogo.png";
import TechnoImage from "../components/TechnoImage";
import { PassThrough } from "stream";

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

            <div
              style={{
                width: "100%",
                padding: "0 15% 0 15%",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <p
                style={{
                  color: "white",
                  fontSize: "90px",
                  lineHeight: 1,
                  fontWeight: "bolder",
                }}
              >
                Hello,
                <br />
                I'm Pierre
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
            <Image
              className={styles.profilePic}
              src={profilePic}
              alt="profile Pic"
            ></Image>
            <div
              className={containerStyles.flexItemsAboutSection}
              style={{
                backgroundColor: "#f27a02",
                color: "navy",
                width: "100%",
                padding: "30px 50px",
              }}
              // className={containerStyles.flexItemsAboutSection}
            >
              <div
                className={containerStyles.flexContainer}
                style={{
                  flexDirection: "column",
                  justifyContent: "center",
                  backgroundColor: "red",
                }}
              >
                <p
                  style={{
                    color: "navy",
                    fontSize: "23px",
                    fontWeight: "Bold",
                    marginBottom: "5px",
                  }}
                >
                  About
                </p>
                <p
                  style={{
                    fontSize: 36,
                    fontWeight: "bold",
                    margin: "5px 0",
                    color: "navy",
                  }}
                >
                  Full Stack developer
                </p>
                <p style={{ color: "navy" }}>
                  My expertise is to develop and design complete web
                  appliactions.
                </p>
              </div>

              <div className={containerStyles.technoContainer}>
                <TechnoImage src={NextLogo} title="Next"></TechnoImage>
                <TechnoImage src={reactLogo} title="React"></TechnoImage>
                <TechnoImage
                  src={TypeScriptLogo}
                  title="TypeScript"
                  imgPadding={10}
                ></TechnoImage>
                <TechnoImage src={ReduxLogo} title="Redux"></TechnoImage>
                <TechnoImage
                  src={JSLogo}
                  title="JavaScript"
                  imgPadding={10}
                ></TechnoImage>
                <div className={containerStyles.technoContainer}>
                  <TechnoImage src={NestLogo} title="NestJS"></TechnoImage>
                  <TechnoImage src={NodeLogo} title="Node"></TechnoImage>
                  <TechnoImage
                    src={PostreSQLLogo}
                    title="Node.js"
                  ></TechnoImage>
                  <TechnoImage src={mySQLLogo} title="MySQL"></TechnoImage>
                </div>
                <div className={containerStyles.technoContainer}>
                  <TechnoImage src={Python} title="Python"></TechnoImage>
                  <TechnoImage src={CLogo} title="C"></TechnoImage>
                  <TechnoImage src={CPPLogo} title="C++"></TechnoImage>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          className={containerStyles.section}
          style={{
            backgroundColor: "cyan",
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
