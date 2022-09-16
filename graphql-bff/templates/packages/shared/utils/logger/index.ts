import pino from 'pino'

type LogLevels = 'fatal' | 'error' | 'warn' | 'info' | 'debug' | 'trace'

function defineLogLevel() {
  const { ENVIRONMENT } = process.env
  //sandbox and qa will have log level debug
  let logLevel = 'debug'

  //Local environment might be undefined
  //Local and development log level is error
  if (!ENVIRONMENT || ENVIRONMENT === 'dev') {
    logLevel = 'error'
  } else if (ENVIRONMENT === 'prod' || ENVIRONMENT === 'development') {
    logLevel = 'info'
  }

  return logLevel as LogLevels
}

const logger = pino({ level: defineLogLevel() })

export default logger
