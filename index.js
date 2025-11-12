// Tenta carregar o arquivo compilado JavaScript.
// Se não for encontrado, tenta carregar o arquivo TypeScript diretamente para desenvolvimento.
try {
	// Preferencialmente carrega o arquivo compilado
	require('./dist/main');
} catch (err) {
	// Se falhar, tenta carregar o arquivo TypeScript
	try {
		require('ts-node/register');
		require('./src/main');
	} catch (e) {
		// Re-lança o erro original se ambos falharem
		console.error('Failed to load application entry. Tried ./dist/main and ./src/main (via ts-node).');
		throw e;
	}
}