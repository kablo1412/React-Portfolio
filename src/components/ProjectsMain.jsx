import styles from "./ProjectsMain.module.css";

const projectsArray = [
  {
    redniBroj: 1,
    imeProjekta: "FPL 22/23 quiz",
    opisProjekta:
      "Fantasy Premier League (FPL) is an online fantasy football game based on the English Premier League (EPL). The game allows football fans to create their own virtual teams of real-life Premier League players and compete against other players' teams. Quiz is based for the latest season 2022/2023.",
    linkProjekta: "https://genuine-cat-cefa4a.netlify.app/",
    slika: "./data/QuizKPortfolio-astonishing-centaur-988d80.netlify.app.png",
  },
  {
    redniBroj: 2,
    imeProjekta: "ChatApp",
    opisProjekta:
      "ChatApp made with Scaledrone. Scaledrone is a cloud-based real-time messaging platform that provides easy-to-use APIs and tools for building real-time features in web and mobile applications.",
    linkProjekta: "https://melodious-paletas-51e9d8.netlify.app/",
    slika: "data/FireShot Capture 014 - ChatApp.png",
  },
  {
    redniBroj: 3,
    imeProjekta: "Fonts",
    opisProjekta:
      "Simple site made with HTML & CSS which represents few of the most used and well made fonts.",
    linkProjekta: "https://bright-tarsier-eab436.netlify.app/",
    slika: "data/FireShot Capture 001 - Fonts KPortfolio.png",
  },
  {
    redniBroj: 4,
    imeProjekta: "Caffe-bar WebPage",
    opisProjekta: "Web page made for service facility.",
    linkProjekta: "https://celadon-hummingbird-b66859.netlify.app/",
    slika: "data/FireShot Capture 004 - Caffee Bar Pinky.png",
  },
  {
    redniBroj: 5,
    imeProjekta: "Vowel Counter",
    opisProjekta:
      "Input field that counts all of the vowels you have typed in your word or sentence.",
    linkProjekta: "https://bucolic-pika-37b59c.netlify.app/",
    slika: "data/FireShot Capture 007 - VowelCounter.png",
  },
  {
    redniBroj: 6,
    imeProjekta: "European Countries",
    opisProjekta:
      "List of all of the European countries in alphabetical order.",
    linkProjekta: "https://admirable-sunshine-9fa007.netlify.app/",
    slika: "./data/FireShot Capture 005 - Europe by KPortfolio third.png",
  },
  {
    redniBroj: 7,
    imeProjekta: "Currency Exchanger",
    opisProjekta: "List of few of the currencies.",
    linkProjekta:
      "https://64bbf93f3be6e37a3f4cc0b0--transcendent-zabaione-d2fd93.netlify.app/",
    slika: "data/FireShot Capture 012 - CurrencyEx.png",
  },
  {
    redniBroj: 8,
    imeProjekta: "NASA Picture Of The Day",
    opisProjekta:
      "Daily updating content. Made with NASA official API in React native.",
    linkProjekta:
      "https://64cd03c57fce35159ef0a590--melodious-yeot-2630e6.netlify.app/",
    slika: "data/nasa-pod-kp.png",
  },
  {
    redniBroj: 9,
    imeProjekta: "Mars Rover Photo",
    opisProjekta:
      "Daily updating content. Made with NASA official API in React native.",
    linkProjekta:
      "https://64ce4358be3d0c33500eb0d9--ephemeral-kataifi-149085.netlify.app/",
    slika: "data/FireShot Capture 017 - Mars Rover Photo by KPortfolio.png",
  },
];

function ProjectsMain() {
  return (
    <div className={styles.projectsMain}>
      {projectsArray.map((project) => (
        <div className={styles.projects}>
          <div className={styles.project}>
            <h5 className={styles.redniBroj} key={project.redniBroj}>
              0{project.redniBroj}
            </h5>
            <div className={styles.contentProjekta}>
              <h2 className={styles.imeProjekta}>{project.imeProjekta}</h2>
              <p className={styles.opisProjekta}>{project.opisProjekta}</p>
              {/*<img src={project.slika} alt="FPLQuizpicture" />*/}
            </div>
            <a
              className={`${"button"} ${styles.aTag}`}
              href={project.linkProjekta}
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit Project
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
export default ProjectsMain;
