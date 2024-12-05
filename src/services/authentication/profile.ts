import { useMutation } from 'react-query';
import { API_BASE_URL } from '@/utils/env';
import { getAuthToken } from '@/utils/cookie';

export async function userProfile() {
  try {
    const token = getAuthToken();
    const response = await fetch(`${API_BASE_URL}/v1/auth/profile/`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        'Authorization': `Token ${token}`,
      },
    });

    const data = await response.json();
    console.log('daaaa', data);
    if (data.success) {
      return data?.results?.data;
    }
  } catch (error) {
    console.error("Error during login:", error);
    return error;
  }
}

export interface MutationParams {
  onMutate?: () => void;
  onSuccess?: (data: any) => void;
  onError?: (error: string) => void;
}

export function useProfileMutation({
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

  return useMutation(userProfile, {
    onError: onMutationError,
    onMutate: onMutationTriggered,
    onSuccess: onMutationSuccess,
  });
}
