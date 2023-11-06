import { Typography } from "@mui/material";
import "../styling/About.css";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import CropSquareIcon from "@mui/icons-material/CropSquare";
import WcIcon from "@mui/icons-material/Wc";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import WifiIcon from "@mui/icons-material/Wifi";
import TvIcon from "@mui/icons-material/Tv";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import ImportExportIcon from "@mui/icons-material/ImportExport";
import WeekendIcon from "@mui/icons-material/Weekend";
import WbIridescentIcon from "@mui/icons-material/WbIridescent";
import SettingsBrightnessIcon from "@mui/icons-material/SettingsBrightness";
import AirIcon from "@mui/icons-material/Air";
import KitchenIcon from "@mui/icons-material/Kitchen";
import CheckroomIcon from "@mui/icons-material/Checkroom";

function About() {
  return (
    <Box className='main container'>
      <Box className='mainpicture'>
        <div class='bottom-left'>About</div>
        <img
          src='images/pictureOfDanceStudio.jpg'
          alt='about main'
          width='100%'
          height='582px'
          display='block'
          margin='auto'
          text-align='center'
        ></img>
      </Box>
      <Container className='main text'>
        <Box
          className='text1'
          sx={{ mt: 12 }}
        >
          <h2> A home that welcomes all dancers</h2>
          <p>
            Two Car Studio is a modern and dynamic dance studio that offers a
            wide range of classes for dancers of all ages and skill levels.
            Located in the heart of the city, the studio is known for its
            spacious and well-equipped dance floor, high-quality sound system,
            and friendly and knowledgeable instructors.{" "}
          </p>

          <p>
            The studio's name, Two Car, comes from its unique layout, which was
            once a two-car garage that has been transformed into a
            state-of-the-art dance space. The studio's design is sleek and
            minimalist, with clean lines and an industrial feel that gives it a
            modern edge.
          </p>

          <p>
            Two Car Studio offers a diverse range of classes, from ballet and
            contemporary to hip hop and jazz, with classes tailored to students
            of all levels, from beginners to advanced dancers. In addition to
            regular classes, the studio also hosts workshops, master classes,
            and intensives featuring renowned choreographers and instructors
            from the dance world.
          </p>

          <p>
            Overall, Two Car Studio is a welcoming and inclusive space that
            fosters creativity, community, and a love of dance. With its modern
            design, top-notch facilities, and expert instructors, Two Car Studio
            is a leading destination for dancers and fitness enthusiasts alike.
          </p>

          <p>We hope to host you here at Two Car soon!</p>
        </Box>
        <Box
          className='Keo Info'
          sx={{ display: "flex", mt: 12 }}
        >
          <Box>
            <img
              src='images/Rectangle 10.png'
              alt='Keo'
              height='200'
            ></img>
          </Box>
          <Box className='Keo-text'>
            <h2>Founded by Keo Sanedrin</h2>
            <p>
              Initially starting out as a studio kid in 2012, Keo has since been
              part of teams such as Team Millennia Jrs, Young Skull Club, GRaVy
              Babies, and Groove. He is currently practicing as a real estate
              agent and is attending Stanbridge University to earn his bachelors
              of science in nursing. Outside of school and work, fashion and
              basketball are some of his hobbies besides of dance.
            </p>
          </Box>
        </Box>
        <Box className='studio space pictures'>
          <h2> Our studio space</h2>
          <Box>
            <img
              src='images/Rectangle 11.png'
              alt='1'
            />
            <img
              src='images/Rectangle 12.png'
              alt='2'
            />
          </Box>
          <Box>
            <img
              src='images/Rectangle 13.png'
              alt='3'
            />
            <img
              src='images/Rectangle 14.png'
              alt='4'
            />
          </Box>
        </Box>
        <Box
          className='studio specs'
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            mt: 12,
            mb: 15,
          }}
        >
          <h2>What the studio offers</h2>
          <Box
            className='specs'
            sx={{ display: "flex" }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                mr: 5,
              }}
            >
              <Typography>
                <CropSquareIcon />
                15.1ft x 18.3ft Wood Flooring
              </Typography>
              <Typography>
                <WcIcon />
                Full Bathroom
              </Typography>
              <Typography>
                <MusicNoteIcon />
                Bose S1 Pro Speaker
              </Typography>
              <Typography>
                <WifiIcon />
                Wifi
              </Typography>
              <Typography>
                <TvIcon />
                Smart TV: screen mirroring, Youtube, Netflix
              </Typography>
              <Typography>
                <AcUnitIcon />
                LG air conditioning unit
              </Typography>
              <Typography>
                <ImportExportIcon></ImportExportIcon>Ceiling to floor mirrors
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-around",
                ml: 5,
              }}
            >
              <Typography>
                <WeekendIcon />
                Seating/lounge area
              </Typography>
              <Typography>
                <WbIridescentIcon />
                Color chaning LED flood lights
              </Typography>
              <Typography>
                <SettingsBrightnessIcon />
                Dimmable main house lights
              </Typography>
              <Typography>
                <AirIcon />
                UV air purifier
              </Typography>
              <Typography>
                <KitchenIcon />
                Fridge space with drinks for $1
              </Typography>
              <Typography>
                <CheckroomIcon />
                Vintage clothes for sale
              </Typography>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default About;
