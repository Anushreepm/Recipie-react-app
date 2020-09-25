import React, { Component } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import axios from "axios";

export class LowMargin extends Component {
  state = {
    results: [],
    isLoading: true,
    errors: null,
  };

  componentDidMount() {
    axios
      .get(
        "https://beta.eagleowl.in/api/v1/mock/organization/18/outlet/18/recipe/margin-group/?order=bottom"
      )
      .then((response) => {
        console.log(response);
        response.data.results.map((result) => ({
          name: `${result.name}`,
          margin: `${result.margin}`,
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
        <div className="header-title"> Low Margin Recipes</div>
        <div className="header-body">
          {!isLoading ? (
            results.map((result) => {
              const { name, margin } = result;
              return (
                <div key={name} className="header-block">
                  <div className="title">{name} </div>
                  <div className="circular-bar">
                    <CircularProgressbar value={margin} text={margin} />
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

export default LowMargin;
