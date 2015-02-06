var TextsUtil = require('./../../util/texts_util.js')
var TextForm = React.createClass({

    getInitialState: function () {
        return {
            message: "Default Message",
            number: 2022554618
        }
    },

    handleClick: function (e) {
        e.preventDefault();
        TextsUtil.send(this.state);
        this.setState({
            headerText: "Sent", 
            message: ""
        });
        console.log(this.state)
    },

    handleChange: function (e) {
        this.setState({message: e.target.value})
    },

    render: function() {
        return (
            <div className="text-form-div">

                <h4>Current Message: {this.state.message}</h4>

                <form className="form text-form">
                    <input type="text" onChange={this.handleChange} />
                    <input type="submit" onClick={this.handleClick} />
                </form>

            </div>
        );
    }
});

module.exports = TextForm;
