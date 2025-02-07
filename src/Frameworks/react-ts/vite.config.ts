import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig(({ mode }) => {
	const env = loadEnv(mode, process.cwd());

	return {
		plugins: [react()],
		publicDir: false,
		build: {
			emptyOutDir: false,
			outDir: "./public",
			assetsDir: env.VITE_BUILD_DIR,
			manifest: "manifest.json",
			sourcemap: env.CI_ENVIRONMENT !== 'production',
			rollupOptions: {
				input: `./${env.VITE_RESOURCES_DIR}/${env.VITE_ENTRY_FILE}`,
			},
		},
		server: {
			origin: env.VITE_ORIGIN,
			port: Number(env.VITE_PORT),
			strictPort: true,
			hmr: {
				protocol: 'ws',
				host: 'localhost',
				port: Number(env.VITE_PORT)
			},
		},
		resolve: {
			alias: {
				"@": path.resolve(__dirname, `./${env.VITE_RESOURCES_DIR}`),
			},
		},
	};
});