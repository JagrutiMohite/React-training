import React, { Component } from 'react'

export default class Projects extends Component {
    render() {
        return (
    
              <div class="card-body">
                <h4 class="small font-weight-bold">{this.props.Title} <span class="float-right">{this.props.Value}</span></h4>
                <div class="progress mb-4">
                  <div class={this.props.Classname} role="progressbar" style={this.props.style} aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
        )
    }
}
