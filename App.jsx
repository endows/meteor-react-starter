ThemeManager = new MUI.Styles.ThemeManager();
injectTapEventPlugin();

var { DatePicker, TextField } = MUI;

App = React.createClass({
  childContextTypes: {
      muiTheme: React.PropTypes.object
  },

  getChildContext: function() {
      return {
          muiTheme: ThemeManager.getCurrentTheme()
      };
  },
  render() {
    return (
      <div>
        <p>Meteor React with MaterialUI</p>
        <DatePicker hintText="Landscape Dialog" mode="landscape"/>
        <TextField hintText="Hint Text" />
      </div>
    );
  }
});

if (Meteor.isClient) {
  Meteor.startup(function() {
    React.render(<App />, document.getElementById('app'));
  });
}
