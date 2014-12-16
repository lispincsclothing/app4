var Main = React.createClass({
  render: function() {
    return (
      <div className="main">
        GetHub App
        <Card first_name="" last_name="" avatar_url="" />
      </div>
    );
  }
});

var Card = React.createClass({
  render: function() {
    return (
      <div className="card">
        This is {this.props.name}
      </div>
    );
  }
});

$(function() {
  React.render(
    <Main />,
    document.getElementById('react')
  );
});
