import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-dates/initialize';
import { DateRangePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import { Modal, Button} from 'react-bootstrap';

export default class Search extends Component {
    constructor(props){
        super(props);
        this.state = {
            startDate: "",
            endDate: "",
            show: false
        }
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClose() {
		this.setState({ show: false });
	}

	handleShow() {
		this.setState({ show: true });
	}


    handleClick = () => {
        alert(this.state.startDate);
        alert(this.state.endDate);
    }


    render() {
        return (
            <div className="col-xl-8">
              <div className="card shadow mb-4">

                <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                  <h6 className="m-0 font-weight-bold text-info">Select Dates</h6>
                  </div>
                  <div className="card-body">
                <DateRangePicker
                    startDate={this.state.startDate} // momentPropTypes.momentObj or null,
                    startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
                    endDate={this.state.endDate} // momentPropTypes.momentObj or null,
                    endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
                    onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })} // PropTypes.func.isRequired,
                    focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                    onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
                 />
                 <br/>
                 <br/>
                 <Button variant="info" onClick={this.handleShow}>
					Select Date
                </Button>

				<Modal show={this.state.show} onHide={this.handleClose}>
					<Modal.Header closeButton>
						<Modal.Title>Selceted Dates are</Modal.Title>
					</Modal.Header>
					<Modal.Body onChange={this.handleClick}>
                        Start Date: {this.startDate}
                        <br/>
                        End Date: 
                    </Modal.Body>
					<Modal.Footer>
						<Button variant="info" onClick={this.handleClose}>
							Ok
                        </Button>
					</Modal.Footer>
				</Modal>
                 </div>
                 </div>
            </div>
        )
    }
}
