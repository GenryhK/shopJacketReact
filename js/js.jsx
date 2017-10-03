

let a =0;

let Text= React.createClass({
	render(){return(<div id="text"><span>Our clothing , your comfort</span></div>)}
});
let Text2 = React.createClass({
	render(){return(<div id="text2"><span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
		Nam vestibulum lobortis nunc, eget lacinia est congue ornare. Integer at eros id ipsum accumsan pharetra. 
		Proin nec dictum velit. Praesent varius neque arcu, ut luctus justo feugiat ut. In hac habitasse platea dictumst. 
		Suspendisse lorem ex, aliquet vel faucibus eget, efficitur at arcu. Nam ultricies ultrices quam ut auctor.
		 Suspendisse euismod ut urna et aliquet. Mauris venenatis neque tempor augue cursus, suscipit elementum turpis mollis. 
		 \Maecenas sit amet massa at nisi pulvinar cursus in in nisi. Praesent semper dapibus enim, ut dictum dolor sagittis eu.
		  Nunc neque tortor, tempor in tristique sit amet, eleifend vel magna. Aliquam in est ornare, porttitor enim sit amet, 
		  scelerisque ipsum. Fusce ac aliquam neque. Praesent vestibulum tristique porta. Aenean sollicitudin felis dolor,
		   vitae cursus tortor tristique et.</span></div>)}
});
let UpMenu = React.createClass({
	home(){document.location.href = "index.html"},
	products(){document.location.href = "products.html"},
	render(){return(<div id="upPanel"><div className="textUpPanel" onClick={this.home}>Home</div><div className="textUpPanel" onClick={this.products}>Products</div>
		</div>)}
});


let FirstBack = React.createClass({

render(){return(<div id="background"><img src="Livello 1.jpg" /><UpMenu/><Text/><Text2/></div>)}
});











ReactDOM.render(<FirstBack/>,document.querySelector(`#root`))