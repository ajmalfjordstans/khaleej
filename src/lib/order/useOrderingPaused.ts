import { useQuery } from '@tanstack/react-query';
import { getStoreBySlugApi } from './api';
import { STORE_SLUG, ORDERING_PAUSED_OVERRIDE } from './config';

// True when online ordering is switched off — either the merchant's "Accept online orders" setting
// in Admin (store.onlineOrderingEnabled === false) or the site-level override in config.ts. Shares
// the ['order-store'] query with the rest of the ordering flow, so it costs no extra request.
export function useOrderingPaused(): boolean {
  const { data } = useQuery({
    queryKey: ['order-store'],
    queryFn: () => getStoreBySlugApi(STORE_SLUG),
    retry: false,
  });
  return ORDERING_PAUSED_OVERRIDE || data?.data?.onlineOrderingEnabled === false;
}
