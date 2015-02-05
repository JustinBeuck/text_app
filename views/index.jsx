var React = require('react')
var HelloMessage = React.createClass({
    render: function() {
        return (
            <html>
                <body>
                    <div id="test">Hello {this.props.replace}</div>
                    <div>This will not be replaced: {this.props.keep}</div>
                </body>
                <script src="/public/js/main.js"></script>
            </html>
        )
              
    }

});

module.exports = HelloMessage
