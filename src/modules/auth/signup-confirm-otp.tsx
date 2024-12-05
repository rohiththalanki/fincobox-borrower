import React from 'react';
import { useForm } from "react-hook-form";
import { AuthLayout } from '@/common/layouts/auth-layout';
import {
  Form,
  FormControl,
  FormField,
  FormLabel,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

import { Card, Text, Flex } from '@radix-ui/themes';
import Link from 'next/link';
import { SignupParams, useSignupMutation } from '@/services/authentication';
import { useToast } from '@/components/ui/use-toast';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { OTP_REGEX } from '@/utils/regex';

export const SignupSchema = z.object({
  otp: z.string().length(4).regex(OTP_REGEX, 'OTP must be exactly 4 digits')
});


export default function SignupConfirmOtp({ phone_number }: { phone_number: string }) {
  const { mutate: signUpuser, isLoading, isError } = useSignupMutation({});
  const { toast } = useToast();

  const form = useForm({
    resolver: zodResolver(SignupSchema),
    defaultValues: {
      otp: undefined,
    },
  });

  const onSubmit = async ({ otp }: { otp: string }) => {
    // signUpuser({
    //   otp
    // },
    //   {
    //     onSuccess: (response) => {
    //       console.log('successsss');
    //     },
    //     onError: (error: string) => {
    //       toast({
    //         title: 'Signup Error',
    //         description: <div className="flex flex-col gap-1">{error}</div>,
    //       });
    //     }
    //   }
    // );

  };


  return (
    <Card className='bg-white rounded-xl'>
      <div className='p-6'>
        <Form {...form} >
          <Text className='text-2xl font-medium	'>Enter the 4 digit OTP sent to {phone_number}</Text>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5 mt-6">
            <FormField
              control={form.control}
              name="otp"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      type='number'
                      maxLength={4}
                      placeholder="Enter 4 digit OTP"
                      className="h-14"
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              type="submit"
              className="authSubmitButton w-full p-6 rounded-md mt-4"
            >
              Submit
            </Button>
          </form>
        </Form>
      </div>
    </Card>
  );
}