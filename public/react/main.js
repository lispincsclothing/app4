var Main = React.createClass({
  getInitialState: function() {
    return { cards: [] };
  },
  updateCards: function(component) {
    var that = this;
    $.ajax("http://localhost:3000/users").then(function(response) {
      console.log(response);
      component.setState({cards: response});
      setTimeout(function() {
        that.updateCards(component);
      }, 3000);
    }, function(error) {
      console.log(erroir);
    });
  },
  componentDidMount: function() {
    this.updateCards(this);
  },
  render: function() {
    var cardsMarkup = this.state.cards.map(function(card) {
      return (
        <Card cardData={card} />
      )
    });
    return (
      <div className="main">
        {cardsMarkup}
      </div>
    );
  }
});

var Card = React.createClass({
  render: function() {
    var data = this.props.cardData;
    return (
      <div className="one-card col-sm-4">
        <div className="">
          <img src={data.avatar_url} height="120" alt="..." />
          <div className="caption">
            <h3>{data.first_name} {data.last_name}</h3>
          </div>
        </div>
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
