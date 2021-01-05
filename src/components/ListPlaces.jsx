import React, { Component } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

import Slider from "./Slider";

class ListPlaces extends Component {
  state = {
    places: [],
    loading: true,
    error: null,
    detailedPlaceLoading: null,
  };

  fetchPlaces = async () => {
    try {
      const resp = await fetch(process.env.REACT_APP_BE + "places");
      if (resp.ok) {
        let places = await resp.json();
        setTimeout(() => {
          this.setState({
            places,
            loading: false,
            error: null,
          });
        }, 500);
      } else {
        this.setState({ loading: false, error: "500 - Server error" });
      }
    } catch (e) {
      this.setState({ loading: false, error: "500 - Server error" });
    }
  };

  componentDidMount() {
    this.fetchPlaces();
  }

  loadPlaceDetails = async (id) => {
    try {
      this.setState(
        {
          detailedPlaceLoading: id,
        },
        async () => {
          const resp = await fetch(process.env.REACT_APP_BE + "places/" + id);

          if (resp.ok) {
            setTimeout(() => {
              this.setState(
                {
                  detailedPlaceLoading: null,
                  error: null,
                },
                async () => {
                  await this.fetchCart();
                }
              );
            }, 500);
          } else {
            this.setState({
              detailedPlaceLoading: null,
              error: "500 - Server error",
            });
          }
        }
      );
    } catch (e) {
      this.setState({
        cartLoading: null,
        error: "500 - Server error",
      });
    }
  };

