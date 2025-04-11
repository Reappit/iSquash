'use client';

import posthog from 'posthog-js';
import { PostHogProvider as PHProvider } from 'posthog-js/react';
import React, { type ReactNode } from 'react';
import { useEffect } from 'react';

import { env } from '@/env';

const Providers = ({ children }: { children: ReactNode }) => {
  return <PostHogProvider>{children}</PostHogProvider>;
};

export function PostHogProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    if (window?.location?.hostname === 'localhost') {
      return;
    }
    posthog.init(env.NEXT_PUBLIC_POSTHOG_KEY, {
      api_host: '/ingest',
      ui_host: 'https://eu.posthog.com',
      person_profiles: 'always',
      capture_pageview: false, // Disable automatic pageview capture, as we capture manually
      capture_pageleave: true,
    });
  }, []);

  return <PHProvider client={posthog}>{children}</PHProvider>;
}

export default Providers;
