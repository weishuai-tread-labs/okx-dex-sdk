
// scripts/get-supported-chains.ts
import { OKXDexClient } from '../../index';
import 'dotenv/config';

const client = new OKXDexClient({
    apiKey: process.env.OKX_API_KEY!,
    secretKey: process.env.OKX_SECRET_KEY!,
    apiPassphrase: process.env.OKX_API_PASSPHRASE!,
    projectId: process.env.OKX_PROJECT_ID!
});

async function main() {
    try {
        const chains = await client.dex.getChainData("195");
        console.log('Supported chains:', JSON.stringify(chains, null, 2));
    } catch (error) {
        console.error('Error:', error);
    }
}

main();