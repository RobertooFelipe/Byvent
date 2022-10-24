import { createServer } from "miragejs"
import log from './logSold.json'
import events from './events.json'


export function logServer() {
  return createServer({
    seeds(server) {
      server.db.loadData({ log,events })
    },
    routes() {
      this.namespace = "/api"
      this.timing = 750;

      this.get("/events", (schema) => {
        return schema.db.events
      })

      this.get("/log", (schema) => {
        return schema.db.log
      })
    },
  })
}