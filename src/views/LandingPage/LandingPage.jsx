/* eslint-disable react/prop-types */
import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// import InputAdornment from "@material-ui/core/InputAdornment";
import MomentUtils from "@date-io/moment";
import moment from "moment";
import { MuiPickersUtilsProvider, DatePicker } from "material-ui-pickers";
// @material-ui/icons
import {
  InputAdornment,
  Tooltip,
  FormControlLabel,
  Checkbox,
  MenuItem,
  OutlinedInput,
  InputLabel,
  Select,
  FormControl
} from "@material-ui/core";
import { MyLocation, LocationOn, Check } from "@material-ui/icons";
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
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import Parallax from "components/Parallax/Parallax.jsx";

import landingPageStyle from "assets/jss/material-kit-react/views/landingPage.jsx";

// Sections for this page
import ProductSection from "./Sections/ProductSection.jsx";
import TeamSection from "./Sections/TeamSection.jsx";
import WorkSection from "./Sections/WorkSection.jsx";
import Summary from "./Sections/Summary.jsx";
import loadingImg from "../../assets/img/loading.gif";
const dashboardRoutes = [];

class LandingPage extends React.Component {
  state = {
    startDate: moment(),
    endDate: undefined,
    startDateString: "",
    endDateString: "",
    startLocation: "",
    endLocation: "",
    passengers: 0,
    bags: 0,
    selectLocation: false,
    selectDates: false,
    travellingBothWay: false,
    selectPassengers: false,
    withBags: false,
    action: undefined,
    error: false,
    loading: false,
    showCars: false,
    selectCar: null
  };
  startLocation = location => {
    this.setState({
      startLocation: location,
      selectLocation: false,
      action: "LOCATION",
      error: false
    });
  };
  endLocation = location => {
    this.setState({ endLocation: location, action: "LOCATION", error: false });
  };
  startDate = date => {
    this.setState({
      startDate: date,
      startDateString: date.format("D-M-Y"),
      selectDates: false,
      action: "DATE",
      error: false
    });
  };
  endDate = date => {
    this.setState({
      endDate: date,
      endDateString: date.format("D-M-Y"),
      action: "DATE",
      error: false
    });
  };
  passengers = number => {
    this.setState({ passengers: number, error: false });
  };
  selectCar = type => {
    this.setState({ selectCar: type, showCars: false });
  };
  bags = number => {
    this.setState({
      bags: number,
      withBags: number ? true : false,
      error: false
    });
  };

  getQuotes = action => {
    let date = moment();
    const {
      startLocation,
      endLocation,
      startDateString,
      endDateString,
      passengers,
      travellingBothWay,
      withBags,
      bags
    } = this.state;
    switch (action) {
      case "LOCATION":
        if (startLocation && endLocation) {
          this.setState({
            selectLocation: true,
            action: "DATE",
            error: false,
            startDateString: date.format("D-M-Y")
          });
        } else {
          this.setState({ error: true });
        }
        break;
      case "DATE":
        if (startDateString && (!travellingBothWay || endDateString)) {
          this.setState({
            selectDates: true,
            action: "PASSENGER",
            error: false
          });
        } else {
          this.setState({ error: true });
        }
        break;
      case "PASSENGER":
        if (passengers && (!withBags || bags)) {
          this.setState({
            loading: true,
            selectPassengers: false,
            action: "SEARCH",
            error: false
          });
          setTimeout(() => {
            this.setState({ showCars: true });
          }, 3000);
        } else {
          this.setState({ error: true });
        }
        break;
      default:
        this.setState({ error: true });
        break;
    }
  };
  travellingBothWay = () => {
    let returnJourney = !this.state.travellingBothWay;
    let endDate = moment(this.state.startDate, "DD-MM-YYYY").add(1, "days");
    this.setState({
      error: false,
      travellingBothWay: returnJourney,
      endDate: returnJourney ? endDate : null,
      endDateString: returnJourney ? endDate.format("D-M-Y") : "",
      action: "DATE"
    });
  };

  queryFormHeader = () => {
    return (
      <CardHeader
        style={{
          paddingTop: "40px",
          borderBottom: "1px solid blue"
        }}
      >
        {!this.state.selectLocation ? (
          <h4>
            <b>
              Book your TRIP with <i>ETN</i>
            </b>
          </h4>
        ) : (
          <h4
            className=" mt-10"
            onClick={() => {
              this.startLocation(this.state.startLocation);
            }}
          >
            Travelling from{" "}
            <b className="highlight">{this.state.startLocation}</b> to{" "}
            <b className="highlight">{this.state.endLocation}</b>
          </h4>
        )}
        {this.state.selectDates && (
          <h4
            className="mt-10"
            onClick={() => {
              this.startDate(this.state.startDate);
            }}
          >
            <b className="highlight">Travel date: </b>
            <i>{this.state.startDateString}</i>
            {this.state.endDateString && (
              <b>
                , Returns:
                <i>{this.state.endDateString}</i>
              </b>
            )}
          </h4>
        )}
      </CardHeader>
    );
  };

  queryFormBody = classes => {
    return (
      <CardBody>
        {!this.state.selectLocation && (
          <React.Fragment>
            <GridItem>
              <CustomInput
                labelText="Pick-up location"
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
                        placement={window.innerWidth > 959 ? "top" : "left"}
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
                labelText="Drop off location"
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
                        placement={window.innerWidth > 959 ? "top" : "left"}
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
                  label={`Start from ${this.state.startLocation} on`}
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
                    label={`Start from ${this.state.endLocation} on`}
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
                      checkedIcon={<Check className={classes.checkedIcon} />}
                      icon={<Check className={classes.uncheckedIcon} />}
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
                <FormControl variant="outlined" className={classes.formControl}>
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
                <FormControl variant="outlined" className={classes.formControl}>
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
                    value={this.state.bags}
                    onChange={e => this.bags(e.target.value)}
                    input={
                      <OutlinedInput
                        labelWidth={1}
                        name="luggage"
                        id="luggage"
                      />
                    }
                  >
                    <MenuItem value="0">
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
    );
  };
  loading = () => {
    return (
      <CardBody>
        <img alt="Loading ..." style={{ width: "100%" }} src={loadingImg} />
      </CardBody>
    );
  };

  render() {
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
        {this.state.showCars && (
          <div
            className={classNames(classes.main, classes.mainRaised)}
            style={{ marginTop: 100 }}
          >
            <div className={classes.container}>
              <TeamSection selectMode={true} onSelect={this.selectCar} />
            </div>
          </div>
        )}
        {this.state.selectCar && (
          <div
            className={classNames(classes.main, classes.mainRaised)}
            style={{ marginTop: 100 }}
          >
            <div className={classes.container}>
              <Summary state={this.state} />
            </div>
          </div>
        )}
        {!this.state.selectCar && !this.state.showCars && (
          <React.Fragment>
            <Parallax filter image={require("assets/img/landing-bg.png")}>
              <div className={classes.container}>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={4}>
                    <Card>
                      {!this.state.loading && this.queryFormHeader()}
                      {this.state.loading
                        ? this.loading()
                        : this.queryFormBody(classes)}
                      {!this.state.loading && (
                        <CardFooter>
                          <GridItem>
                            <Button
                              fullWidth
                              color={this.state.error ? "danger" : "info"}
                              onClick={() => {
                                this.getQuotes(this.state.action);
                              }}
                            >
                              Get Quote
                            </Button>
                          </GridItem>
                        </CardFooter>
                      )}
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
          </React.Fragment>
        )}
      </div>
    );
  }
}

export default withStyles(landingPageStyle)(LandingPage);
