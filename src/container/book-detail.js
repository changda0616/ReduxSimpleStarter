import React from 'react'
import { Component } from "react"
import {connect} from 'react-redux'

class BookDetail extends Component {
    render(){
        
        if (!this.props.book) {
            return <div>
                Select a book to start
            </div>
        }
        return (
            <div>
                <h3>Book Detail:</h3>
                <div>
                    Title:{this.props.book.title}
                </div>
                <div>
                    Page: {this.props.book.pages}
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        book: state.activeBook
    }
}

export default connect(mapStateToProps)(BookDetail)