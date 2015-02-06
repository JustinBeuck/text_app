var NewTextForm = require('./../texts/new_text_form.jsx')
var TextsUtil = require('./../../util/texts_util.js')

var ConversationBlock = React.createClass({
    getInitialState: function() {
        return {
            texts: []
        }

    },

    componentDidMount: function () {
        TextsUtil.init(this.updateTexts);
    },

    updateTexts: function (data) {
        this.setState({texts: data});
    },

    renderTexts: function () {
        var texts = this.state.texts;
        return _.map(texts, function (text) {
            return (
                <p> Message: {text.message} </p>
            )
        })
    },

    render: function() {
        return(
            <div>
                <h2>Texts: </h2>
                <div className="texts-block">
                    {this.renderTexts()}
                </div>
                <NewTextForm/>
            </div>
        )
    }
});

module.exports = ConversationBlock;
