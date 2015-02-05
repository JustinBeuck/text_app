var NewTextForm = require('./../texts/new_text_form.jsx')

var NewConversation = React.createClass({
    render: function() {
        return(
            <div>
                <NewTextForm/>
            </div>
        )
    }
});

module.exports = NewConversation;
