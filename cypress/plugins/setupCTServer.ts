
import { startDevServer } from "@cypress/vite-dev-server"

export default function(on, config) {
	on("dev-server:start", async (options) =>
		startDevServer({
			options
		})
	);

	config.viewportHeight = 8000
}