var TextForm = React.createClass({

    getInitialState: function () {
        return {
            messageText: "Default Message",
            headerText: "Message has not been Sent"
        }
    },

    handleClick: function (e) {
        e.preventDefault();
        this.setState({
            headerText: "Message was Sent", 
            messageText: "Default Message"
        });
        console.log(this.state)
    },

    handleChange: function (e) {
        this.setState({messageText: e.target.value})
    },

    render: function() {
        return (
            <div className="text-form-div">

                <h1>Status: {this.state.headerText}</h1>
                <h2>Message: {this.state.messageText}</h2>

                <form className="form text-form">
                    <input type="text" onChange={this.handleChange} />
                    <input type="submit" onClick={this.handleClick} />
                </form>

            </div>
        );
    }
});

module.exports = TextForm;
