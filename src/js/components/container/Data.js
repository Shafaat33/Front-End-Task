import React, { Component } from 'react'
import { connect } from 'react-redux'

class Data extends Component {
    render() {
        const { data } = this.props;
        console.log(data, "Showing");
        return (
            <div>
                {
                    data.length && data.map(function (item, i) {

                        return (

                            <table key={i} class="table table-striped" style={{marginTop:'20px'}}>
                                
                                <tbody> 
                                    <tr>
                                        <th scope="row"></th>
                                        <th>Data NO {i+1}</th>
                                           
                                    </tr> 
                                    <tr>
                                        <th scope="row">First Name</th>
                                        <td>{item.fName}</td>    
                                    </tr>
                                    <tr>
                                        <th scope="row">Last Name</th>
                                        <td>{item.lName}</td>    
                                    </tr>
                                    <tr>
                                        <th scope="row">Address</th>
                                        <td>{item.address}</td>    
                                    </tr>
                                    <tr>
                                        <th scope="row">Company</th>
                                        <td>{item.company}</td>    
                                    </tr>
                                    <tr>
                                        <th scope="row">Phone</th>
                                        <td>{item.phone}</td>    
                                    </tr>
                                    <tr>
                                        <th scope="row">Date</th>
                                        <td>{item.date}</td>    
                                    </tr>
                                    
                                </tbody>
                            </table>
                        )

                    })
                }
                <hr/>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        data: state,
    }
}


export default connect(mapStateToProps)(Data)
