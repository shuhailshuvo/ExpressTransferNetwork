import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// import InputAdornment from "@material-ui/core/InputAdornment";
import MomentUtils from "@date-io/moment";
import { MuiPickersUtilsProvider, DatePicker } from "material-ui-pickers";
// @material-ui/icons
import {
  InputAdornment,
  Tooltip,
  FormControlLabel,
  Checkbox,
  MenuItem,
  Input,
  OutlinedInput,
  InputLabel,
  Select,
  FormControl
} from "@material-ui/core";
import { MyLocation, LocationOn, Check, People } from "@material-ui/icons";
// core components
import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import CustomDropdown from "components/CustomDropdown/CustomDropdown.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import Parallax from "components/Parallax/Parallax.jsx";

import landingPageStyle from "assets/jss/material-kit-react/views/landingPage.jsx";

// Sections for this page
import ProductSection from "./Sections/ProductSection.jsx";
import TeamSection from "./Sections/TeamSection.jsx";
import WorkSection from "./Sections/WorkSection.jsx";

const dashboardRoutes = [];

class LandingPage extends React.Component {
  state = {
    startDate: new Date(),
    endDate: undefined,
    startDateString: "",
    endDateString: "",
    startLocation: "a",
    endLocation: "a",
    passengers: 0,
    selectLocation: true,
    selectDates: true,
    travellingBothWay: false,
    selectPassengers: false
  };
  startLocation = location => {
    this.setState({ startLocation: location, selectLocation: false });
  };
  endLocation = location => {
    this.setState({ endLocation: location });
  };
  startDate = date => {
    this.setState({
      startDate: date,
      startDateString: date.format("D-M-Y"),
      selectDates: false
    });
  };
  endDate = date => {
    this.setState({ endDate: date, endDateString: date.format("D-M-Y") });
  };
  passengers = number => {
    this.setState({ passengers: number });
  };

  getQuotes = () => {
    const { startLocation, endLocation, startDate, passengers } = this.state;
    if (startLocation && endLocation) {
      this.setState({ selectLocation: true });
    }
    if (startDate) {
      this.setState({ selectDates: true });
    }
    if (passengers) {
      this.setState({ selectPassengers: true });
    }
  };
  travellingBothWay = () => {
    this.setState({ travellingBothWay: !this.state.travellingBothWay });
  };

