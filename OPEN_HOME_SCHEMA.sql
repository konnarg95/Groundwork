-- Run in Supabase SQL editor after review. No existing tables are changed.
create table if not exists public.ciq_open_homes (
 id uuid primary key default gen_random_uuid(),
 owner_id uuid not null references auth.users(id) on delete cascade,
 address text not null check (char_length(address) between 5 and 160),
 label text not null default '',
 created_at timestamptz not null default now()
);
create index if not exists ciq_open_homes_owner_idx on public.ciq_open_homes(owner_id);
create table if not exists public.ciq_open_home_responses (
 id bigint generated always as identity primary key,
 campaign_id uuid not null references public.ciq_open_homes(id) on delete cascade,
 price numeric not null check (price between 10000 and 100000000),
 ratings jsonb not null,
 comment text not null default '',
 created_at timestamptz not null default now()
);
create index if not exists ciq_open_home_responses_campaign_idx on public.ciq_open_home_responses(campaign_id,created_at desc);
alter table public.ciq_open_homes enable row level security;
alter table public.ciq_open_home_responses enable row level security;
-- No anon/authenticated grants or RLS policies: all access goes through authenticated server functions using a server-only service role key.
revoke all on public.ciq_open_homes from anon, authenticated;
revoke all on public.ciq_open_home_responses from anon, authenticated;
