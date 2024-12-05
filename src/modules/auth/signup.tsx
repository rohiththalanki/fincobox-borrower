import React, { useState } from 'react';
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
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { PHONE_REGEX } from '@/utils/regex';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

import SignupConfirmOtp from './signup-confirm-otp';

export const SignupSchema = z.object({
  business_type: z.string(),
  email: z.string().email(),
  password: z.string(),
  first_name: z.string(),
  last_name: z.string(),
  phone_number: z.string().regex(PHONE_REGEX, 'Invalid Phone Number!'),
  whatsapp_optin: z.boolean().default(false),
  accept_terms: z.boolean().default(false),
  country_code: z.string()
});


export function Signup() {
  const { mutate: signUpuser, isLoading, isError } = useSignupMutation({});

  const [otpScreen, setOtpScreen] = useState<boolean>(true);

  const form = useForm({
    resolver: zodResolver(SignupSchema),
    defaultValues: {
      business_type: '',
      first_name: '',
      last_name: '',
      phone_number: '',
      email: '',
      password: '',
      accept_terms: false,
      whatsapp_optin: false,
      country_code: 'ae'
    },
  });

  const onSubmit = async (data: SignupParams) => {
    signUpuser({
      ...data
    },
      {
        onSuccess: (response) => {
          console.log('successsss');
        },
        onError: (error: string) => {
        }
      }
    );

  };

  if (otpScreen) {
    return (<SignupConfirmOtp phone_number={''} />)
  }

  return (
    <Card className='bg-white rounded-xl'>
      <div className='p-6'>
        <Form {...form} >
          <Text className='text-2xl font-medium	'>We need a few details to enable your business growth</Text>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5 mt-6">
            <FormField
              control={form.control}
              name="business_type"
              render={({ field }) => (
                <FormItem>
                  <div className="space-y-4">
                    <FormLabel className='font-semibold mb-3'>Business Type</FormLabel>
                    <div className='flex gap-4'>
                      <div className="flex items-center space-x-2">
                        <FormControl>
                          <input
                            type="radio"
                            id="individual"
                            value="Individual"
                            checked={field.value === 'Individual'}
                            onChange={field.onChange}
                            className="radio-input cursor-pointer"
                          />
                        </FormControl>
                        <FormLabel className='cursor-pointer' htmlFor="individual">Individual</FormLabel>
                      </div>
                      <div className="flex items-center space-x-2">
                        <FormControl>
                          <input
                            type="radio"
                            id="business"
                            value="Business"
                            checked={field.value === 'Business'}
                            onChange={field.onChange}
                            className="radio-input cursor-pointer"
                          />
                        </FormControl>
                        <FormLabel className='cursor-pointer' htmlFor="business">Business</FormLabel>
                      </div>
                    </div>
                  </div>

                  <FormMessage />
                </FormItem>
              )}
            />

            <div className='flex gap-2'>
              <FormField
                control={form.control}
                name="first_name"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder="First Name"
                        className="h-14"
                        {...field}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="last_name"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder="Last Name"
                        className="h-14"
                        {...field}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className='mb-4 flex gap-2 justify-content-between'>
              <FormField
                control={form.control}
                name="country_code"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <PhoneInput
                        onlyCountries={['ae', 'in']}
                        country={'ae'}
                        inputProps={{
                          className: "h-14 hiddenInputField",
                          autoFocus: true,
                        }}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phone_number"
                render={({ field }) => (
                  <FormItem className='flex-1'>
                    <FormControl>
                      <Input
                        placeholder="Phone Number"
                        className="h-14"
                        {...field}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="Email"
                      className="h-14"
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="Password"
                      className="h-14"
                      type='password'
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="accept_terms"
              render={({ field }) => (
                <FormItem>
                  <div className="flex items-center space-x-2">
                    <FormControl>
                      <Input
                        type="checkbox"
                        id="accept_terms"
                        checked={field.value}
                        onChange={field.onChange}
                        className="checkbox-input w-auto cursor-pointer"
                      />
                    </FormControl>
                    <FormLabel htmlFor="accept_terms">I accept the terms and conditions</FormLabel>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />


            <Flex>
              <Button
                type="submit"
                className="authSubmitButton w-full p-6 rounded-md mt-4"
              >
                Send OTP
              </Button>
            </Flex>

            <p className='text-center font-semibold'>Already have an account? <Link href="login"><span className='text-blue-600'>Sign in</span></Link></p>
          </form>
        </Form>
      </div>
    </Card>
  );
}

Signup.getLayout = function getLayout(page: React.ReactElement) {
  return <AuthLayout>{page}</AuthLayout>;
};
