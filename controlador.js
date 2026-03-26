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
}
