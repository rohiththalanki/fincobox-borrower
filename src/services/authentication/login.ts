import { useMutation } from 'react-query';
import { API_BASE_URL } from '@/utils/env';

export interface SigninParams {
  email: string;
  password: string;
}

/**
 *To sign in a user
  * @returns
  */

export async function signinUser({ email, password }: SigninParams) {
  try {
    const response = await fetch(`${API_BASE_URL}/v1/auth/login/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (data.success) {
      // Store token in cookies
      document.cookie = `authToken=${data.results.token}; path=/; max-age=604800;`; // Expires in 7 days

      return data?.results?.result;
    } else {
      alert("Login failed: " + data.message);
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

export function useSigninMutation({
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
    console.log('inside on mutation success');
    onSuccess && onSuccess(data);
    window.location.href = "/overview"; // Client-side redirect
  };

  return useMutation(signinUser, {
    onError: onMutationError,
    onMutate: onMutationTriggered,
    onSuccess: onMutationSuccess,
  });
}
