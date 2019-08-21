import react, {Component} from 'react'


// addToList(itemToList, priceToList) {
// 	let existsRepeated = false;
// 	//Totamos items repetidos
// 	this.state.list.forEach(item => {
// 			if(itemToList === item.item) {
// 					existsRepeated = true;
// 			}
// 	});

// 	//Si no encuentra item repetido, se añade a la lista en una nueva línea
// 	if(!existsRepeated) {
// 			this.setState({

// 					list: this.state.list.concat([{

// 							id: this.state.itemId,

// 							item: itemToList,

// 							price: priceToList, 

// 							quantity: 1

// 					}]),

// 					total: this.state.total + priceToList

// 			})

// 	}

// 	//Si encuentra item repetido se actualiza el item anterior en la lista

// 	else {
// 			let price;
// 			let updatedList = this.state.list.map(item => {
// 					if(itemToList === item.item) {
// 							item.quantity++;
// 							price = item.price;
// 					}
// 					return item;
// 			});
// 			this.setState({
// 					list: updatedList,
// 					total: this.state.total + price
// 			})
// 	}
// 	this.state.itemId++;
// }
