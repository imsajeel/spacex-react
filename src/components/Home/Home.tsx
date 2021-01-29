import { Button, Text } from "@geist-ui/react";
import React from "react";
import homeImages from "../../images-home";
import Footer from "../Footer/Footer";

const Home = () => {
  return (
    <>
      <div
        style={{
          backgroundColor: "black",
          position: "absolute",
          top: `0px`,
          left: "10px",
          margin: "-10px",
          height: "20px",
          width: "100vw",
          zIndex: -1,
        }}
      ></div>
      <BackgroundImageComp url={homeImages[0].url} sort={0} fullScreen={true}>
        <div
          style={{
            position: "absolute",
            bottom: "10%",
            width: "50%",
            left: "10%",
          }}
        >
          <Text size="1rem" b>
            UPCOMING TEST
          </Text>
          <br />
          <Text size="1.5rem" b>
            STARSHIP SN9 HIGH-ALTITUDE FLIGHT TEST
          </Text>
          <br />
          <Button type="secondary" ghost>
            WATCH
          </Button>
        </div>
      </BackgroundImageComp>
      <BackgroundImageComp url={homeImages[1].url} sort={1} fullScreen={true}>
        <div
          style={{
            position: "absolute",
            bottom: "10%",
            width: "70%",
            maxWidth: "300px",
            right: "10%",
            padding: "20px",
            backgroundColor: "rgba(0,0,0,0.5)",
            borderRadius: "10px",
            textAlign: "center",
          }}
        >
          <Text size="1rem" b>
            RECENT LAUNCH
          </Text>
          <br />
          <Text size="1.5rem" b>
            STARSHIP SN8 TAKES FLIGHT
          </Text>
          <br />
          <Text p>
            NASA selected SpaceX to develop a lunar optimized Starship to
            transport crew between lunar orbit and the surface of the Moon as
            part of NASA’s Artemis program.
          </Text>
          <br />
          <Button type="secondary" ghost>
            REWATCH
          </Button>
        </div>
      </BackgroundImageComp>
      <BackgroundImageComp url={homeImages[2].url} sort={2} fullScreen={true}>
        <div
          style={{
            position: "absolute",
            bottom: "10%",
            width: "40%",
            minWidth: "235px",
            left: "10%",
            padding: "20px",
            backgroundColor: "rgba(0,0,0,0.5)",
            borderRadius: "10px",
          }}
        >
          <Text size="1.5rem" b>
            DRAGON DOCKING SIMULATOR
          </Text>
          <Text p>
            Dragon is designed to autonomously dock and undock with the
            International Space Station. However, the crew can take manual
            control of the spacecraft if necessary.
          </Text>
          <br />
          <Button type="secondary" ghost>
            REWATCH
          </Button>
        </div>
      </BackgroundImageComp>
      <BackgroundImageComp url={homeImages[3].url} sort={3} fullScreen={true}>
        <div
          style={{
            position: "absolute",
            bottom: "10%",
            width: "100%",
            // right: "10%",
            padding: "20px",
            textAlign: "center",
            backgroundColor: "rgba(0,0,0,0.7)",
          }}
        >
          <Text size="1rem" b>
            RECENT LAUNCH
          </Text>
          <br />
          <Text size="1.5rem" b>
            CREW-1 MISSION
          </Text>
          <br />
          <Button type="secondary" ghost>
            REWATCH
          </Button>
        </div>
      </BackgroundImageComp>
      <BackgroundImageComp url={homeImages[4].url} sort={4} fullScreen={true}>
        <div
          style={{
            position: "absolute",
            top: "10%",
            width: "70%",
            maxWidth: "300px",
            right: "10%",
            padding: "20px",
            backgroundColor: "rgba(0,0,0,0.5)",
            borderRadius: "10px",
          }}
        >
          <Text size="1rem" b>
            STARSHIP
          </Text>
          <br />
          <Text p>
            Starship is SpaceX’s fully reusable transportation system designed
            to carry both crew and cargo to the Earth’s orbit, the Moon, Mars,
            and beyond.
          </Text>
          <br />
          <Button type="secondary" ghost>
            Learn More
          </Button>
        </div>
      </BackgroundImageComp>
      <BackgroundImageComp url={homeImages[5].url} sort={5} fullScreen={true}>
        <div
          style={{
            position: "absolute",
            bottom: "10%",
            width: "50%",
            left: "50%",
            transform: "translateX(-50%)",
            padding: "20px",
            backgroundColor: "rgba(0,0,0,0.7)",
            borderRadius: "10px",
          }}
        >
          <Text size="1rem" b>
            05/01/20
          </Text>
          <br />
          <Text size="1.5rem" b>
            NASA SELECTS LUNAR OPTIMIZED STARSHIP
          </Text>
          <br />
          <Text p>
            NASA selected SpaceX to develop a lunar optimized Starship to
            transport crew between lunar orbit and the surface of the Moon as
            part of NASA’s Artemis program.
          </Text>
        </div>
      </BackgroundImageComp>
      <BackgroundImageComp url={""} sort={6} fullScreen={false}>
        <Footer />
      </BackgroundImageComp>
    </>
  );
};

const BackgroundImageComp = ({
  url,
  sort,
  fullScreen,
  children,
}: {
  url: any;
  sort: number;
  fullScreen: boolean;
  children: any;
}) => {
  return (
    <div
      style={{
        height: `${fullScreen === true ? "100vh" : "auto"}`,
        width: "100vw",
        position: "absolute",
        top: `${sort * 100}vh`,
        left: "10px",
        margin: "-10px",
        zIndex: -11,
        backgroundColor: "black",
        backgroundImage: `url(${url})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      {children}
    </div>
  );
};

export default Home;
