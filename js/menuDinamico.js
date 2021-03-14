const appMenu ={
	data(){
		return{
			seccionA:["submenuA1", "submenuA2", "submenuA3"],
			seccionB:["submenuB1", "submenuB2", "submenuB3"],
			seccionC:["submenuC1", "submenuC2", "submenuC3"],
			selected:"",
			texto:"",
			seccion:"",
			arreglo:[]
			
		}
	},
	methods:{
		change(){
					
			switch(Number(this.selected)){
				case 1:
					this.arreglo = this.seccionA
					this.seccion="sección A"
					break;
				case 2:
					this.arreglo = this.seccionB
					this.seccion="sección B"
					break;
				case 3:
					this.arreglo = this.seccionC
					this.seccion="sección C"
					break;
			}
		},

		click(){
					
			if ((this.texto!="") && (this.selected!="")){
				let r = confirm("Añadir el submenú '" + this.texto.toLowerCase(this.texto) + "' a la " + this.seccion + "?");
				if (r == true) {
					this.arreglo.push(this.texto);
					console.log(this.arreglo);
					txt = "El submenú " + this.texto.toLowerCase(this.texto) + " se agregó correctamente." ;
					this.selected="";
					this.texto="";
					alert("El submenú se agregó correctamente a la " + this.seccion);
				}
			}else if(this.selected==""){
				alert("Debe seleccionar la sección.")
			}else if(this.texto==""){
				alert("Debe ingresar el submenú.")
			}else{
				pass
			}
			
		},
			
		limpiar(){
			this.selected="";
			this.texto=""
		}
	}
}








