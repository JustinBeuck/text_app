var React = require('react')
var HelloMessage = React.createClass({
    render: function() {
        return (
            <html>
                <body>
                    <div id="test">Hello {this.props.name}</div>
                </body>
                <script src="/public/js/main.js"></script>
            </html>
        )
              
    }

});

module.exports = HelloMessage