  render() {
    const { places } = this.state;
    return (
      <Container id="places" className="rounded">
        <div className="d-flex flex-column pt-5">
          <div>300+ stays</div>
          <div>
            <h1 className="title">Stays in selected map area</h1>
          </div>
          <div className="d-flex justify-content-between align-items-center my-3">
            <div className="d-flex">
              <span className="border border-1 border-muted rounded-pill py-2 px-3 mr-2">
                Cancellation flexibility
              </span>
              <span className="border border-1 border-muted rounded-pill py-2 px-3 mr-2">
                Type of place
              </span>
              <span className="border border-1 border-muted rounded-pill py-2 px-3 mr-2">
                Price
              </span>
              <span className="border border-1 border-muted rounded-pill py-2 px-3 mr-2">
                Instant Book
              </span>
              <span className="border border-1 border-muted rounded-pill py-2 px-3">
                More filters
              </span>
            </div>
            <div>
              <span className="mr-2">
                <i class="far fa-map"></i>
              </span>
              <span>Show map</span>
            </div>
          </div>
          <div>
            Review COVID-19 travel restrictions before you book.{" "}
            <Link to="/">Learn more</Link>{" "}
          </div>
        </div>

        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 pt-2">
          {places.map((place) => (
            <div className="col pb-5">
              <div className="pb-4 slider">
                <Slider />
              </div>

              <div>
                <span>
                  <i className="fas fa-star text-danger"></i>
                </span>{" "}
                4.47<span> (19)</span>
              </div>
              <div className="font-size-1">
                <span>Entire apartment</span> <span>·</span> <span>Lagos</span>{" "}
              </div>
              <div className="font-size-1">
                Chic Studio Apartment In the Best Part of Lekki!{" "}
              </div>
              <div className="font-size-1">
                <span className="bold">$50</span> / night
              </div>
            </div>
          ))}

          <div className="col pb-5">
            <div className="pb-4 slider">
              <Slider />
            </div>

            <div>
              <span>
                <i className="fas fa-star text-danger"></i>
              </span>{" "}
              4.47<span> (19)</span>
            </div>
            <div className="font-size-1">
              <span>Entire apartment</span> <span>·</span> <span>Lagos</span>{" "}
            </div>
            <div className="font-size-1">
              Chic Studio Apartment In the Best Part of Lekki!{" "}
            </div>
            <div className="font-size-1">
              <span className="bold">$50</span> / night
            </div>
          </div>

          <div className="col pb-5">
            <div className="pb-4 slider">
              <Slider />
            </div>

            <div>
              <span>
                <i className="fas fa-star text-danger"></i>
              </span>{" "}
              4.47<span> (19)</span>
            </div>
            <div className="font-size-1">
              <span>Entire apartment</span> <span>·</span> <span>Lagos</span>{" "}
            </div>
            <div className="font-size-1">
              Chic Studio Apartment In the Best Part of Lekki!{" "}
            </div>
            <div className="font-size-1">
              <span className="bold">$50</span> / night
            </div>
          </div>

          <div className="col pb-5">
            <div className="pb-4 slider">
              <Slider />
            </div>

            <div>
              <span>
                <i className="fas fa-star text-danger"></i>
              </span>{" "}
              4.47<span> (19)</span>
            </div>
            <div className="font-size-1">
              <span>Entire apartment</span> <span>·</span> <span>Lagos</span>{" "}
            </div>
            <div className="font-size-1">
              Chic Studio Apartment In the Best Part of Lekki!{" "}
            </div>
            <div className="font-size-1">
              <span className="bold">$50</span> / night
            </div>
          </div>

          <div className="col pb-5">
            <div className="pb-4 slider">
              <Slider />
            </div>

            <div>
              <span>
                <i className="fas fa-star text-danger"></i>
              </span>{" "}
              4.47<span> (19)</span>
            </div>
            <div className="font-size-1">
              <span>Entire apartment</span> <span>·</span> <span>Lagos</span>{" "}
            </div>
            <div className="font-size-1">
              Chic Studio Apartment In the Best Part of Lekki!{" "}
            </div>
            <div className="font-size-1">
              <span className="bold">$50</span> / night
            </div>
          </div>

          <div className="col pb-5">
            <div className="pb-4 slider">
              <Slider />
            </div>

            <div>
              <span>
                <i className="fas fa-star text-danger"></i>
              </span>{" "}
              4.47<span> (19)</span>
            </div>
            <div className="font-size-1">
              <span>Entire apartment</span> <span>·</span> <span>Lagos</span>{" "}
            </div>
            <div className="font-size-1">
              Chic Studio Apartment In the Best Part of Lekki!{" "}
            </div>
            <div className="font-size-1">
              <span className="bold">$50</span> / night
            </div>
          </div>

          <div className="col pb-5">
            <div className="pb-4 slider">
              <Slider />
            </div>

            <div>
              <span>
                <i className="fas fa-star text-danger"></i>
              </span>{" "}
              4.47<span> (19)</span>
            </div>
            <div className="font-size-1">
              <span>Entire apartment</span> <span>·</span> <span>Lagos</span>{" "}
            </div>
            <div className="font-size-1">
              Chic Studio Apartment In the Best Part of Lekki!{" "}
            </div>
            <div className="font-size-1">
              <span className="bold">$50</span> / night
            </div>
          </div>

          <div className="col pb-5">
            <div className="pb-4 slider">
              <Slider />
            </div>

            <div>
              <span>
                <i className="fas fa-star text-danger"></i>
              </span>{" "}
              4.47<span> (19)</span>
            </div>
            <div className="font-size-1">
              <span>Entire apartment</span> <span>·</span> <span>Lagos</span>{" "}
            </div>
            <div className="font-size-1">
              Chic Studio Apartment In the Best Part of Lekki!{" "}
            </div>
            <div className="font-size-1">
              <span className="bold">$50</span> / night
            </div>
          </div>

          <div className="col pb-5">
            <div className="pb-4 slider">
              <Slider />
            </div>

            <div>
              <span>
                <i className="fas fa-star text-danger"></i>
              </span>{" "}
              4.47<span> (19)</span>
            </div>
            <div className="font-size-1">
              <span>Entire apartment</span> <span>·</span> <span>Lagos</span>{" "}
            </div>
            <div className="font-size-1">
              Chic Studio Apartment In the Best Part of Lekki!{" "}
            </div>
            <div className="font-size-1">
              <span className="bold">$50</span> / night
            </div>
          </div>

          <div className="col pb-5">
            <div className="pb-4 slider">
              <Slider />
            </div>

            <div>
              <span>
                <i className="fas fa-star text-danger"></i>
              </span>{" "}
              4.47<span> (19)</span>
            </div>
            <div className="font-size-1">
              <span>Entire apartment</span> <span>·</span> <span>Lagos</span>{" "}
            </div>
            <div className="font-size-1">
              Chic Studio Apartment In the Best Part of Lekki!{" "}
            </div>
            <div className="font-size-1">
              <span className="bold">$50</span> / night
            </div>
          </div>

          <div className="col pb-5">
            <div className="pb-4 slider">
              <Slider />
            </div>

            <div>
              <span>
                <i className="fas fa-star text-danger"></i>
              </span>{" "}
              4.47<span> (19)</span>
            </div>
            <div className="font-size-1">
              <span>Entire apartment</span> <span>·</span> <span>Lagos</span>{" "}
            </div>
            <div className="font-size-1">
              Chic Studio Apartment In the Best Part of Lekki!{" "}
            </div>
            <div className="font-size-1">
              <span className="bold">$50</span> / night
            </div>
          </div>

          <div className="col pb-5">
            <div className="pb-4 slider">
              <Slider />
            </div>

            <div>
              <span>
                <i className="fas fa-star text-danger"></i>
              </span>{" "}
              4.47<span> (19)</span>
            </div>
            <div className="font-size-1">
              <span>Entire apartment</span> <span>·</span> <span>Lagos</span>{" "}
            </div>
            <div className="font-size-1">
              Chic Studio Apartment In the Best Part of Lekki!{" "}
            </div>
            <div className="font-size-1">
              <span className="bold">$50</span> / night
            </div>
          </div>
        </div>

        <div className="d-flex justify-content-between align-items-center pb-3">
          <div>
            <h3 className="bold" style={{ fontSize: "1.4rem" }}>
              Recently browsed
            </h3>
            <span className="font-size-1">
              Dates and prices have been updated to match your current search.
            </span>
          </div>
          <div>
            <span className="mr-3">1 / 3</span>
            <span className="rounded-circle  px-2 py-2 border border-1 border-muted mr-2">
              <i className="fas fa-less-than"></i>
            </span>
            <span className="rounded-circle  px-2 py-2 border border-1 border-muted">
              <i className="fas fa-greater-than"></i>
            </span>
          </div>
        </div>
        <div>
          <div className="row"></div>
        </div>
      </Container>
    );
  }
}

export default ListPlaces;
