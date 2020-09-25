import { common } from "@material-ui/core/colors";
import React, { Component } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import BodyContainer from "./components/BodyContainer";
import Fluctuating from "./components/Fluctuating";
import Header from "./components/Header";

export default class App extends Component {
  constructor(props) {
    super();
    this.state = {
      filters: {
        incorrect: false,
        untagged: false,
        disabled: false,
      },
      data: [],
      page: 1,
      hasMore: true,
    };

    this.changeFilter = this.changeFilter.bind(this);
    this.fetchData = this.fetchData.bind(this);
  }

  async fetchData() {
    const { incorrect, untagged, disabled } = this.state.filters;
    const { page, data: oldData } = this.state;

    const url = `https://beta.eagleowl.in/api/v1/mock/organization/18/outlet/18/recipe/recipes/?page=${page}&is_incorrect=${incorrect}&is_untagged=${untagged}&is_disabled=${disabled}`;

    try {
      const response = await fetch(url);
      const json = await response.json();
      this.setState({
        data: oldData.concat(json.results),
        page: page + 1,
        hasMore: !!json.next,
      });
    } catch (error) {
      console.log("something went wrong...", error);
    }
  }

  async componentDidMount() {
    await this.fetchData();
  }
  async componentDidUpdate(_, previousState) {
    if (previousState.filters === this.state.filters) return;
    await this.fetchData();
  }

  changeFilter(filterName) {
    filterName = filterName.toLowerCase();
    const newFilters = Object.keys(this.state.filters).reduce((acc, key) => {
      acc[key] = false;
      return acc;
    }, {});

    if (filterName !== "all") newFilters[filterName] = true;
    console.log(newFilters);
    this.setState({ filters: newFilters, data: [], page: 1 });
  }

  render() {
    console.log(this.state);
    const commonProps = {
      ...this.state,
      fetchData: this.fetchData,
      changeFilter: this.changeFilter,
    };
    const filters = ["All", "Incorrect", "Untagged", "Disabled"];
    return (
      <>
        <div className="main-container">
          <Header state={commonProps} />
          <BodyContainer state={commonProps} />
        </div>
      </>
    );
  }
}
