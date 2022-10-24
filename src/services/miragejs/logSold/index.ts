import { createServer } from "miragejs"
import log from './logSold.json'


export function logServer() {
  return createServer({
    seeds(server) {
      server.db.loadData({ log })
    },
    routes() {
      this.namespace = "/api"
      this.timing = 750;

      this.get("/log", (schema) => {
        return schema.db.log
      })
    },
  })
}