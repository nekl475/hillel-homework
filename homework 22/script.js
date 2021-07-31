let Car = {
    getInfo(){
		let arr = [];
		for(let key in this){
			if(typeof this[key] !== 'function')
				arr.push(`<li>
					<b>${key.replaceAll('_', ' ')}</b>: ${Array.isArray(this[key]) ? this[key].join(', ') : this[key] }</li>`)
		}

		return`<ol type="i">${arr.join('')}</ol>`;
	}
};

let Mazda = Object.create(Car);
let Toyota = Object.create(Car);
let Porsche = Object.create(Car);
Mazda.Name = `2019 Mazda MX-5 Miata Club`;
Mazda.Vehicle_Type = [`front-engine`, `rear-wheel-drive`, `2-passenger`, `2-door convertible`];
Mazda.Price_As_Tested = `$34,980 (base price: $30,510)`;
Mazda.Engine_type = [`DOHC 16-valve inline-4`, `aluminum block and head`, `direct fuel injection`];


Toyota.Name = `2021 Toyota Supra 3.0`;
Toyota.Vehicle_Type = [`front-engine`, `rear-wheel-drive`, `2-passenger`, `2-door hatchback`];
Toyota.Price_As_Tested = `$52,440 (base price: $51,945)`;
Toyota.Engine_type = [`turbocharged and intercooled DOHC 24-valve inline-6`, `aluminum block and head`, `direct fuel injection`];



Porsche.Name = `2018 Porsche 718 Cayman GTS`;
Porsche.Vehicle_Type = [`mid-engine`, `rear-wheel-drive`, `2-passenger`, `2-door hatchback`];
Porsche.Price_As_Tested = `$85,170 (base price: $81,750)`;
Porsche.Engine_type = [` turbocharged and intercooled DOHC 16-valve flat-4`, `aluminum block and heads`, `direct fuel injection`];


document.write(`<ol type="a"><li><a href ="https://www.caranddriver.com/mazda/mx-5-miata">Mazda</a></li>${Mazda.getInfo()}
<li><a href ="https://www.caranddriver.com/toyota/supra">Toyota</a></li>${Toyota.getInfo()}
<li><a href ="https://www.caranddriver.com/porsche/718-cayman">Porsche</a></li>${Porsche.getInfo()}
</ol>`);
