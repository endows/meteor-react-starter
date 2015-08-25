App = React.createClass({
  render() {
    return (
      <div>
        <h1>MeteorReact</h1>
      </div>
    );
  }
});

if (Meteor.isClient) {
  Meteor.startup(function() {
    React.render(<App />, document.getElementById('app'));
  });
}
