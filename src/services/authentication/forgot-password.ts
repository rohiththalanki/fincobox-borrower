import axios from "axios";
import { useMutation } from 'react-query';
import { API_BASE_URL } from '@/utils/env';

export interface ForgotPasswordParams {
  email: string;
}

export async function forgotPassword({ email }: ForgotPasswordParams) {
  const res = await axios.post(`${API_BASE_URL}/v1/auth/reset-password/`, {
    email
  });

  return res;
}

export interface MutationParams {
  onMutate?: () => void;
  onSuccess?: (data: any) => void;
  onError?: (error: string) => void;
}

export function useForgotPasswordMutation({
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

  return useMutation(forgotPassword, {
    onError: onMutationError,
    onMutate: onMutationTriggered,
    onSuccess: onMutationSuccess,
  });
}
