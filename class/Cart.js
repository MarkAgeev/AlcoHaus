class Cart {
	constructor(
		items,
		cartClass = "cart", 
		plusClass = 'plus',
		minusClass = 'minus',
		deleteClass = 'delete',
		currency = '',
	) {
		this.items = items;
        this.plusClass = plusClass;
        this.minusClass = minusClass;
        this.deleteClass = deleteClass;
        this.cartClass = cartClass;
        this.currency = '$';
	}
	// button PLUS
	goodsPlus(art) {
		this.items[art]['count']++;
	}
	// button MINUS
	goodsMinus(art) {
		if(this.items[art].count - 1 == 0) {
			this.goodsDelete(art);
		}
		else {
			this.items[art]['count']--;
		}
	}
	// button DELETE
	goodsDelete(art) {
		delete this.items[art];
	}
	getTotal() {
		let total = 0;
		for(let key in this.items) {
			total += this.items[key]['count'] * this.items[key].price;
		}
		return total;
	}
	numMinus(n) {
		n--
		localStorage.setItem('num', JSON.stringify(n));	
	}
	render() {
		let table = document.createElement('table'); // create table
		table.classList.add(this.cartClass); // add class from constructor

		for (let key in this.items) {
			let goods = this.items[key]; 
			// делаем строку
            const tr = document.createElement('tr');
            // делаем картинку
            let td = document.createElement('td');
            let img = document.createElement('img');
            img.src = goods.image;
            td.append(img);
            tr.append(td);
            // // делаем название
            td = document.createElement('td');
            let title = document.createElement('h4');
            title.innerHTML = goods.name;
            td.append(title);
            tr.append(td);
            // делаем минус
            td = document.createElement('td');
            let btn = document.createElement('button');
            btn.classList.add(this.minusClass);
            btn.classList.add('button-primary');
            btn.innerHTML = '-';
            btn.setAttribute('data-articul', key);
            td.append(btn);
            tr.append(td);
            // делаем количество
            td = document.createElement('td');
            let span = document.createElement('span');
            span.innerHTML = goods.count;
            td.append(span);
            tr.append(td);
            // делаем плюс
            td = document.createElement('td');
            btn = document.createElement('button');
            btn.classList.add(this.plusClass);
            btn.classList.add('button-primary');
            btn.innerHTML = '+';
            btn.setAttribute('data-articul', key);
            td.append(btn);
            tr.append(td);
            // делаем total
            td = document.createElement('td');
            span = document.createElement('span');
            span.innerHTML = goods.count * goods.price + ' ' + this.currency
            td.append(span)
            tr.append(td);
            // делаем кнопку удалить
            td = document.createElement('td');
            btn = document.createElement('button');
            btn.classList.add(this.deleteClass);
            btn.classList.add('button-primary');
            btn.innerHTML = 'x';
            btn.setAttribute('data-articul', key);
            td.append(btn)
            tr.append(td)
            // add tr to table
            table.append(tr)
		}
		let tr = document.createElement('tr');
		let td = document.createElement('td');
		td.setAttribute('colspan', 7);
		td.style.textAlign = 'right';
		td.innerHTML = `<span class="total">Total: </span>` + this.getTotal() + ' ' + this.currency; 
		tr.append(td);
		table.append(tr);
		let a = document.createElement('a');
		a.setAttribute('href', 'index.html')
		a.style.fontSize = 25 + 'px'
		a.innerHTML = 'Return on site'
		table.append(a)
		return table
	}
}