"use strict";

/*Объявите две переменные: admin и name.
Запишите строку "Джон" в переменную name.
Скопируйте значение из переменной name в admin.
Выведите на экран значение admin, используя функцию alert (должна показать «Джон»).*/



function firstFunction (arg, callback){
    
    setTimeout(function(){
        console.log(arg);
    }, 500);

    callback();
}

function secondFunction(){
    console.log(2);
}

firstFunction(1,secondFunction);



