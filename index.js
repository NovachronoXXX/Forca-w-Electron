// Try to load compiled JavaScript from `dist` (used for packaged app).
// If it doesn't exist (development), fall back to loading TypeScript via ts-node.
try {
	// Prefer compiled output
	require('./dist/main');
} catch (err) {
	// If compiled file not found, attempt to run TypeScript directly (dev)
	try {
		require('ts-node/register');
		require('./src/main');
	} catch (e) {
		// Re-throw with helpful message so packaging/runtime shows the cause
		console.error('Failed to load application entry. Tried ./dist/main and ./src/main (via ts-node).');
		throw e;
	}
}