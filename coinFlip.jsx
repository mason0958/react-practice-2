// Prop are immutable meaning they don't change
// State is a piece of data that does change

var teams = [
	{
		name: "Alabama",
		score: 0,
		mascot: "Crimson Tide",
	},
	{
		name: "Clemson",
		score: 0,
		mascot: "Tigers",
	},
]


function Header(props) {
	return (
		<div className="header">
				<h1>{props.title}</h1>
		</div>
	)
}

function Team(props) {

	return (
		<div className="team">
			<div className="team-name">{props.name}</div>
			<Counter score={props.score}/>
		</div>

	)
}

var Counter = React.createClass({

	getInitialState: function(){
		return{score: 0}
	},

	losePoint: function() {
		this.setState({
			score: (this.state.score - 1)
		})
	},

	addPoint: function() {
		this.setState({

			score: (this.state.score + 1)
		})

	},

	render: function() {
		return (
			<div className="counter">
				<button onClick={this.losePoint} className="counter-change minus" >-</button>
				<div className="team-score">{this.state.score}</div>
				<button onClick={this.addPoint} className="counter-change plus">+</button>
			</div>
		)
	}
});


function Application(props) {

	return (
		<div className="scoreboard">
			<Header title="National Championship Scoreboard"/>
			<div className="teams">				
					{props.teams.map((team) =>{
						return <Team key={team.name} name={team.name} score={team.score}/>
					})}

			</div>
		</div>
	)	
}

ReactDOM.render(<Application teams={teams} />,
	document.getElementById('container'));








