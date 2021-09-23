
import { startDevServer } from "@cypress/vite-dev-server"

export default function(on) {
	on("dev-server:start", async (options) =>
		startDevServer({
			options
		})
	);
}