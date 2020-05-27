import React, { Component } from 'react';
import CardContent from '../DashContent/cardContent';
import EarnOverview from '../DashContent/EarnOverview';
import Revenue from '../DashContent/Revenue';
import Projects from '../DashContent/Projects';
import Illustrations from '../DashContent/Illustrations';
import Development from '../DashContent/Development';
import ProjectsButtons from '../DashContent/ProjectsButtons'

export default class Content extends Component {
    render() {
        return (
            <div className="container-fluid">
              <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
                <a href="#" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i className="fas fa-download fa-sm text-white-50"></i> Generate Report</a>
              </div>

              <div className="row">

              <CardContent 
                Border="card border-left-primary shadow h-100 py-2"
                Title="Earnings (Monthly)"
                Value="$40,000"
                Classname="fas fa-calendar fa-2x text-gray-300"
                Text="text-xs font-weight-bold text-primary text-uppercase mb-1"
              />
              <CardContent 
                Border="card border-left-success shadow h-100 py-2"
                Title="Earnings (Annual)"
                Value="$215,000"
                Classname="fas fa-dollar-sign fa-2x text-gray-300"
                Text="text-xs font-weight-bold text-success text-uppercase mb-1"
              />
              <CardContent 
                Border="card border-left-warning shadow h-100 py-2"
                Title="Pending Requests"
                Value="18"
                Classname="fas fa-comments fa-2x text-gray-300"
                Text="text-xs font-weight-bold text-warning text-uppercase mb-1"
              />
              <div className="col-xl-3 col-md-6 mb-4">
              <div className="card border-left-info shadow h-100 py-2">
                <div className="card-body">
                  <div className="row no-gutters align-items-center">
                    <div className="col mr-2">
                      <div className="text-xs font-weight-bold text-info text-uppercase mb-1">Tasks</div>
                      <div className="row no-gutters align-items-center">
                        <div className="col-auto">
                          <div className="h5 mb-0 mr-3 font-weight-bold text-gray-800">50%</div>
                        </div>
                        <div className="col">
                          <div className="progress progress-sm mr-2">
                            <div className="progress-bar bg-info" role="progressbar" style={{width: "50%"}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-auto">
                      <i className="fas fa-clipboard-list fa-2x text-gray-300"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
              </div>

              <div className="row">
                <EarnOverview/>
                <Revenue/>
              </div>

              <div className="row">
              <div className="col-lg-6 mb-4">
                <div className="card shadow mb-4">
                  <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">Projects</h6>
                  </div>
                    <Projects
                      Title= "Server Migration"
                      Value="20%"
                      Classname="progress-bar bg-danger"
                      style={{width: "20%"}}
                    />
                    <Projects
                      Title= "Sales Tracking"
                      Value="40%"
                      Classname="progress-bar bg-warning"
                      style={{width: "40%"}}
                    />
                    <Projects
                      Title= "Customer Database"
                      Value="60%"
                      Classname="progress-bar"
                      style={{width: "60%"}}
                    />
                    <Projects
                      Title= "Payout Details"
                      Value="80%"
                      Classname="progress-bar bg-info"
                      style={{width: "80%"}}
                    />
                    <Projects
                      Title= "Account Setup"
                      Value="Complete!"
                      Classname="progress-bar bg-success"
                      style={{width: "100%"}}
                    />
                  </div>
                    <div className="row">
                      <div className="col-lg-6 mb-4">
                        <ProjectsButtons
                          Classname="card bg-primary text-white shadow"
                          Title="Primary"
                          Text="#4e73df"
                        />
                        </div>
                        <div className="col-lg-6 mb-4">
                        <ProjectsButtons
                          Classname="card bg-success text-white shadow"
                          Title="Success"
                          Text="#1cc88a"
                        />
                        </div>
                        <div className="col-lg-6 mb-4">
                        <ProjectsButtons
                          Classname="card bg-info text-white shadow"
                          Title="Info"
                          Text="#36b9cc"
                        />
                        </div>
                        <div className="col-lg-6 mb-4">
                        <ProjectsButtons
                          Classname="card bg-warning text-white shadow"
                          Title="Warning"
                          Text="#f6c23e"
                        />
                        </div>
                        <div className="col-lg-6 mb-4">
                        <ProjectsButtons
                          Classname="card bg-danger text-white shadow"
                          Title="Danger"
                          Text="#e74a3b"
                        />
                        </div>
                        <div className="col-lg-6 mb-4">
                        <ProjectsButtons
                          Classname="card bg-secondary text-white shadow"
                          Title="Secondary"
                          Text="#858796"
                        />
                      </div>
                    </div>
                  </div>
                <div className="col-lg-6 mb-4">
                  <Illustrations
                    Title=""
                  />
                  <Development/>
                </div>
              </div>
            </div>
        )
    }
}
