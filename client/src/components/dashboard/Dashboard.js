import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";

class Dashboard extends Component {
  onLogoutClick = (e) => {
    e.preventDefault();
    this.props.logoutUser();
  };

  render() {
    const { user } = this.props.auth;
    return (
      <div>
        <div>
          <h4>
            <b>Welcome,</b> {user.name.split(" ")[0]}
            <span style={{ fontFamily: "monospace" }}></span>
          </h4>
        </div>
        <button
          style={{
            width: "150px",
            borderRadius: "3px",
            letterSpacing: "1.5px",
            marginTop: "1rem",
          }}
          onClick={this.onLogoutClick}
          className="btn btn-large waves-effect waves-light hoverable blue accent-3"
        >
          Logout
        </button>
        <button
          style={{
            width: "150px",
            borderRadius: "3px",
            letterSpacing: "1.5px",
            marginTop: "1rem",
          }}
          className="btn btn-large waves-effect waves-light hoverable blue accent-3"
        >
          Sort
        </button>
        <button
          style={{
            width: "150px",
            borderRadius: "3px",
            letterSpacing: "1.5px",
            marginTop: "1rem",
          }}
          //onClick={./transfer}
          className="btn btn-large waves-effect waves-light hoverable blue accent-3"
        >
          Transfers
        </button>
        <br></br>
        <br></br>
        <hr></hr>
        <table>
          <thead>Transactions</thead>
          <th>Date</th>
          <th>Description</th>
          <th>Amount</th>
          <th>Balance</th>
          <tr>
            <td>11/20/2020</td>
            <td>Publix</td>
            <td>-50.25</td>
            <td>1039.75</td>
          </tr>
          <tr>
            <td>11/5/2020</td>
            <td>AMC theaters</td>
            <td>-25.00</td>
            <td>1090.00</td>
          </tr>
          <tr>
            <td>10/8/2020</td>
            <td>Popeye's Chicken</td>
            <td>-10.00</td>
            <td>1115.00</td>
          </tr>
          <tr>
            <td>9/27/2020</td>
            <td>Duke Energy</td>
            <td>-75.00</td>
            <td>1125.00</td>
          </tr>
          <tr>
            <td>7/20/2020</td>
            <td>ACH Deposit</td>
            <td>1200.00</td>
            <td>1200.00</td>
          </tr>
        </table>
      </div>
    );
  }
}

Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logoutUser })(Dashboard);
