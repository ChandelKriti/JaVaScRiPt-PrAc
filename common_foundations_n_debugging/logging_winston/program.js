'use strict'

const logger = require("./logger");

function even_odd(n) {
   if(n%2 === 0)
   {
    logger.log('info','It is even');
   }
    else{
        logger.log('info','It is odd');
    }
}

even_odd(12);