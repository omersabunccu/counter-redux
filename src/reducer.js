// function reducer(state = 0, actions) {
//     console.log(actions);
//   if ((actions.type === "incr")) {
//     return state += 1;
//   }
//   else if (actions.type === "decr") {
//     return state -= 1;
//   }
//   else if (actions.type === "reset") {
//     return 0;
//   }
//   return state;
// }

function reducer(state = 0, actions) {
  switch (actions.type) {
    case "increment":
      return (state += 1);
    case "decr":
      return (state -= 1);
    case "reset":
      return 0;
    default:
      return state;
  }
}

export default reducer;

// [].reducer((i,j,k)=>) to return one single outcome
// how does redux work ?
// // purpose, goals, why do we need? single source of truth
// when ?
// benefits ?
// cons ?
// side effects ?
// use cases ?
