import PropTypes from "prop-types";

function UserGreeting(props) {
  const welcomePage = <h2>Welcome {props.userName} </h2>;

  const signUp = <h2> Please Log in </h2>;

  return props.isLoggedIn ? welcomePage : signUp;

  //   return(
  //     props.isLoggedIn ?
  //     <h2>Welcome {props.userName}</h2> :
  //     <h2> Please Log In </h2>
  //   );
}

UserGreeting.proptypes = {
  isLoggedIn: PropTypes.bool,
  userName: PropTypes.string,
};

UserGreeting.defaultProps = {
  isLoggedIn: true,
  userName: "Guest",
};

export default UserGreeting;

//<UserGreeting isLoggedIn={true} userName ="MOMO"/>
