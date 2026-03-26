const controlador = {
    tableroHTML: [],

    iniciar: function(){
        modelo.crearMatriz();
        this.crearVista();
    },

    crearVista: function(){
        let div = document.getElementById("tablero");
        div.innerHTML = "";
        this.tableroHTML = [];

        for(let i=0;i<modelo.filas;i++){
            this.tableroHTML[i] = [];
            for(let j=0;j<modelo.columnas;j++){
                let celda = document.createElement("div");
                celda.className = "celda blanco";
                div.appendChild(celda);
                this.tableroHTML[i][j] = celda;
            }
        }
    },


    // mover: function(x,y){
    //     if(!modelo.esValido(x,y)) return;

    //     modelo.pintar(x,y);
    //     this.tableroHTML[x][y].classList.remove("blanco");
    //     this.tableroHTML[x][y].classList.add("negro");

    //     let vecinos = [
    //         [x-1,y],
    //         [x+1,y],
    //         [x,y-1],
    //         [x,y+1],
    //         [x-1,y+1],
    //         [x+1,y-1]
    //     ];

    //     for(let v of vecinos){
    //         let nx = v[0];
    //         let ny = v[1];

    //         if(modelo.esValido(nx,ny)){
    //             modelo.pintar(nx,ny);
    //             this.tableroHTML[nx][ny].classList.remove("blanco");
    //             this.tableroHTML[nx][ny].classList.add("negro");
    //         }
    //     }
    // },

    // siguienteMovimiefnto: function(){
    //     for(let i=0;i<modelo.filas;i++){
    //         for(let j=0;j<modelo.columnas;j++){
    //             if(modelo.matriz[i][j]==0){
    //                 this.mover(i,j);
    //                 return;
    //             }
    //         }
    //     }
    //     alert("No hay más movimientos");
    // }
}