  render() {
    console.log(
      this.state.startDate
        ? (this.state.startDate, this.state.startDate.toString())
        : this.state.startDate
    );
    const { classes, ...rest } = this.props;
    return (
      <div>
        <Header
          color="transparent"
          routes={dashboardRoutes}
          brand="Express Transfer Network"
          rightLinks={<HeaderLinks />}
          fixed
          changeColorOnScroll={{
            height: 60,
            color: "white"
          }}
          {...rest}
        />
        <Parallax filter image={require("assets/img/landing-bg.png")}>
          <div className={classes.container}>
            <GridContainer>
              <GridItem xs={12} sm={12} md={4}>
                <Card>
                  <CardHeader
                    style={{
                      paddingTop: "40px",
                      borderBottom: "1px solid blue"
                    }}
                  >
                    {!this.state.selectLocation ? (
                      <h4 className="text-center">
                        <b>
                          Book your TRIP with <i>ETN</i>
                        </b>
                      </h4>
                    ) : (
                      <h4
                        className="text-center mt-10"
                        onClick={() => {
                          this.startLocation(this.state.startLocation);
                        }}
                      >
                        <b>When to start?</b>
                        <hr />
                        <b className="highlight">Location: </b>
                        <i>{this.state.startLocation}</i> TO{" "}
                        <i>{this.state.endLocation}</i>
                      </h4>
                    )}
                  </CardHeader>
                  <CardBody>
                    {this.state.selectLocation &&
                      this.state.selectDates &&
                      !this.state.selectPassengers && (
                        <h4
                          className="text-center mt-10"
                          onClick={() => {
                            this.startDate(this.state.startDate);
                          }}
                        >
                          <b className="highlight">Date: </b>
                          <i>{this.state.startDateString}</i>
                          <br />
                          Returns:
                          <i>{this.state.endDateString}</i>
                        </h4>
                      )}
                    {!this.state.selectLocation && (
                      <React.Fragment>
                        <GridItem>
                          <CustomInput
                            labelText="From"
                            id="from"
                            formControlProps={{
                              fullWidth: true
                            }}
                            inputProps={{
                              endAdornment: (
                                <InputAdornment position="end">
                                  <Tooltip
                                    id="instagram-twitter"
                                    title="Pick my current location"
                                    placement={
                                      window.innerWidth > 959 ? "top" : "left"
                                    }
                                    classes={{ tooltip: classes.tooltip }}
                                  >
                                    <MyLocation />
                                  </Tooltip>
                                </InputAdornment>
                              ),
                              value: this.state.startLocation,
                              onChange: e => {
                                this.startLocation(e.target.value);
                              }
                            }}
                          />
                        </GridItem>
                        <GridItem>
                          <CustomInput
                            labelText="To"
                            id="to"
                            formControlProps={{
                              fullWidth: true
                            }}
                            inputProps={{
                              endAdornment: (
                                <InputAdornment position="end">
                                  <Tooltip
                                    id="instagram-twitter"
                                    title="Locate on Map"
                                    placement={
                                      window.innerWidth > 959 ? "top" : "left"
                                    }
                                    classes={{ tooltip: classes.tooltip }}
                                  >
                                    <LocationOn />
                                  </Tooltip>
                                </InputAdornment>
                              ),
                              value: this.state.endLocation,
                              onChange: e => {
                                this.endLocation(e.target.value);
                              }
                            }}
                          />
                        </GridItem>
                      </React.Fragment>
                    )}
                    {this.state.selectLocation && !this.state.selectDates && (
                      <React.Fragment>
                        <GridItem>
                          <MuiPickersUtilsProvider utils={MomentUtils}>
                            <DatePicker
                              margin="normal"
                              label="One Way"
                              value={this.state.startDate || new Date()}
                              onChange={e => {
                                this.startDate(e);
                              }}
                            />
                          </MuiPickersUtilsProvider>
                        </GridItem>
                        {this.state.travellingBothWay && (
                          <GridItem>
                            <MuiPickersUtilsProvider utils={MomentUtils}>
                              <DatePicker
                                margin="normal"
                                label="Return"
                                value={this.state.endDate || new Date()}
                                onChange={e => {
                                  this.endDate(e);
                                }}
                              />
                            </MuiPickersUtilsProvider>
                          </GridItem>
                        )}
                        <GridItem>
                          <div
                            className={
                              classes.checkboxAndRadio +
                              " " +
                              classes.checkboxAndRadioHorizontal
                            }
                          >
                            <FormControlLabel
                              control={
                                <Checkbox
                                  tabIndex={-1}
                                  onClick={() => this.travellingBothWay()}
                                  checked={this.state.travellingBothWay}
                                  checkedIcon={
                                    <Check className={classes.checkedIcon} />
                                  }
                                  icon={
                                    <Check className={classes.uncheckedIcon} />
                                  }
                                  classes={{ checked: classes.checked }}
                                />
                              }
                              classes={{ label: classes.label }}
                              label="Return?"
                            />
                          </div>
                        </GridItem>
                      </React.Fragment>
                    )}
                    {this.state.selectLocation &&
                      this.state.selectDates &&
                      !this.state.selectPassengers && (
                        <React.Fragment>
                          <GridItem>
                            <FormControl
                              variant="outlined"
                              className={classes.formControl}
                            >
                              <InputLabel
                                style={{ backgroundColor: "white" }}
                                ref={ref => {
                                  this.InputLabelRef = ref;
                                }}
                                htmlFor="passengers"
                              >
                                Passengers
                              </InputLabel>
                              <Select
                                style={{
                                  width: "16rem"
                                }}
                                value={this.state.passengers}
                                onChange={e => this.passengers(e.target.value)}
                                input={
                                  <OutlinedInput
                                    labelWidth={1}
                                    name="age"
                                    id="passengers"
                                  />
                                }
                              >
                                <MenuItem value={1}>1</MenuItem>
                                <MenuItem value={2}>2</MenuItem>
                                <MenuItem value={3}>3</MenuItem>
                                <MenuItem value={4}>4</MenuItem>
                                <MenuItem value={5}>5</MenuItem>
                                <MenuItem value={6}>6</MenuItem>
                                <MenuItem value={7}>7</MenuItem>
                                <MenuItem value={8}>8</MenuItem>
                                <MenuItem value={9}>9</MenuItem>
                                <MenuItem value={10}>10</MenuItem>
                                <MenuItem value={11}>11</MenuItem>
                                <MenuItem value={12}>12</MenuItem>
                              </Select>
                            </FormControl>
                          </GridItem>
                          <br />
                          <GridItem>
                            <FormControl
                              variant="outlined"
                              className={classes.formControl}
                            >
                              <InputLabel
                                style={{ backgroundColor: "white" }}
                                ref={ref => {
                                  this.InputLabelRef = ref;
                                }}
                                htmlFor="luggage"
                              >
                                Luggage
                              </InputLabel>
                              <Select
                                style={{
                                  width: "16rem"
                                }}
                                value={this.state.passengers}
                                onChange={e => this.passengers(e.target.value)}
                                input={
                                  <OutlinedInput
                                    labelWidth={1}
                                    name="luggage"
                                    id="luggage"
                                  />
                                }
                              >
                                <MenuItem value="">
                                  <em>None</em>
                                </MenuItem>
                                <MenuItem value={1}>Luggage</MenuItem>
                                <MenuItem value={2}>Box</MenuItem>
                                <MenuItem value={3}>Household</MenuItem>
                                <MenuItem value={4}>Pet</MenuItem>
                                <MenuItem value={5}>Child Item</MenuItem>
                              </Select>
                            </FormControl>
                          </GridItem>
                        </React.Fragment>
                      )}
                  </CardBody>
                  <CardFooter>
                    <GridItem>
                      <Button
                        onClick={() => {
                          this.getQuotes();
                        }}
                      >
                        Get Quote
                      </Button>
                    </GridItem>
                  </CardFooter>
                </Card>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>
            <ProductSection />
            <TeamSection />
            <WorkSection />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default withStyles(landingPageStyle)(LandingPage);
