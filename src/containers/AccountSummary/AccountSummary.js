import React, { Component } from 'react'

export default class AccountSummary extends Component {
    
    constructor(props) {
        super(props);
        this.state = {num: props.accnumber, changeParentState: props.change};
        alert('constructor');
        this.callParent = this.callParent.bind(this);
    }

    callParent(e) {
        this.props.change(55);
    }
    componentWillMount() {
        alert('componetwillmount called');
    }

    componentWillReceiveProps(props) {
        alert('component will receive props');
    }

    static getDerivedStateFromProps(a,b) {
        console.log(a);
        console.log(b);
        alert('getDerivedStateFromProps');
    }

    componentWillUpdate() {
        alert('componentWillUpdate');
    }

    componentDidMount() {
        alert('componentDidMount');
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        alert('componentDidUpdate');
    }

    componentWillUnmount() {
        alert('componentWillUnmount');
    }

    render() {
        alert('render');
        return (
            <div>
                Hekki
                {this.props.accnumber}
                <button onClick={this.callParent}>Just Change parent state through callback props</button>
            </div>
        )
    }
}
