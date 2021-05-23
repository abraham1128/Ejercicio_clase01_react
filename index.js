//Pruebas a JS Funcional

function pruebaFilterDocumento(){

    const documentoContable = [

        {nombre: 'FACTURA' , codigo : 3012},
        {nombre: 'HOJA DE RUTA' , codigo : 3013},
        {nombre: 'BOLETA' , codigo : 3014},
        {nombre: 'GUÍA DESPACHO' , codigo : 3015},
        {nombre: 'RESPALDO' , codigo : 3016},

    ];

    const documentoHabilitado = documentoContable.filter(id => id.codigo === 3012);
    
    //console.log(`pruebaFilterDocumento: ${documentoHabilitado}`);

    console.log('pruebaFilterDocumento: '+documentoContable);
    
}

function pruebaArrayMapAguisnaldo(){

    const sueldo = [150000,325000,500000,250000,100000];

    const aguisnaldos = sueldo.map(num =>  num * 0,05);
    
    console.log(`pruebaArrayMapAguisnaldo: ${aguisnaldos}`) ;
    
}


//Ejecución

pruebaFilterDocumento() ;
pruebaArrayMapAguisnaldo() ;
