import Image from "next/image";
import photo1 from "./img/course-1.png";
import photo2 from "./img/course-2.png";
import photo3 from "./img/course-3.png";

export default function Home() {
  return (
    <section className="container mx-auto">
      <div className="grid gap-4 grid-cols-3">
        <div className="rounded-xl 	shadow-lg">
          <Image
            className="rounded-t-xl"
            src={photo1}
            alt="course thumbnail"
            width={570}
            height={514}
          ></Image>
          <div className="p-3">
            <h1>This is a one line title</h1>
            <p>Two line paragraph Lorem ipsum dolor sit amet, consectetur</p>
            <div className="flex">
              <span>$1050</span>
              <span>$750</span>
              <span>You Save $250</span>
            </div>
          </div>
          <hr className="border-x-gray-400"></hr>
          <div className="p-3">
            <div className="flex">
              <span>10 hrs</span>
              <span>308</span>
              <span>17</span>
            </div>
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
