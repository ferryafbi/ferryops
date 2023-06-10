import { UAParser } from 'ua-parser-js'

const parser = new UAParser()

const parseUserAgent = (userAgent: string) => {
  parser.setUA(userAgent)
  return parser.getResult()
}

export default parseUserAgent
