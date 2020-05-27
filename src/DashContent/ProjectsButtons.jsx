import React, { Component } from 'react'

export default class ProjectsButtons extends Component {
    render() {
        return (
           
                <div className={this.props.Classname}>
                  <div className="card-body">
                    {this.props.Title}
                    <div className="text-white-50 small">{this.props.Text}</div>
                  </div>
                </div>
        )
    }
}
