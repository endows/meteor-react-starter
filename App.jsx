App = React.createClass({
  render() {
    return (
      <div>
        <h1>MeteorReact</h1>
        <button className="mdl-button mdl-js-button mdl-button--fab mdl-button--colored">
          <i className="material-icons">add</i>
        </button>
      </div>
    );
  }
});

if (Meteor.isClient) {
  Meteor.startup(function() {
    React.render(<App />, document.getElementById('app'));
  });
}
