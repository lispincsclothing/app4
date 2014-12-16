var cards = [
  {
  id: 2,
  email: null,
  authentication_token: null,
  twitter: null,
  github: "liquidtrends",
  screen_name: null,
  created_at: "2014-12-15T22:59:36.298Z",
  updated_at: "2014-12-15T22:59:36.308Z",
  first_name: "Ryan",
  last_name: "Janvier",
  total_points: 3,
  facebook: null,
  premium_entries: 0,
  auth_uid: "3944162",
  role: null,
  avatar_url: null,
  company: null,
  blog: null,
  location: null,
  hireable: null,
  public_repos: null,
  public_gists: null,
  followers: null,
  following: null
},
{
  id: 1,
  email: null,
  authentication_token: null,
  twitter: null,
  github: "RichardCzechowski",
  screen_name: null,
  created_at: "2014-12-15T22:59:23.025Z",
  updated_at: "2014-12-15T23:32:16.796Z",
  first_name: "Richard",
  last_name: "Czechowski",
  total_points: 3,
  facebook: null,
  premium_entries: 0,
  auth_uid: "6431282",
  role: null,
  avatar_url: "https://avatars.githubusercontent.com/u/6431282?v=3",
  company: null,
  blog: "",
  location: "United States",
  hireable: true,
  public_repos: 21,
  public_gists: 0,
  followers: 6,
  following: 11
},
{
  id: 4,
  email: "sandeep.srivastava13@gmail.com",
  authentication_token: null,
  twitter: null,
  github: "sansrivas",
  screen_name: null,
  created_at: "2014-12-15T22:59:44.512Z",
  updated_at: "2014-12-15T23:32:18.086Z",
  first_name: "Sandeep",
  last_name: "Srivastava",
  total_points: 3,
  facebook: null,
  premium_entries: 0,
  auth_uid: "7695961",
  role: null,
  avatar_url: "https://avatars.githubusercontent.com/u/7695961?v=3",
  company: null,
  blog: "",
  location: "United States",
  hireable: true,
  public_repos: 6,
  public_gists: 0,
  followers: 2,
  following: 0
},
{
  id: 3,
  email: null,
  authentication_token: null,
  twitter: null,
  github: "bobbywhang",
  screen_name: null,
  created_at: "2014-12-15T22:59:37.708Z",
  updated_at: "2014-12-15T23:32:19.326Z",
  first_name: "",
  last_name: "",
  total_points: 3,
  facebook: null,
  premium_entries: 0,
  auth_uid: "3587253",
  role: null,
  avatar_url: "https://avatars.githubusercontent.com/u/3587253?v=3",
  company: null,
  blog: "",
  location: "SF Bay Area",
  hireable: true,
  public_repos: 16,
  public_gists: 0,
  followers: 6,
  following: 4
},
{
  id: 5,
  email: "bootsie8917@gmail.com",
  authentication_token: null,
  twitter: null,
  github: "phillipwright2",
  screen_name: null,
  created_at: "2014-12-15T23:00:01.916Z",
  updated_at: "2014-12-15T23:00:01.925Z",
  first_name: "Phillip",
  last_name: "wright",
  total_points: 3,
  facebook: null,
  premium_entries: 0,
  auth_uid: "8462021",
  role: null,
  avatar_url: null,
  company: null,
  blog: null,
  location: null,
  hireable: null,
  public_repos: null,
  public_gists: null,
  followers: null,
  following: null
},
{
  id: 7,
  email: "info@codinghouse.co",
  authentication_token: null,
  twitter: null,
  github: "Coding-House",
  screen_name: null,
  created_at: "2014-12-15T23:00:27.474Z",
  updated_at: "2014-12-15T23:26:04.639Z",
  first_name: "Coding",
  last_name: "House",
  total_points: 3,
  facebook: null,
  premium_entries: 0,
  auth_uid: "8595094",
  role: null,
  avatar_url: "https://avatars.githubusercontent.com/u/8595094?v=3",
  company: null,
  blog: "http://codinghouse.co",
  location: "Fremont, CA",
  hireable: false,
  public_repos: 8,
  public_gists: 0,
  followers: 5,
  following: 0
},
{
  id: 6,
  email: "toddkronenberg@gmail.com",
  authentication_token: null,
  twitter: null,
  github: "theCodeBear",
  screen_name: null,
  created_at: "2014-12-15T23:00:09.827Z",
  updated_at: "2014-12-15T23:30:09.772Z",
  first_name: "Todd",
  last_name: "Kronenberg",
  total_points: 3,
  facebook: null,
  premium_entries: 0,
  auth_uid: "7008257",
  role: null,
  avatar_url: "https://avatars.githubusercontent.com/u/7008257?v=3",
  company: null,
  blog: "http://www.toddkronenberg.com",
  location: "San Francisco Bay Area",
  hireable: true,
  public_repos: 20,
  public_gists: 0,
  followers: 6,
  following: 4
}
];



var Main = React.createClass({
  render: function() {
    var cardsMarkup = cards.map(function(card) {
      return (
        <Card cardData={card} />
      )
    });
    return (
      <div className="main">
        GetHub App
        {cardsMarkup}
      </div>
    );
  }
});

var Card = React.createClass({
  render: function() {
    var data = this.props.cardData;
    return (
      <div className="">
        <img src={data.avatar_url} height="200" alt="..." />
        <div className="caption">
          <h3>{data.first_name} {data.last_name}</h3>
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
