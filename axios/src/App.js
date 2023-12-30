// import axios from 'axios'
// import { useState } from 'react'


// function App() {
//   const [state,setState] =useState([])

//   return (
//     <div className="App">
//       <h1>hello world</h1>
//       <button onClick={()=>{
//         axios.get('https://jsonplaceholder.typicode.com/posts').then((response)=>{
//           console.log(response.data)
//           setState(response.data)
//         })
//       }}>click to load</button>
//       {state.map((obj,index)=>{
//         return(
//           <div>
//             <h1>{index+1}</h1>
//             <h2>{obj.title}</h2>
//             <h3>{obj.body}</h3>
//           </div>
//         )
//       })}
//     </div>
//   );
// }

// export default App;



// hide buttoon 


// import axios from 'axios';
// import { useState } from 'react';

// function App() {
//   const [state, setState] = useState(null);
//   const [isDataVisible, setIsDataVisible] = useState(true);

//   const toggleDataVisibility = () => {
//     if (state === null) {
//       axios.get('https://jsonplaceholder.typicode.com/posts').then((response) => {
//         console.log(response.data);
//         setState(response.data);
//         setIsDataVisible(true);
//       });
//     } else {
//       setState(null);
//       setIsDataVisible(false);
//     }
//   };

//   return (
//     <div className="App">
//       <h1>Hello World</h1>
//       <button onClick={toggleDataVisibility}>
//         {isDataVisible ? 'Hide the Data' : 'Click to Load'}
//       </button>
//       {isDataVisible && state !== null && (
//         <div>
//           {state.map((obj) => (
//             <div key={obj.id}>
//               <h1>{obj.id}</h1>
//               <h2>{obj.title}</h2>
//               <h3>{obj.body}</h3>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;
