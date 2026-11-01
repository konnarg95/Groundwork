-- Run once in Supabase SQL editor. Never place service-role credentials in browser code.
create table if not exists public.billing_subscriptions (
 user_id uuid primary key references auth.users(id) on delete cascade,
 stripe_customer_id text,
 stripe_subscription_id text unique,
 status text not null default 'none',
 trial_end timestamptz,
 current_period_end timestamptz,
 updated_at timestamptz not null default now()
);
create index if not exists billing_customer_idx on public.billing_subscriptions(stripe_customer_id);
alter table public.billing_subscriptions enable row level security;
revoke all on public.billing_subscriptions from anon, authenticated;
-- All access is via server endpoints, which validate the Supabase JWT and use the service role.
