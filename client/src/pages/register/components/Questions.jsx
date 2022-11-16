import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function SimpleAccordion() {
  return (
    <div
      style={{
        backgroundColor: "black",
        borderBottom: "8px solid #222",
        paddingBottom: "50px",
        paddingTop: "50px",
      }}
    >
      <h1 className="text-center text-white mb-5">
        Frequently Asked Questions
      </h1>
      <div style={{ width: "50%", margin: "auto" }}>
        <Accordion
          style={{
            marginBottom: "10px",
            backgroundColor: "#303030",
            color: "white",
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>What is Netflix ?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Netflix is a streaming service that offers a wide variety of
              award-winning TV shows, movies, anime, documentaries, and more on
              thousands of internet-connected devices.
              <br />
              <br /> You can watch as much as you want, whenever you want
              without a single commercial – all for one low monthly price.
              There's always something new to discover and new TV shows and
              movies are added every week!
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          style={{
            marginBottom: "10px",
            backgroundColor: "#303030",
            color: "white",
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>How much does Netflix cost ?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Watch Netflix on your smartphone, tablet, Smart TV, laptop, or
              streaming device, all for one fixed monthly fee. Plans range from
              EGP120 to EGP200 a month. No extra costs, no contracts.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          style={{
            marginBottom: "10px",
            backgroundColor: "#303030",
            color: "white",
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>Where can I watch ?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Watch anywhere, anytime. Sign in with your Netflix account to
              watch instantly on the web at netflix.com from your personal
              computer or on any internet-connected device that offers the
              Netflix app, including smart TVs, smartphones, tablets, streaming
              media players and game consoles. <br />
              <br /> You can also download your favorite shows with the iOS,
              Android, or Windows 10 app. Use downloads to watch while you're on
              the go and without an internet connection. Take Netflix with you
              anywhere.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          style={{
            marginBottom: "10px",
            backgroundColor: "#303030",
            color: "white",
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>How do I cancel ?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Netflix is flexible. There are no pesky contracts and no
              commitments. You can easily cancel your account online in two
              clicks. There are no cancellation fees – start or stop your
              account anytime.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          style={{
            marginBottom: "10px",
            backgroundColor: "#303030",
            color: "white",
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>What can I watch on Netflix ?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Netflix has an extensive library of feature films, documentaries,
              TV shows, anime, award-winning Netflix originals, and more. Watch
              as much as you want, anytime you want.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          style={{
            marginBottom: "10px",
            backgroundColor: "#303030",
            color: "white",
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>Is Netflix good for kids ?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              The Netflix Kids experience is included in your membership to give
              parents control while kids enjoy family-friendly TV shows and
              movies in their own space.
              <br />
              <br /> Kids profiles come with PIN-protected parental controls
              that let you restrict the maturity rating of content kids can
              watch and block specific titles you don’t want kids to see.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
}
