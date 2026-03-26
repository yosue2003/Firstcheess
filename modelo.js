const modelo = {
    filas: 10,
    columnas: 10,
    matriz: [],

    crearMatriz: function(){
        this.matriz = [];
        for(let i=0;i<this.filas;i++){
            this.matriz[i] = [];
            for(let j=0;j<this.columnas;j++){
                this.matriz[i][j] = 0;
            }
        }
    },

    esValido: function(x,y){
        return x>=0 && y>=0 && x<this.filas && y<this.columnas && this.matriz[x][y]==0;
    },

    pintar: function(x,y){
        this.matriz[x][y] = 1;
    }
}
