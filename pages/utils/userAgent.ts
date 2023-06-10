import { UAParser } from 'ua-parser-js'

const parser = new UAParser()

export default function parseUserAgent(userAgent: string) {
  parser.setUA(userAgent)
  return parser.getResult()
}
