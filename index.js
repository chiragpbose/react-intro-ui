function Header() {
	return (
		<header className="header">
			<h1>All Articles</h1>
			<h3>Collection of best articles on Startups</h3>
		</header>
	);
}
function CardContainer() {
	return (
		<div className="card-container">
			<div className="image-container">
				<img src="./shutterstock_765672517.jpg"></img>
				<div className="date">27 MAR</div>
				<div className="photos">PHOTOS</div>
			</div>
			<div class="article-container">
				<h2 className="article-heading">City Lights in New York</h2>
				<h3 className="article-subheading">The city that never sleeps</h3>
				<p className="article-text">
					New York, the largest city in the US, is an architectural marvel with
					plenty of historical monuments, magnificent buildings and countless
					dazzling skyscapers
				</p>

				<div className="tiny-footer">
					<div className="six-mins-ago">
						<li>6 mins ago</li>
					</div>
					<div className="comment">
						<img src="comment-symbol.png"></img>
						<div className="comment-text">comments</div>
					</div>
				</div>
			</div>
		</div>
	);
}

function MainContent() {
	return (
		<div className="main-content-container">
			<CardContainer />
			<CardContainer />
			<CardContainer />
		</div>
	);
}

// function Footer() {
// 	return (
// 		<footer>
// 			<small>© 2022 Bose development. All rights reserved.</small>
// 		</footer>
// 	);
// }
function Full() {
	return (
		<div className="page-container">
			<Header />
			<MainContent />
		</div>
	);
}
ReactDOM.render(<Full />, document.querySelector("#root"));
