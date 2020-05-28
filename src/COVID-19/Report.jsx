import React, { Component } from 'react'
let urlSummary = "https://api.covid19api.com/summary";

export default class Report extends Component {
  constructor(props){
    super(props);
    this.state={
      Countries:[]
    }
  }
  componentDidMount(){
    fetch(urlSummary)
    .then(res=>res.json())
    .then(data=>{
        this.setState({
          Countries:data.Countries
        })
        console.log(this.state.Countries);
    })
}
    render() {
      const {Countries} = this.state;
        return (
            <div className="container-fluid">

               <h1 className="h3 mb-2 text-gray-800">COVID - 19</h1>
          <p className="mb-4">DataTables gives the information about COVID-19 data.</p>


          <div className="card shadow mb-4">
            <div className="card-header py-3">
              <h6 className="m-0 font-weight-bold text-primary">DataTables</h6>
            </div>
            <div className="card-body">
              <div className="table-responsive">
                <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                  <thead>
                    <tr>
                    <th>Country</th>
                      <th>CountryCode</th>
                      <th>Slug</th>
                      <th>New Confirmed</th>
                      <th>Total Confirmed</th>
                      <th>New Deaths</th>
                      <th>Total Deaths</th>
                      <th>New Recovered</th>
                      <th>Total Recovered</th>
                      <th>Date</th>
                    </tr>
                  </thead>
                  <tfoot>
                    <tr>
                      <th>Country</th>
                      <th>CountryCode</th>
                      <th>Slug</th>
                      <th>New Confirmed</th>
                      <th>Total Confirmed</th>
                      <th>New Deaths</th>
                      <th>Total Deaths</th>
                      <th>New Recovered</th>
                      <th>Total Recovered</th>
                      <th>Date</th>
                    </tr>
                  </tfoot>
                  <tbody>
                  {Countries.map(data => {
                    return (
                      <tr key={data.objectID}>
                      <td>{data.Country}</td>
                      <td>{data.CountryCode}</td>
                      <td>{data.Slug}</td>
                      <td>{data.NewConfirmed}</td>
                      <td>{data.TotalConfirmed}</td>
                      <td>{data.NewDeaths}</td>
                      <td>{data.TotalDeaths}</td>
                      <td>{data.NewRecovered}</td>
                      <td>{data.TotalRecovered}</td>
                      <td>{data.Date}</td>
                    </tr>
                    )
                  })}
                  </tbody>
                </table>
              </div>
            </div>
          </div> 
            </div>
        )
    }
}
