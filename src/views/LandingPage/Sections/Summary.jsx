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
import CustomInput from "components/CustomInput/CustomInput.jsx";
import teamStyle from "assets/jss/material-kit-react/views/landingPageSections/teamStyle.jsx";

import car1 from "assets/img/cars/1.png";
import car2 from "assets/img/cars/2.png";
import car3 from "assets/img/cars/3.png";
import car4 from "assets/img/cars/4.png";
const bags = ["none", "Luggage", "Box", "Household", "Pet", "Child Item"];
const cars = ["none", "Family", "Adrenaline", "Prestige"];
class Summary extends React.Component {
  state = {
    name: "",
    email: "",
    phone: ""
  };
  handleChange = e => {
    let { name, value } = e;
    console.log(e);
    this.setState({ ...this.state, [name]: value });
  };
  render() {
    const { classes, state } = this.props;
    const imageClasses = classNames(
      classes.imgRaised,
      classes.imgRoundedCircle,
      classes.imgFluid
    );
    console.log(this.state);
    return (
      <div className={classes.section}>
        <div>
          <GridContainer>
            <GridItem xs={12} sm={12} md={4}>
              <Card plain>
                <h4 className={classes.cardTitle}>
                  Booking Summary
                  <br />
                  <small className={classes.smallTitle}>
                    You can change this anytime
                  </small>
                </h4>
                <CardBody>
                  <p
                    className={classes.description}
                    style={{ textAlign: "left", color: "black", fontSize: "" }}
                  >
                    From: {state.startLocation}
                    <br />
                    To: {state.endLocation}
                    <br />
                    Date: {state.startDateString}
                    <br />
                    {state.endDateString && (
                      <p>
                        Return: {state.endDateString}
                        <br />
                      </p>
                    )}
                    Passengers: {state.passengers}
                    <br />
                    {state.withBags && (
                      <p>
                        Bags: {bags[state.bags]}
                        <br />
                      </p>
                    )}
                    Car Type: {cars[state.selectCar]}
                    <br />
                  </p>
                </CardBody>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <Card plain>
                <h4 className={classes.cardTitle}>
                  Personal Information
                  <br />
                  <small className={classes.smallTitle}>
                    Required to confirm booking
                  </small>
                </h4>
                <CardBody style={{ height: 80 }}>
                  <div className={classes.description}>
                    <CustomInput
                      id="name"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        name: "name",
                        placeholder: "Full Name",
                        value: this.state.name,
                        onChange: e => {
                          this.handleChange(e.target);
                        }
                      }}
                    />
                    <CustomInput
                      id="email"
                      inputProps={{
                        name: "email",
                        placeholder: "Email",
                        value: this.state.email,
                        onChange: e => {
                          this.handleChange(e.target);
                        }
                      }}
                      formControlProps={{
                        fullWidth: true
                      }}
                    />
                    <CustomInput
                      id="phone"
                      inputProps={{
                        name: "phone",
                        placeholder: "Phone",
                        value: this.state.phone,
                        onChange: e => {
                          this.handleChange(e.target);
                        }
                      }}
                      formControlProps={{
                        fullWidth: true
                      }}
                    />
                  </div>
                </CardBody>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              {this.state.name && this.state.email && this.state.phone && (
                <Card plain>
                  <h4 className={classes.cardTitle}>
                    Chose Playment Method
                    <br />
                    <small className={classes.smallTitle}>
                      We support almost all popular way
                    </small>
                  </h4>
                  <CardBody style={{ height: 80 }}>
                    <div className={classes.description}>Paypal, ...</div>
                  </CardBody>
                  <CardFooter className={classes.justifyCenter}>
                    <Button
                      fullWidth
                      color="primary"
                      className={classes.margin5}
                      // onPress={() => {}}
                    >
                      Order Now
                    </Button>
                  </CardFooter>
                </Card>
              )}
            </GridItem>
          </GridContainer>
        </div>
      </div>
    );
  }
}

export default withStyles(teamStyle)(Summary);
