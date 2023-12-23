const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', (request, response) => {
    let countsInCookies = [];
    if ('counts' in request.cookies) {
        countsInCookies = request.cookies['counts'];        
    }
    response.render('index', { 
        title: 'Home', 
        counts: countsInCookies, 
    });
});

app.post('/calc', (request, response) => {
    const { number1, number2, operation } = request.body;

    
    function calc(num1, num2, op) {
        /**
         * Cria uma função calc que recebe 3 parâmetros (num1, num2, op)
         * Cria uma constante operation que recebe um objeto com as operações matemáticas
         * Cria um if que verifica se a operação existe no objeto operation
         * Se existir, retorna a operação com os 2 números
         * 
        */
       const operation = {
           '+': (num1, num2) => num1 + num2,
           '-': (num1, num2) => num1 - num2,
           '*': (num1, num2) => num1 * num2,
           '/': (num1, num2) => num1 / num2,
        }
        
        if (operation[op]) {
            return operation[op](Number(num1), Number(num2));
        }
    }
    
    let result = 0;
    switch(operation) {
        case "sum":
            result = calc(number1, number2, '+');
            break; 
        case "sub":
            result = calc(number1, number2, '-');
            break; 
        case "mult":
            result = calc(number1, number2, '*');
            break; 
        case "div":
            result = calc(number1, number2, '/');
            break; 
    }

    let countsResult = [];
    if ('counts' in request.cookies) {
        countsResult = request.cookies['counts'];
    }
    countsResult.push({
        number1,
        number2,
        operation,
        result,
    });

    response.cookie('counts', countsResult, { maxAge: 86400 });
    response.redirect('/');
});

const port = process.env.PORT || 3032;

app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`);
})
