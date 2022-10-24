import { createServer } from "miragejs"
import events from './events.json'


export function makeServer() {
  return createServer({
    seeds(server) {
      server.db.loadData({ events })
    },
    routes() {
      this.namespace = "/api"
      this.timing = 750;

      this.get("/events", (schema) => {
        return schema.db.events
      })

      this.post("/events", (schema, request) => {
        let attrs = JSON.parse(request.requestBody)

        return schema.db.events.insert(attrs)
      })
    },
  })
}