// client/app.jsx
var ThemeManager = new MUI.Styles.ThemeManager();
injectTapEventPlugin();

Object.keys(MUI).map((key)=>{
  window[key] = MUI[key]
})


var App = React.createClass({
    childContextTypes: {
        muiTheme: React.PropTypes.object
    },

    getChildContext: function() {
        return {
            muiTheme: ThemeManager.getCurrentTheme()
        };
    },

    render: function() {
      let icon_style = {color:'green'}
        return (
            <div>
              <AppBar
                title="修了証明書"
                 />

              <Card initiallyExpanded={true}>
                <CardText>
                  <h1><l>遠藤孝志 殿</l></h1>

                  Meteorにおいて、下記のレッスンを修了したことを証明します。
                </CardText>
                <CardHeader
                  title="Meteorアプリの作成"
                  subtitle="Subtitle"
                  avatar={<FontIcon style={icon_style} className="material-icons">check_circle</FontIcon>}
                  showExpandableButton={true}>
                </CardHeader>
                <CardHeader
                  title="Templateの利用"
                  subtitle="Subtitle"
                  avatar={<FontIcon style={icon_style} className="material-icons">check_circle</FontIcon>}
                  showExpandableButton={true}>
                </CardHeader>
                <CardHeader
                  title="collectionの挿入/削除"
                  subtitle="Subtitle"
                  avatar={<FontIcon style={icon_style} className="material-icons">check_circle</FontIcon>}
                  showExpandableButton={true}>
                </CardHeader>
              </Card>
            </div>
        );
    }
});

if (Meteor.isClient) {
    Meteor.startup(function () {
        $(document.body).html("<div id='container'></div>");
        React.render(<App />, document.getElementById("container"));
    });
}
