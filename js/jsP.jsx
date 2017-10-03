
let arrbasket =[];
let arrProducts=[];
let pr=[];
let k=0; //общая цена в корзине





class ProductInSop{
	constructor(image,description,price){
		this.image=image
		this.description=description;
		this.price=price
	}
};
arrProducts.push(new ProductInSop(`pux.jpg`,`loremipsum Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
		Nam vestibulum lobortis nunc, eget lacinia est congue ornare. Integer at eros id ipsum accumsan pharetra. 
		Proin nec dictum velit `,`4000`));
arrProducts.push(new ProductInSop(`pux.jpg`,`loremipsum Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
		Nam vestibulum lobortis nunc, eget lacinia est congue ornare. Integer at eros id ipsum accumsan pharetra. 
		Proin nec dictum velit `,`4000`));
arrProducts.push(new ProductInSop(`pux.jpg`,`loremipsum Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
		Nam vestibulum lobortis nunc, eget lacinia est congue ornare. Integer at eros id ipsum accumsan pharetra. 
		Proin nec dictum velit `,`4000`));
arrProducts.push(new ProductInSop(`pux.jpg`,`loremipsum Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
		Nam vestibulum lobortis nunc, eget lacinia est congue ornare. Integer at eros id ipsum accumsan pharetra. 
		Proin nec dictum velit `,`4000`));
arrProducts.push(new ProductInSop(`pux.jpg`,`loremipsum Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
		Nam vestibulum lobortis nunc, eget lacinia est congue ornare. Integer at eros id ipsum accumsan pharetra. 
		Proin nec dictum velit `,`4000`));
arrProducts.push(new ProductInSop(`pux.jpg`,`loremipsum Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
		Nam vestibulum lobortis nunc, eget lacinia est congue ornare. Integer at eros id ipsum accumsan pharetra. 
		Proin nec dictum velit `,`4000`));
arrProducts.push(new ProductInSop(`pux.jpg`,`loremipsum Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
		Nam vestibulum lobortis nunc, eget lacinia est congue ornare. Integer at eros id ipsum accumsan pharetra. 
		Proin nec dictum velit `,`4000`));
arrProducts.push(new ProductInSop(`pux.jpg`,`loremipsum Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
		Nam vestibulum lobortis nunc, eget lacinia est congue ornare. Integer at eros id ipsum accumsan pharetra. 
		Proin nec dictum velit `,`4000`));






let UpMenu = React.createClass({
	home(){document.location.href = "index.html"},
	products(){document.location.href = "products.html"},







	openBasket(){arrProducts.splice(0,arrProducts.length);// basket
let Product = React.createClass ({
	delete(){k-= +arrbasket[this.props.number].price;
		arrbasket.splice(this.props.index,1);
		ReactDOM.render(<Colection />,document.querySelector(`#root2`));
		ReactDOM.render(<Allbuy/>,document.querySelector(`#root3`));

		ReactDOM.render(<div><UpMenu/></div>,document.querySelector(`#root`))},

render(){return(<div className="product">
		<div ><img src={this.props.image} /></div>
<div>{this.props.description}</div><p>price:{this.props.price}</p><button onClick={this.delete}>delete</button>


		</div>)}
});
let Colection = React.createClass({//заполняет страницу эелментами которые есть в корзине, обращается к массиву с продуктами магазина
	
	addFiles(item,i){






		return(
		<Product number={i}  index={i} image={item.image} description={item.description} price={item.price} deleteFiles={this.deleteFiles}/>
		)},

	render(){return(<div>
		<div>{arrbasket.map(this.addFiles)}</div></div>)}
})


let Allbuy = React.createClass({
buyALL(){let Card= React.createClass({
	on(){if(/\b\d{16}\b/.test(this.refs.cardNumber.value)&&/\b\d{2}\b/.test(this.refs.month.value)&&/\b\d{2}\b/.test(this.refs.year.value)&&/\b\d{3}\b/.test(this.refs.svv.value)){
		alert(`Congratulations!!!!! you made a purchase. Fruther you will be refirected to the main page`);document.location.href = "index.html"
		}//проверяет банковскую карту и в случае когда все правильно, отображает текст о завершенной покупке и переводит на главную страницу
else{alert(`Please check the correctness of the entered data`)}
	},//выводит сообщение если пользователь ошибся при введении данных в форму



	render(){return(<div id="card"><input id="month" ref="month" placeholder="M"></input><input id="year" placeholder="Y" ref="year"></input><input id="svv" placeholder="svv" ref="svv"></input><input id="cardNumber" ref="cardNumber" placeholder="card number"></input><img src="1.jpg" /><button onClick={this.on}>send</button></div>)}//рендерит банковскую карту и поля ввода на ней
}) ,// создание полей на банковской карте

	arrbasket =``;ReactDOM.render(<Card/>,document.querySelector(`#banc`));
						ReactDOM.render(<div></div>,document.querySelector(`#root2`));// дом основного меню

						ReactDOM.render(<div></div>,document.querySelector(`#root3`))},// точка входа для нижней опнели корзины

cleanBasket(){arrbasket =``;ReactDOM.render(<div></div>,document.querySelector(`#root2`));
	
						ReactDOM.render(<div></div>,document.querySelector(`#root3`));

	document.location.href = "products.html"},

	render(){return(<div><div className="divBasket">The final price:{k}</div><button className="buttonsBasket" onClick={this.buyALL}>buy all</button><button className="buttonsBasket" onClick={this.cleanBasket}>clean basket</button></div>)}
})


ReactDOM.render(<Allbuy/>,document.querySelector(`#root3`))//сумма товаров в корзине

	ReactDOM.render(<Colection />,document.querySelector(`#root2`))},// basket
	























	render(){return(<div id="upPanel"><div className="textUpPanel" onClick={this.home}>Home</div><div className="textUpPanel" onClick={this.products}>Products</div>
		<div id="basket" onClick={this.openBasket}><img src="shopping-cart_icon-icons.com_72552b.png" /> :</div><div className="textUpPanel">{arrbasket.length}</div></div>)}
});

ReactDOM.render(<div><UpMenu/></div>,document.querySelector(`#root`));


let Product = React.createClass({// продукты которые лежат на основной панеле магазина


save(){	let r = this.props.number;arrbasket.push(arrProducts[r]);console.log(r);
	
	k+= +arrProducts[r].price;console.log(k);
ReactDOM.render(<div><UpMenu/></div>,document.querySelector(`#root`));},//перемещает объекты в корзину
	render(){return    (<div className="product">
		<div ><img src={this.props.image} /></div>
<div>{this.props.description}</div><p>price:{this.props.price}</p><button onClick={this.save}>add to basket</button>


		</div>

		)      }
})





let Colection = React.createClass({//заполняет страницу эелментами которые есть в магазине, обращается к массиву с продуктами магазина
	deleteFiles(a){console.log(index)},
	addFiles(item,i){return(
		<Product number={i}  index={i} image={item.image} description={item.description} price={item.price} deleteFiles={this.deleteFiles}/>
		)},

	render(){return(<div>
		{arrProducts.map(this.addFiles)}</div>)}
})

ReactDOM.render(<Colection />,document.querySelector(`#root2`))

