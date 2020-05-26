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
            <div class="container-fluid">
              <div class="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 class="h3 mb-0 text-gray-800">Dashboard</h1>
                <a href="#" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i class="fas fa-download fa-sm text-white-50"></i> Generate Report</a>
              </div>

              <div class="row">

              <CardContent 
                Border="card border-left-primary shadow h-100 py-2"
                Title="Earnings (Monthly)"
                Value="$40,000"
                Classname="fas fa-calendar fa-2x text-gray-300"
              />
              <CardContent 
                Border="card border-left-success shadow h-100 py-2"
                Title="Earnings (Annual)"
                Value="$215,000"
                Classname="fas fa-dollar-sign fa-2x text-gray-300"
              />
              <CardContent 
                Border="card border-left-warning shadow h-100 py-2"
                Title="Pending Requests"
                Value="18"
                Classname="fas fa-comments fa-2x text-gray-300"
              />
              <div class="col-xl-3 col-md-6 mb-4">
              <div class="card border-left-info shadow h-100 py-2">
                <div class="card-body">
                  <div class="row no-gutters align-items-center">
                    <div class="col mr-2">
                      <div class="text-xs font-weight-bold text-info text-uppercase mb-1">Tasks</div>
                      <div class="row no-gutters align-items-center">
                        <div class="col-auto">
                          <div class="h5 mb-0 mr-3 font-weight-bold text-gray-800">50%</div>
                        </div>
                        <div class="col">
                          <div class="progress progress-sm mr-2">
                            <div class="progress-bar bg-info" role="progressbar" style={{width: "50%"}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-auto">
                      <i class="fas fa-clipboard-list fa-2x text-gray-300"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
              </div>

              <div class="row">
                <EarnOverview/>
                <Revenue/>
              </div>

              <div class="row">
              <div class="col-lg-6 mb-4">
                <div class="card shadow mb-4">
                  <div class="card-header py-3">
                    <h6 class="m-0 font-weight-bold text-primary">Projects</h6>
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
                      Title= "Sales Tracking"
                      Value="80%"
                      Classname="progress-bar bg-info"
                      style={{width: "80%"}}
                    />
                    <Projects
                      Title= "Sales Tracking"
                      Value="100%"
                      Classname="progress-bar bg-success"
                      style={{width: "100%"}}
                    />
                  </div>
                    <div class="row">
                      <div class="col-lg-6 mb-4">
                        <ProjectsButtons
                          Classname="card bg-primary text-white shadow"
                          Title="Primary"
                          Text="#4e73df"
                        />
                        </div>
                        <div class="col-lg-6 mb-4">
                        <ProjectsButtons
                          Classname="card bg-success text-white shadow"
                          Title="Success"
                          Text="#1cc88a"
                        />
                        </div>
                        <div class="col-lg-6 mb-4">
                        <ProjectsButtons
                          Classname="card bg-info text-white shadow"
                          Title="Info"
                          Text="#36b9cc"
                        />
                        </div>
                        <div class="col-lg-6 mb-4">
                        <ProjectsButtons
                          Classname="card bg-warning text-white shadow"
                          Title="Warning"
                          Text="#f6c23e"
                        />
                        </div>
                        <div class="col-lg-6 mb-4">
                        <ProjectsButtons
                          Classname="card bg-danger text-white shadow"
                          Title="Danger"
                          Text="#e74a3b"
                        />
                        </div>
                        <div class="col-lg-6 mb-4">
                        <ProjectsButtons
                          Classname="card bg-secondary text-white shadow"
                          Title="Secondary"
                          Text="#858796"
                        />
                      </div>
                    </div>
                  </div>
                <div class="col-lg-6 mb-4">
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
