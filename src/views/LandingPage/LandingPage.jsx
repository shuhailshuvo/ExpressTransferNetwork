import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// import InputAdornment from "@material-ui/core/InputAdornment";
import MomentUtils from '@date-io/moment';
import { MuiPickersUtilsProvider,  DatePicker } from 'material-ui-pickers';
// @material-ui/icons
import { Grid,InputAdornment} from '@material-ui/core';
import {MyLocation, LocationOn} from "@material-ui/icons";
// core components
import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardFooter from "components/Card/CardFooter.jsx";

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

const dashboardRoutes = [];
const styles = {
  grid: {
    width: '60%',
  },
};
class LandingPage extends React.Component {
  state = {
    // The first commit of Material-UI
    selectedDate: new Date('2014-08-18T21:11:54'),
  };
  handleDateChange = date => {
    this.setState({ selectedDate: date });
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
        <Parallax filter image={require("assets/img/landing-bg.png")}>
          <div className={classes.container}>
            <GridContainer>
              <GridItem xs={12} sm={12} md={4}>
                <Card>
                  
                  <CardBody>
                  <h3>Book your TRIP with <i>ETN</i></h3>
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
                              <MyLocation/>
                            </InputAdornment>
                          )
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
                              <LocationOn/>
                            </InputAdornment>
                          )
                        }}
                      />
                    </GridItem>
                    {/* <GridItem>
                      <MuiPickersUtilsProvider utils={MomentUtils} style={{backgroundolor:"red"}}>
                        <DatePicker
                        style={{backgroundolor:"green"}}
                          margin="normal"
                          label="One Way"
                          value={this.state.selectedDate}
                          onChange={this.handleDateChange}
                        />
                      </MuiPickersUtilsProvider>
                    </GridItem>
                    <GridItem>
                      <MuiPickersUtilsProvider utils={MomentUtils}>
                        <DatePicker
                          margin="normal"
                          label="Return"
                          value={this.state.selectedDate}
                          onChange={this.handleDateChange}
                        />
                      </MuiPickersUtilsProvider>
                    </GridItem> */}
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button
                      color="danger"
                      size="lg"
                    >
                      <i className="fas fa-angle-double-right" />
                       Get Quote
                    </Button>
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
