var React = require('react')
var HelloMessage = React.createClass({
    render: function() {
        return (
            <html>
            <head>
                <link rel="stylesheet" href="/public/css/styles.css" />  
            </head>
                <body>
                    <div id="newConversation"></div>
                </body>
                <script src="/public/js/main.js"></script>
            </html>
        )
              
    }

});

module.exports = HelloMessage
