-- Estatísticas anônimas do Redação 1000.
create table if not exists public.eventos (
  id bigint generated always as identity primary key,
  criado_em timestamptz not null default now(),
  dispositivo text not null check (length(dispositivo) <= 64),
  evento text not null check (length(evento) <= 40),
  rota text check (length(rota) <= 40),
  origem text check (length(origem) <= 60),
  dados jsonb not null default '{}' check (pg_column_size(dados) < 2000)
);
create index if not exists eventos_criado_em on public.eventos (criado_em);

-- O app só pode inserir; ninguém lê pela chave pública.
alter table public.eventos enable row level security;
create policy "app insere eventos" on public.eventos for insert to anon with check (true);

-- Painel (rode no SQL Editor do Supabase):
create or replace view public.painel_diario with (security_invoker = true) as
  select (criado_em at time zone 'America/Sao_Paulo')::date as dia,
         count(distinct dispositivo) as alunos,
         count(*) filter (where evento = 'abertura') as sessoes,
         count(*) filter (where evento = 'dia_concluido') as dias_concluidos,
         count(*) filter (where evento = 'simulado_entregue') as simulados,
         count(*) filter (where evento = 'whatsapp') as cliques_whatsapp
  from public.eventos group by 1 order by 1 desc;

create or replace view public.painel_telas with (security_invoker = true) as
  select rota, count(*) as visitas, count(distinct dispositivo) as alunos
  from public.eventos where evento = 'tela'
  group by rota order by visitas desc;
