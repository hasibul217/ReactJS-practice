// function Student({ name, fp, nm, age, doLove, loveLabel }) {
//     return (
//         <div className="student">
//             <p>Name: {name}</p>
//             <p>Favourite Position : {fp}</p>
//             <p>Nickname: {nm}</p>
//             <p>Age: {age}</p>
//             <p>{loveLabel}: {doLove ? "Yes" : "No"}</p>
//         </div>
//     );
// }

// export default Student;

import PropTypes from "prop-types";

function Student(props) {
  return (
    <div className="student">
      <p>Name : {props.name} </p>
      <p>Favourite : {props.fp} </p>
      <p>Nickname : {props.nm} </p>
      <p>Age : {props.age}</p>
      <p>
        {props.loveLabel || "Love her/him ?"} : {props.doLove ? "Yes" : "No"}
      </p>
    </div>
  );
}

Student.propTypes = {
  name: PropTypes.string,
  fp: PropTypes.string,
  nm: PropTypes.string,
  age: PropTypes.number,
  doLove: PropTypes.bool,
  loveLabel: PropTypes.string,
};

Student.defaultProps = {
  name: "Momo/Shanto",
  fp: "All",
  nm: "Chuppu",
  age: 25,
  doLove: true,
};

export default Student;

{
  /* <Student
        name="Momo"
        fp="CG/M/D"
        nm="Mitthabadi Rakhal"
        age={22.11}
        doLove={false}
        loveLabel="Does she love Shanto Nigga"
      />
      <Student
        name="Shanto"
        fp="Korte parlei hoilo"
        nm="Good Boy"
        age={24.11}
        doLove={true}
        loveLabel="Does Shanto love Momo"
      /> */
}
