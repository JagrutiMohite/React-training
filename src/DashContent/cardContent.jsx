import React, { Component } from 'react'

export default class CardContent extends Component {
  
    render() {
        return (
            <div class="col-xl-3 col-md-6 mb-4">
              <div class={this.props.Border}>
                <div class="card-body">
                  <div class="row no-gutters align-items-center">
                    <div class="col mr-2">
                      <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">{this.props.Title}</div>
                      <div class="h5 mb-0 font-weight-bold text-gray-800">{this.props.Value}</div>
                    </div>
                    <div class="col-auto">
                      <i className={this.props.Classname}></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
        )
    }
}
