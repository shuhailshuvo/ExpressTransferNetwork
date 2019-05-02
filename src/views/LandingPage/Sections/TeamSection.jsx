import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons
import { Tooltip } from "@material-ui/core";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";

import teamStyle from "assets/jss/material-kit-react/views/landingPageSections/teamStyle.jsx";

import car1 from "assets/img/cars/1.png";
import car2 from "assets/img/cars/2.png";
import car3 from "assets/img/cars/3.png";
import car4 from "assets/img/cars/4.png";

class TeamSection extends React.Component {
  render() {
    const { classes, selectMode, onSelect } = this.props;
    const imageClasses = classNames(
      classes.imgRaised,
      classes.imgRoundedCircle,
      classes.imgFluid
    );
    return (
      <div className={classes.section}>
        <h2 className={classes.title}>
          {selectMode ? "Select a car type" : "Available Car Types"}
        </h2>
        <div>
          <GridContainer>
            <GridItem xs={12} sm={12} md={4}>
              <Card plain>
                <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                  <img src={car1} alt="..." className={imageClasses} />
                </GridItem>
                <h4 className={classes.cardTitle}>
                  Family
                  <br />
                  <small className={classes.smallTitle}>Collection</small>
                </h4>
                <CardBody style={{ height: 80 }}>
                  <p className={classes.description}>
                    Meet the roomy Family Collection. Cars to keep everyone
                    happy.
                  </p>
                </CardBody>
                {selectMode ? (
                  <React.Fragment>
                    <CardFooter
                      className={classes.justifyCenter}
                      style={{ height: 80 }}
                    >
                      <p
                        style={{
                          fontSize: 40,
                          fontWeight: "bold",
                          color: "purple"
                        }}
                      >
                        $ 100
                      </p>
                    </CardFooter>
                    <CardFooter className={classes.justifyCenter}>
                      <Button
                        fullWidth
                        color="primary"
                        className={classes.margin5}
                        onClick={() => {
                          onSelect(1);
                        }}
                      >
                        Order Now
                      </Button>
                    </CardFooter>
                  </React.Fragment>
                ) : (
                  <CardFooter>
                    <Tooltip
                      id="instagram-twitter"
                      title="Max passenger 3 - 5"
                      placement={window.innerWidth > 959 ? "top" : "left"}
                      className="popper"
                    >
                      <Button
                        // justIcon
                        color="transparent"
                        className={classes.margin5}
                      >
                        <i className={classes.socials + " fas fa-users"} />
                        3-5
                      </Button>
                    </Tooltip>
                    <Tooltip
                      id="instagram-twitter"
                      title="Max Luggage 1 - 3"
                      placement={window.innerWidth > 959 ? "top" : "left"}
                      className="popper"
                    >
                      <Button
                        // justIcon
                        color="transparent"
                        className={classes.margin5}
                      >
                        <i className={classes.socials + " fas fa-suitcase"} /> 1
                        - 3
                      </Button>
                    </Tooltip>
                    <Tooltip
                      id="instagram-twitter"
                      title="Automatic Transmission"
                      placement={window.innerWidth > 959 ? "top" : "left"}
                      className="popper"
                    >
                      <Button
                        // justIcon
                        color="transparent"
                        className={classes.margin5}
                      >
                        <i className={classes.socials + " fas fa-car"} /> Auto
                      </Button>
                    </Tooltip>
                  </CardFooter>
                )}
              </Card>
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <Card plain>
                <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                  <img src={car2} alt="..." className={imageClasses} />
                </GridItem>
                <h4 className={classes.cardTitle}>
                  Adrenaline
                  <br />
                  <small className={classes.smallTitle}>Collection</small>
                </h4>
                <CardBody style={{ height: 80 }}>
                  <p className={classes.description}>
                    Say hello to our playful Adrenaline Collection. Cars to put
                    a smile on your face.
                  </p>
                </CardBody>
                {selectMode ? (
                  <React.Fragment>
                    <CardFooter
                      className={classes.justifyCenter}
                      style={{ height: 80 }}
                    >
                      <p
                        style={{
                          fontSize: 40,
                          fontWeight: "bold",
                          color: "purple"
                        }}
                      >
                        $ 150
                      </p>
                    </CardFooter>
                    <CardFooter className={classes.justifyCenter}>
                      <Button
                        fullWidth
                        color="primary"
                        className={classes.margin5}
                        onClick={() => {
                          onSelect(2);
                        }}
                      >
                        Order Now
                      </Button>
                    </CardFooter>
                  </React.Fragment>
                ) : (
                  <CardFooter>
                    <Tooltip
                      id="instagram-twitter"
                      title="Max passenger 3 - 5"
                      placement={window.innerWidth > 959 ? "top" : "left"}
                      className="popper"
                    >
                      <Button
                        // justIcon
                        color="transparent"
                        className={classes.margin5}
                      >
                        <i className={classes.socials + " fas fa-users"} />
                        3-5
                      </Button>
                    </Tooltip>
                    <Tooltip
                      id="instagram-twitter"
                      title="Max Luggage 1 - 3"
                      placement={window.innerWidth > 959 ? "top" : "left"}
                      className="popper"
                    >
                      <Button
                        // justIcon
                        color="transparent"
                        className={classes.margin5}
                      >
                        <i className={classes.socials + " fas fa-suitcase"} /> 1
                        - 3
                      </Button>
                    </Tooltip>
                    <Tooltip
                      id="instagram-twitter"
                      title="Automatic Transmission"
                      placement={window.innerWidth > 959 ? "top" : "left"}
                      className="popper"
                    >
                      <Button
                        // justIcon
                        color="transparent"
                        className={classes.margin5}
                      >
                        <i className={classes.socials + " fas fa-car"} /> Auto
                      </Button>
                    </Tooltip>
                  </CardFooter>
                )}
              </Card>
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <Card plain>
                <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                  <img src={car3} alt="..." className={imageClasses} />
                </GridItem>
                <h4 className={classes.cardTitle}>
                  Prestige
                  <br />
                  <small className={classes.smallTitle}>Collection</small>
                </h4>
                <CardBody style={{ height: 80 }}>
                  <p className={classes.description}>
                    For unrivalled luxury, choose the Prestige Collection and
                    enjoy 20% off the base rate*.
                  </p>
                </CardBody>
                {selectMode ? (
                  <React.Fragment>
                    <CardFooter
                      className={classes.justifyCenter}
                      style={{ height: 80 }}
                    >
                      <p
                        style={{
                          fontSize: 40,
                          fontWeight: "bold",
                          color: "purple"
                        }}
                      >
                        $ 200{" "}
                        <span
                          style={{
                            textDecoration: "line-through",
                            fontSize: 20
                          }}
                        >
                          $250
                        </span>
                      </p>
                      <p>Summer offer until September, 2019</p>
                    </CardFooter>
                    <CardFooter className={classes.justifyCenter}>
                      <Button
                        fullWidth
                        color="primary"
                        className={classes.margin5}
                        onClick={() => {
                          onSelect(3);
                        }}
                      >
                        Order Now
                      </Button>
                    </CardFooter>
                  </React.Fragment>
                ) : (
                  <CardFooter>
                    <Tooltip
                      id="instagram-twitter"
                      title="Max passenger 3 - 5"
                      placement={window.innerWidth > 959 ? "top" : "left"}
                      className="popper"
                    >
                      <Button
                        // justIcon
                        color="transparent"
                        className={classes.margin5}
                      >
                        <i className={classes.socials + " fas fa-users"} />
                        3-5
                      </Button>
                    </Tooltip>
                    <Tooltip
                      id="instagram-twitter"
                      title="Max Luggage 1 - 3"
                      placement={window.innerWidth > 959 ? "top" : "left"}
                      className="popper"
                    >
                      <Button
                        // justIcon
                        color="transparent"
                        className={classes.margin5}
                      >
                        <i className={classes.socials + " fas fa-suitcase"} /> 1
                        - 3
                      </Button>
                    </Tooltip>
                    <Tooltip
                      id="instagram-twitter"
                      title="Automatic Transmission"
                      placement={window.innerWidth > 959 ? "top" : "left"}
                      className="popper"
                    >
                      <Button
                        // justIcon
                        color="transparent"
                        className={classes.margin5}
                      >
                        <i className={classes.socials + " fas fa-car"} /> Auto
                      </Button>
                    </Tooltip>
                  </CardFooter>
                )}
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    );
  }
}

export default withStyles(teamStyle)(TeamSection);
