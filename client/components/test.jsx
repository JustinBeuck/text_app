var Paragraph = require('./paragraph.jsx')

var Test = React.createClass({
    render: function() {
        return(
            <div>
                This is the Test Component
                <Paragraph pText="this is some text"/>
            </div>
        )
    }
});

module.exports = Test
