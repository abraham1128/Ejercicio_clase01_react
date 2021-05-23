//Pruebas a JS Funcional

function pruebaFilterDocumento(){

    const documentoContable = [

        {nombre: 'FACTURA' , codigo: 3012},
        {nombre: 'HOJA DE RUTA' , codigo: 3013},
        {nombre: 'BOLETA' , codigo: 3014},
        {nombre: 'GUÍA DESPACHO' , codigo: 3015},
        {nombre: 'RESPALDO' , codigo: 3016},

    ];

    const documentoHabilitado = documentoContable.filter(busqueda => busqueda.codigo == 3016);
    const resultadoJSON = JSON.stringify(documentoHabilitado);
    
    console.log(`pruebaFilterDocumento: ${resultadoJSON}`);    
}

function pruebaArrayMapAguisnaldo(){

    const sueldoExterno = [150000,325000,500000,250000,100000];
    const sueldoColaborador = [130000,220000,320000,260000,110000, ...sueldoExterno];

    const aguisnaldos = sueldoColaborador.map(num =>  num * 0.05);
    
    console.log(`pruebaArrayMapAguisnaldo: ${aguisnaldos}`) ;
    
}


function pruebaFindIndexDocumento(){

    const documentoContable = [

        {nombre: 'FACTURA' , codigo: 3012},
        {nombre: 'HOJA DE RUTA' , codigo: 3013},
        {nombre: 'BOLETA' , codigo: 3014},
        {nombre: 'GUÍA DESPACHO' , codigo: 3015},
        {nombre: 'RESPALDO' , codigo: 3016},

    ];

    const indiceDocumento = documentoContable.findIndex(indice => indice.codigo == 3016);
    
    console.log(`pruebaFindIndexDocumento: ${indiceDocumento}`);    
}

function pruebaSomeSueldo(){ 

    const sueldoExterno = [150000,325000,500000,250000,100000];
    const sueldoColaborador = [130000,220000,320000,260000,110000, ...sueldoExterno];

    const exiteSueldoEtico = sueldoColaborador.some(function(sueldo){ return sueldo > 350000}) ;

    console.log(`pruebaSomeSueldo: ${exiteSueldoEtico}`); 

}

function pruebaEverySueldo(){ 

    const sueldoExterno = [150000,325000,500000,250000,100000,0];
    const sueldoColaborador = [130000,220000,320000,260000,110000, ...sueldoExterno];

    function esSueldo(num){ return num > 0 ; }

    const exiteSueldoEtico = sueldoColaborador.every(esSueldo) ;

    console.log(`pruebaEverySueldo: ${exiteSueldoEtico}`); 

}


//Ejecución

pruebaFilterDocumento() ;
pruebaArrayMapAguisnaldo() ;
pruebaFindIndexDocumento() ;
pruebaSomeSueldo() ;
pruebaEverySueldo() ; 
