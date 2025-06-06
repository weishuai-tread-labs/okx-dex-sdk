// example.ts or test.ts
import { OKXDexClient } from '../../index';
import { Connection } from '@solana/web3.js';
import { createWallet } from '../../core/wallet';
import 'dotenv/config';

const connection = new Connection(process.env.SOLANA_RPC_URL!);
const wallet = createWallet(process.env.SOLANA_PRIVATE_KEY!, connection);

const client = new OKXDexClient({
    apiKey: process.env.OKX_API_KEY!,
    secretKey: process.env.OKX_SECRET_KEY!,
    apiPassphrase: process.env.OKX_API_PASSPHRASE!,
    projectId: process.env.OKX_PROJECT_ID!,
    solana: {
        wallet: wallet
    }
});

async function main() {
    try {
        // Get tokens
        const tokens = await client.dex.getTokens("501");
        console.log('Supported tokens:', JSON.stringify(tokens, null, 2));
    } catch (error) {
        console.error('Error:', error);
    }
}

main();