import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


ReactDOM.render(
	<App />, 
	document.getElementById('root')
	);

//import * as serviceWorker from './serviceWorker';
// function Hello({library, message, number}){
// //console.log(props);
// 	return (
// 	<div> 
// 		<h1> hello from {library} ??!!?? {message} {number}</h1>
// 		<p> opa opa, parvi stapki </p></div>
// 	);
// };



// let lakeList = ["Bezbog", "Rila lakes", "Elenino"];

// let lakeListObjects = [
// { id: "1", name: "lake 1", trailhead : "tra1"},
// { id: "2", name: "lake 2", trailhead : "tra2"},
// { id: "3", name: "lake 3", trailhead : "tra3"}
// ];

// let numbersList = [1, 2, 3, 4];


// function Checkbox(){
// 	const [checked, setChecked] = useState(false);
// 	useEffect( ()=> {
// 		return  alert( `checked: ${checked.toString()}`);
// 	});
	
// 	return (
// 		<>
// 			<input type="checkbox" value = {checked} onChange={ () => setChecked(checked => !checked)}/>
// 			{checked ? "checked" : "not checked"}
// 		</>
// 	)
// }


// function App(){

// 	return (
// 		<Checkbox />
// 	)
// }

// ReactDOM.render(<Checkbox />, document.getElementById("root"));

// function AppStatus(){
// 	const [status, setStatus] = useState("Initial state");
// 	const [manager, setManager] = useState("Alex");
// 	const [year, setYear] = useState(2020);
// 	return (
// 	<>
// 		<div> <h1>Status:  {status} </h1>
// 			<button onClick={() => setStatus("Open")}>Open</button>
// 			<button onClick={() => setStatus("Closed")}>Close </button>	
// 		</div>
// 		<div>
// 		<h1> Manager: {manager}</h1>
// 			<button onClick={() => setManager("Diana")}> Change manager</button>
// 		</div>
// 		<div>
// 			<h1> Year: {year} </h1>
// 			<button onClick={() => setYear(year+1)}> Change year </button>
// 		</div>
// 	</>
// 	);
// }





// function Lake({name}){
// 	return (
// 		<div>Swim in lake {name}</div>
// 	);
// }

// function MountainSkiResort({name}){
// 	return (
// 		<div> Go skiing in {name} </div>
// 	);
// }


// /*/**/

// /*
// function FragmentOne(){
// 	return (<h2>fragment one</h2>);
// };

// function FragmentTwo(){
// 	return (<h2> fragment two</h2>);
// };

// function App(){
// 	return (
// 		<>
// 		<FragmentOne />
// 		<FragmentTwo />
// 	</>);
// };*/



// function App_old2(props){
// 	return (
// 	<div> 
// 	{ props.season === "summer" ? ( 
// 		<Lake name="Lowis" /> 
// 		): 	props.season === "winter" ? (
// 		<MountainSkiResort name = "ski resort" /> 
// 		) : (
// 			<h2> 
// 				come back
// 			</h2> 
// 		)}	
// 		</div>
// 	)
// 	//if(props.season === "summer")
// 	//	return <Lake name="Lowis" />;
// 	//else if(props.season ==="winter")
// 	//	return <MountainSkiResort name = "ski resort" />;

// }






// function Appss(props) {
//   return (
//     <div>
//       {props.season === "summer" ? (
//         <Lake name="Jenny Lake" />
//       ) : props.season === "winter" ? (
//         <MountainSkiResort name="JHMR" />
//       ) : (
//         <h1>
//           Come back in the winter or summer!
//         </h1>
//       )}
//     </div>
//   );
// }

// function App_old1({lakes}){
// 	return (
// 	<div>
// 	{
// 		lakes.map(lake =>(
// 			<div key={lake.id}>
// 				<h2>Lake: {lake.name}</h2>
// 				<p> Accessed by: {lake.trailhead} </p>
// 			</div>
// 		))
// 	}
// 	</div>);
// };

// function App_old({lakes}) {
// 	return (
// 		<ul>
// 			{lakes.map(lake => <li>{lake}</li>)}
// 		</ul>
// 	);
// };

















// ReactDOM.render(
//   React.createElement(
//   	"div", {style: {color: "blue"}}, 
//   		React.createElement("h1", 
//   			null, React.createElement("h2", null, "halo"))
//   	), 
//   document.getElementById('root2')
// );

// ReactDOM.render(
// 	<ul>
// 		<li>pizza</li>
// 		<li>orange</li>
// 	</ul> ,
// 	document.getElementById("root3")
// 	);


// //let city = "Madrid";

// let country = {
// 	name: "Spain",
// 	capital: "Madrid"
// };
// ReactDOM.render(

// 	<h1 className="cool-text"> hello from {country.capital}, the capital of {country.name} </h1>,  
// 	document.getElementById("root4")
// );
// ReactDOM.render(
// 	<Hello library="react" message="have fun" number={3} />, 
// 	document.getElementById('root5')
// 	);

