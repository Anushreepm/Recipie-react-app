import React, { Component } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import axios from "axios";

export class Fluctuating extends Component {
  state = {
    results: [],
    isLoading: true,
    errors: null,
  };

  componentDidMount() {
    axios
      .get(
        "https://beta.eagleowl.in/api/v1/mock/organization/18/outlet/18/recipe/fluctuation-group/?order=top"
      )
      .then((response) => {
        console.log(response);
        response.data.results.map((result) => ({
          name: `${result.name}`,
          margin: `${result.fluctuation}`,
        }));
        this.setState({
          results: response.data.results,
          isLoading: false,
        });
      })
      .catch((error) => this.setState({ error, isLoading: false }));
  }
  render() {
    const { isLoading, results } = this.state;
    return (
      <>
        <div className="header-title"> Fluctuating Recipes</div>
        <div className="header-body">
          {!isLoading ? (
            results.map((result) => {
              const { name, fluctuation } = result;
              return (
                <div key={name} className="header-block">
                  <div className="title">{name} </div>
                  <div className="circular-bar">
                    <CircularProgressbar
                      value={fluctuation}
                      text={fluctuation}
                    />
                  </div>
                </div>
              );
            })
          ) : (
            <div></div>
          )}
        </div>
      </>
    );
  }
}

export default Fluctuating;
