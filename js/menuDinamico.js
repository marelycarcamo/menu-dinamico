const appMenu ={
	data(){
		
		return{
			seccionA:["submenuA1", "submenuA2", "submenuA3"],
			seccionB:["submenuB1", "submenuB2", "submenuB3"],
			seccionC:["submenuC1", "submenuC2", "submenuC3"],
			selected:"",
			texto:"",
			arreglo:[]
			
		}
	},
	methods:{
		change(){
					
			switch(Number(this.selected)){

				case 1:
					this.arreglo = this.seccionA
					break;
				case 2:
					this.arreglo = this.seccionB
					break;
				case 3:
					this.arreglo = this.seccionC
					break;
			
			}
		},

		click(){
		
		this.arreglo.push(this.texto);
		console.log(this.arreglo);

		}
		

	}
}








