import Image from "next/image";
import photo1 from "./img/course-1.png";
import photo2 from "./img/course-2.png";
import photo3 from "./img/course-3.png";

export default function Home() {
  return (
    <section className="container">
      <div className="grid grid-cols-3	">
        <div>
          <Image
            className=""
            src={photo1}
            alt="course thumbnail"
            width={570}
            height={514}
          ></Image>
          <h1>This is a one line title</h1>
          <p>Two line paragraph Lorem ipsum dolor sit amet, consectetur</p>
          <div>
            <span>$1050</span>
            <span>$750</span>
            <span>You Save $250</span>
          </div>
          <div>
            <span>10 hrs</span>
            <span>308</span>
            <span>17</span>
          </div>
        </div>

        <div>
          <Image
            className=""
            src={photo2}
            alt="course thumbnail"
            width={570}
            height={514}
          ></Image>
          <h1>This is a one line title</h1>
          <p>Two line paragraph Lorem ipsum dolor sit amet, consectetur</p>
          <div>
            <span>$1050</span>
            <span>$750</span>
            <span>You Save $250</span>
          </div>
          <div>
            <span>10 hrs</span>
            <span>308</span>
            <span>17</span>
          </div>
        </div>
        <div>
          <Image
            className=""
            src={photo3}
            alt="course thumbnail"
            width={570}
            height={514}
          ></Image>
          <h1>This is a one line title</h1>
          <p>Two line paragraph Lorem ipsum dolor sit amet, consectetur</p>
          <div>
            <span>$1050</span>
            <span>$750</span>
            <span>You Save $250</span>
          </div>
          <div>
            <span>10 hrs</span>
            <span>308</span>
            <span>17</span>
          </div>
        </div>
      </div>
    </section>
  );
}
