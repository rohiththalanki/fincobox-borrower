import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export function classes(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function isServer() {
  return typeof window === 'undefined';
}