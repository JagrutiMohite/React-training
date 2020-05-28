import React, { Component } from 'react'

export default class CovidSummary extends Component {
  constructor(props){
    super(props);
  }

  componentWillReceiveProps()
  {
    console.log(this.props.CovidData); 
  }

    render() {
        return (
            <div className="col-xl-8">
              <div className="card shadow mb-4">

                <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                  <h6 className="m-0 font-weight-bold text-primary">Earnings Overview</h6>
                  <div className="dropdown no-arrow">
                    <a className="dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      <i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
                    </a>
                    <div className="dropdown-menu dropdown-menu-right shadow animated--fade-in" aria-labelledby="dropdownMenuLink">
                      <div className="dropdown-header">Dropdown Header:</div>
                      <a className="dropdown-item" href="#">Action</a>
                      <a className="dropdown-item" href="#">Another action</a>
                      <div className="dropdown-divider"></div>
                      <a className="dropdown-item" href="#">Something else here</a>
                    </div>
                  </div>
                </div>

                <div className="card-body">
                <div class="row">
                <div class="col-lg-6 mb-4">
                  <div class="card bg-primary text-white shadow">
                    <div class="card-body">
                    New Cases
                      <div class="text-white-80">{this.props.NewConfirmed}</div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-6 mb-4">
                  <div class="card bg-danger text-white shadow">
                    <div class="card-body">
                    Total Cases
                      <div class="text-white-80">{this.props.TotalConfirmed}</div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-6 mb-4">
                  <div class="card bg-info text-white shadow">
                    <div class="card-body">
                    New Deaths
                      <div class="text-white-80">{this.props.NewDeaths}</div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-6 mb-4">
                  <div class="card bg-warning text-white shadow">
                    <div class="card-body">
                    Total Deaths
                      <div class="text-white-80">{this.props.TotalDeaths}</div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-6 mb-4">
                  <div class="card bg-secondary text-white shadow">
                    <div class="card-body">
                    New Recovered
                      <div class="text-white-80">{this.props.NewRecovered}</div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-6 mb-4">
                  <div class="card bg-success text-white shadow">
                    <div class="card-body">
                    Total Recovered
                      <div class="text-white-80">{this.props.TotalRecovered}</div>
                    </div>
                  </div>
                </div>
              </div>

            </div>

                </div>
              </div>
        )
    }
}
