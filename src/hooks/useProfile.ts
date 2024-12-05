import { useQuery } from 'react-query';
import { userProfile } from '@/services/authentication/profile';

export function useProfile() {
  return useQuery('userProfile', userProfile, {
    retry: false,  // Optional: Set retry to false if you don't want automatic retries on failure
    refetchOnWindowFocus: false, // Optional: Disable refetch on window focus
  });
}