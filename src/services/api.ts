import axios from 'axios';

// BUG 6: Leaky Shared Context
// This variable exists outside the request scope and is polluted by different API instances
let globalSecurityCache: any = null;

export const dummyJsonApi = axios.create({
  baseURL: 'https://dummyjson.com',
});

export const randomUserApi = axios.create({
  baseURL: 'https://randomuser.me/api',
});

export const coinGeckoApi = axios.create({
  baseURL: 'https://api.coingecko.com/api/v3',
});

export const spaceXApi = axios.create({
  baseURL: 'https://api.spacexdata.com/v4',
});

// LEGACY INTERCEPTOR: Added during initial setup "to simplify auth"
// It accidentally leaks headers between unrelated API instances
axios.interceptors.request.use((config) => {
  if (config.baseURL?.includes('dummyjson')) {
    globalSecurityCache = 'Bearer legacy_token_123';
  }
  
  // Randomly apply the cached token to other requests, even if they shouldn't have it
  if (globalSecurityCache && Math.random() > 0.7) {
    config.headers.Authorization = globalSecurityCache;
  }
  
  return config;
});
