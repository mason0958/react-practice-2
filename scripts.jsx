var author = [
	{
		avatarUrl: "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
		name: "Googlie Oooglie"
	}
]

var userBadge = [10,2,3,]

console.log(userBadge[1])

var date = new Date();
console.log(date);

function Comment(props) {

	function formatDate(properties) {
		var temp = properties
		var day = temp.getDate()
		var month = temp.getMonth()
		month++;
		var year = temp.getYear()

		var together = "Day: " + day + " Month: " + month + " year: " + year

		return together
	}
	
	return (
	    <div className="Comment">
	      <div className="UserInfo">
	        <img className="Avatar"
	          src={props.author.avatarUrl}
	          alt={props.author.name}
	        />
	        <div className="UserInfo-name">
	          {props.author.name}
	        </div>
	      </div>
	      <div className="Comment-body">
	        <h1>{props.commentHeading}</h1>
	        <div className="Comment-text">{props.text}</div>
	        <div className="Comment-date">
	        	{formatDate(props.date)}
	        </div>
	      </div>
	      <div className="UserBadges">
	        <div className="badge">{props.userBadge[0]}</div>
	        <div className="badge">{props.userBadge[1]}</div>
	        <div className="badge">{props.userBadge[2]}</div>
	      </div>
	    </div>
  	);
}






ReactDOM.render(<Comment userBadge={userBadge}  author={author} commentHeading="Comment Heading" text="textHere" date={date}/>,
	document.getElementById('container'));








