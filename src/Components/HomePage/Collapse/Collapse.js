import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { useTheme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "65%",
    textAlign: "left",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
    fontFamily: "Montserrat,sans-serif",
    fontWeight: "500",
    fontSize: "1.1rem",
    [theme.breakpoints.down("sm")]: {
      fontSize: "0.8rem",
    },
  },
  collapseContainer: {
    paddingTop: "0.5rem",
    paddingBottom: "0.5rem",
    backgroundColor: "#303030",
    color: "white",
    marginBottom: "0.3rem",
    [theme.breakpoints.down("sm")]: {
      paddingTop: "0rem",
      paddingBottom: "0rem",
    },
  },
  expandIconStyle: {
    color: "white",
  },
  TypoStyles: {
    [theme.breakpoints.down("sm")]: {
      fontSize: "0.6rem",
    },
  },
}));

const Collapse = () => {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <div className={classes.root}>
      <Accordion className={classes.collapseContainer}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className={classes.expandIconStyle} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          className={classes.summaryStyle}
        >
          <Typography className={classes.heading}>What is Stream?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={classes.TypoStyles}>
            Stream is a streaming service that offers a wide variety of
            award-winning TV shows, movies, anime, documentaries, and more on
            thousands of internet-connected devices.
            <br />
            <br />
            You can watch as much as you want, whenever you want without a
            single commercial – all for one low monthly price. There's always
            something new to discover and new TV shows and movies are added
            every week!
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className={classes.collapseContainer}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className={classes.expandIconStyle} />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>
            How much does Stream cost?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={classes.TypoStyles}>
            Watch Stream on your smartphone, tablet, Smart TV, laptop, or
            streaming device, all for one fixed monthly fee. Plans range from
            Rs950 to Rs1,500 a month. No extra costs, no contracts.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className={classes.collapseContainer}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className={classes.expandIconStyle} />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>
            Where can I Watch?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={classes.TypoStyles}>
            Watch anywhere, anytime, on an unlimited number of devices. Sign in
            with your Stream account to watch instantly on the web at Stream.com
            from your personal computer or on any internet-connected device that
            offers the Stream app, including smart TVs, smartphones, tablets,
            streaming media players and game consoles.
            <br />
            <br />
            You can also download your favorite shows with the iOS, Android, or
            Windows 10 app. Use downloads to watch while you're on the go and
            without an internet connection. Take Stream with you anywhere.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className={classes.collapseContainer}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className={classes.expandIconStyle} />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>How do I cancel?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={classes.TypoStyles}>
            Stream is flexible. There are no pesky contracts and no commitments.
            You can easily cancel your account online in two clicks. There are
            no cancellation fees – start or stop your account anytime.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className={classes.collapseContainer}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className={classes.expandIconStyle} />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>
            What can I watch on Stream?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={classes.TypoStyles}>
            Stream has an extensive library of feature films, documentaries, TV
            shows, anime, award-winning Stream originals, and more. Watch as
            much as you want, anytime you want.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default Collapse;
