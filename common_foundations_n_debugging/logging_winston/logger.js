var {createLogger, transports, format} = require('winston');

const logger = createLogger({
    transports:[
        new transports.File({
            filename: 'example.log',
            level: 'info',
            format: format.combine(format.timestamp(), format.json())
            //format: format.combine(format.timestamp(), format.simple())
        }),
        new transports.Console({
            level: 'info',
            format: format.combine(format.timestamp(), format.json())
        })
    ]
})
module.exports = logger;