'use server'

import { checkRateLimit } from "@/src/utils/rateLimit";
import { headers } from "next/headers";
import { fetchAllDeals } from "@/src/services/cheapsharkServices/getAllDeals";

interface Website {
    url: string;
    category: number;
}

interface Deal {
    steamAppID: string;
    salePrice: string;
}

export const fetchGameDetailsByIds = async (gameIds: number[]) => {

    // GET CLIENT IP
    const headersList = headers();
    const clientIp = headersList.get('x-forwarded-for') || 'unknown';

    if (typeof clientIp !== 'string') {
        throw new Error('Access temporarily blocked. Try again later.');
    }

    if (clientIp === 'unknown') {
        throw new Error('Access temporarily blocked. Try again later.');
    }

    if (!(await checkRateLimit(clientIp))) {
        throw new Error('Limit rate exceeded. Try again later.');
    }

    try {
        const IGDB_PROXY_URL = process.env.IGDB_PROXY_URL;
        const IGDB_API_URL = `${IGDB_PROXY_URL}v4/games`;
        const apiToken = process.env.IGDB_SECRET;

        const origin = process.env.NEXTAUTH_URL;

        if (!apiToken || !origin) {
            throw new Error('Token or Origin not defined');
        }

        const numberOfGames = gameIds.length;

        const response = await fetch(IGDB_API_URL, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'x-api-key': apiToken,
                'Origin': origin,
            },
            body: `
            fields 
                id,
                name, 
                cover.url,
                aggregated_rating,
                rating,
                total_rating, 
                websites.url,
                websites.category,
                slug;
            where id = (${gameIds.join(', ')});
            limit ${numberOfGames};
          `,
        });

        if (!response.ok) {
            throw new Error('Failed to fetch game details from IGDB');
        }

        const data: Game[] = await response.json();

        // EXTRACT STEAM APP IDS
        const steamIds = data.flatMap((game: Game) => {
            const steamSite = game.websites?.find((site: Website) => site.category === 13);
            if (steamSite) {
                console.log(steamSite.url);
                // MATCH THE STEAM APP ID FROM THE URL
                const match = steamSite.url.match(/\/(app|bundle)\/(\d+)/i);
                console.log(`Matched groups: ${match}`);
                console.log(match);

                // RETURN THE STEAM APP ID ONLY
                return match ? match[2].toLowerCase() : [];
            }
            return [];
        });

        let prices: Record<string, string> = {};
        if (steamIds.length > 0) {
            const allDeals = await fetchAllDeals(steamIds);
            prices = allDeals.reduce((acc: Record<string, string>, deal: Deal) => {
                const steamAppID = deal.steamAppID.toLowerCase();
                if (!acc[steamAppID] || parseFloat(deal.salePrice) < parseFloat(acc[steamAppID])) {
                    acc[steamAppID] = deal.salePrice;
                }
                return acc;
            }, {});
        }


        // ADD PRICES TO GAME DATA
        const enhancedData = data.map((game: Game) => {
            const steamSite = game.websites?.find((site: Website) => site.category === 13);
            if (steamSite) {
                const match = steamSite.url.match(/\/app\/(\d+)/i);
                if (match) {
                    const steamId = match[1].toLowerCase();
                    if (prices[steamId]) {
                        return { ...game, price: prices[steamId] };
                    }
                }
            }
            return game;
        });

        return enhancedData;

    } catch (error) {
        console.error(`Error fetching game details for game IDs ${gameIds.join(', ')} from IGDB:`, error);
        return [];
    }
}