import { useMutation } from 'react-query';
import axios from "axios";
import { API_BASE_URL } from '@/utils/env';

export interface SignupParams {
  business_type: string;
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  phone_number: string;
  country_code: string;
}

/**
 *To sign in a user
  * @returns
  */

export async function signUpUser({ email, password, phone_number, business_type, first_name, last_name }: SignupParams) {
  console.log('sda', API_BASE_URL, process.env.NEXT_PUBLIC_API_BASE_URL);
  const res = await axios.post(`${API_BASE_URL}/v1/auth/signup/`, {
    business_type,
    email,
    first_name,
    last_name,
    phone_number,
    password
  });

  return res;
}

interface MutationParams {
  onMutate?: () => void;
  onSuccess?: (data: any) => void;
  onError?: (error: string) => void;
}

export function useSignupMutation({
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

  return useMutation(signUpUser, {
    onError: onMutationError,
    onMutate: onMutationTriggered,
    onSuccess: onMutationSuccess,
  });
}
