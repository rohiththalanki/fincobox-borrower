import { useMutation } from 'react-query';
import { API_BASE_URL } from '@/utils';
import { getAuthToken } from '@/utils/cookie';

export async function fetchUserProfile() {
  try {
    const token = getAuthToken();

    const response = await fetch(`${API_BASE_URL}/v1/auth/user`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        'Authorization': `Token ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch user profile');
    }

    const data = await response.json();


    return data
  } catch (error) {
    console.error("Error during login:", error);
    alert("An error occurred. Please try again.");
  }
}

export interface MutationParams {
  onMutate?: () => void;
  onSuccess?: (data: any) => void;
  onError?: (error: string) => void;
}

export function useFetchProfileMutation({
  onMutate,
  onSuccess,
  onError,
}: MutationParams) {
  const onMutationTriggered = () => {
    onMutate && onMutate();
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onMutationError = (errorResponse: any) => {
    const errorText = errorResponse?.response?.data?.error?.message || 'Error occured';

    onError && onError(errorText);
  };

  const onMutationSuccess = (data: any) => {
    onSuccess && onSuccess(data);
  };

  return useMutation(fetchUserProfile, {
    onError: onMutationError,
    onMutate: onMutationTriggered,
    onSuccess: onMutationSuccess,
  });
}
