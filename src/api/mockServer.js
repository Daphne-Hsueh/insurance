import { createServer, Response } from "miragejs";
import data from "./response.json";

export function makeServer({ environment = "development" } = {}) {
  let server = createServer({
    environment,

    routes() {
      this.namespace = "api";

      this.get("/policyholders", (schema, request) => {
        let code = request.queryParams.code;

        if (code) {
          return {
            code: data[code],
          };
        } else {
          return new Response(404, {}, { error: "Policyholder not found" });
        }
      });

      this.get("/policyholders/:code/top", (schema, request) => {
        let code = request.params.code;

        if (code) {
          const upperCodeNumber = Number(code) - 1;
          const upperCode = upperCodeNumber.toString().padStart(10, "0");
          return {
            code: data[upperCode],
          };
        } else {
          return new Response(404, {}, { error: "Policyholder not found" });
        }
      });
    },
  });

  return server;
}
