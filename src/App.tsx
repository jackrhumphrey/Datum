import React from "react";
import "./App.css";
import Header from "./components/Header";
import Slide from "./components/Slide";
import Footer from "./components/Footer";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Contact from "./components/Contact";
import TechnologyItem from "./components/TechnologyItem";
import TeamItem from "./components/TeamItem";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: "#00567b"
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    }
  }
});

interface IProps {}

interface IState {
  collapsed: boolean;
}

class App extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      collapsed: true
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    if (this.state.collapsed == true) {
      this.setState({
        collapsed: false
      });
    } else {
      this.setState({
        collapsed: true
      });
    }
    $('.right').toggleClass('rightactive');
    $('.logo').toggleClass('logoactive');
  }

  render() {
    return (
      <div>
        <ThemeProvider theme={theme}>
          <Header collapsed={this.state.collapsed} toggle={this.toggle} />

          <Box className="technology">
            <Container>
              <Slide title="header" subtitle="Subheader" />
              <div className="container">
                <Grid container spacing={0} className="container">
                  <Grid item xs={3}>
                    <TechnologyItem
                      icon="Empty"
                      title="Title"
                      content="Content"
                    />
                  </Grid>
                  <Grid item xs={3}>
                    <TechnologyItem
                      icon="Empty"
                      title="Title"
                      content="Content"
                    />
                  </Grid>
                  <Grid item xs={3}>
                    <TechnologyItem
                      icon="Empty"
                      title="Title"
                      content="Content"
                    />
                  </Grid>
                  <Grid item xs={3}>
                    <TechnologyItem
                      icon="Empty"
                      title="Title"
                      content="Content"
                    />
                  </Grid>
                </Grid>
              </div>
            </Container>
          </Box>

          <Box className="team">
            <Container>
              <Slide title="header" subtitle="Subheader" />
              <div className="container">
                <Grid container spacing={1}>
                  <Grid item xs={3}>
                    <TeamItem
                      photo="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                      name="Name"
                      role="Role"
                      description="Description"
                    />
                  </Grid>
                  <Grid item xs={3}>
                    <TeamItem
                      photo="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                      name="Name"
                      role="Role"
                      description="Description"
                    />
                  </Grid>
                  <Grid item xs={3}>
                    <TeamItem
                      photo="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                      name="Name"
                      role="Role"
                      description="Description"
                    />
                  </Grid>
                  <Grid item xs={3}>
                    <TeamItem
                      photo="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                      name="Name"
                      role="Role"
                      description="Description"
                    />
                  </Grid>
                </Grid>
              </div>
            </Container>
          </Box>

          <Box className="contact">
            <Container>
              <Slide title="header" subtitle="Subheader" />
              <Contact />
            </Container>
          </Box>

          <Footer />
        </ThemeProvider>
      </div>
    );
  }
}

export default App;