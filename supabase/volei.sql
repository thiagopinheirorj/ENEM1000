-- Vôlei dos Professores: jogadores compartilhados entre vários professores.
-- Todos leem pela chave pública; só quem sabe a senha do grupo consegue escrever (via funções).
create extension if not exists pgcrypto with schema extensions;

create table if not exists public.jogadores (
  id uuid primary key default gen_random_uuid(),
  nome text not null check (char_length(nome) between 1 and 40),
  posicao text not null default 'Curinga' check (posicao in ('Levantador','Ponteiro','Central','Oposto','Líbero','Curinga')),
  atq smallint not null default 5 check (atq between 1 and 10),
  blq smallint not null default 5 check (blq between 1 and 10),
  saq smallint not null default 5 check (saq between 1 and 10),
  def smallint not null default 5 check (def between 1 and 10),
  pas smallint not null default 5 check (pas between 1 and 10),
  avaliado boolean not null default false,
  vem_hoje boolean not null default true,
  atualizado_em timestamptz not null default now()
);
alter table public.jogadores enable row level security;
create policy "todos leem jogadores" on public.jogadores for select to anon, authenticated using (true);
revoke insert, update, delete on public.jogadores from anon, authenticated;

create table if not exists public.config (
  id int primary key check (id = 1),
  senha_hash text not null
);
alter table public.config enable row level security;
revoke all on public.config from anon, authenticated;
insert into public.config (id, senha_hash) values (1, 'pendente') on conflict do nothing;

create or replace function public.senha_ok(p_senha text) returns boolean
language plpgsql security definer set search_path = public, extensions as $$
declare ok boolean;
begin
  select senha_hash = crypt(coalesce(p_senha,''), senha_hash) into ok from public.config where id = 1;
  if not coalesce(ok,false) then perform pg_sleep(0.4); end if;
  return coalesce(ok,false);
end $$;

create or replace function public.verificar_senha(p_senha text) returns boolean
language sql security definer set search_path = public as $$ select public.senha_ok(p_senha) $$;

create or replace function public.salvar_jogador(
  p_senha text, p_id uuid, p_nome text, p_posicao text,
  p_atq int, p_blq int, p_saq int, p_def int, p_pas int
) returns uuid language plpgsql security definer set search_path = public as $$
declare v_id uuid;
begin
  if not public.senha_ok(p_senha) then raise exception 'senha_invalida'; end if;
  if p_id is null then
    insert into public.jogadores (nome,posicao,atq,blq,saq,def,pas,avaliado)
    values (btrim(p_nome),p_posicao,p_atq,p_blq,p_saq,p_def,p_pas,true) returning id into v_id;
  else
    update public.jogadores set nome=btrim(p_nome), posicao=p_posicao, atq=p_atq, blq=p_blq, saq=p_saq,
      def=p_def, pas=p_pas, avaliado=true, atualizado_em=now() where id=p_id returning id into v_id;
  end if;
  return v_id;
end $$;

create or replace function public.excluir_jogador(p_senha text, p_id uuid) returns void
language plpgsql security definer set search_path = public as $$
begin
  if not public.senha_ok(p_senha) then raise exception 'senha_invalida'; end if;
  delete from public.jogadores where id = p_id;
end $$;

-- p_ids nulo = todos os jogadores
create or replace function public.definir_presenca(p_senha text, p_ids uuid[], p_vem boolean) returns void
language plpgsql security definer set search_path = public as $$
begin
  if not public.senha_ok(p_senha) then raise exception 'senha_invalida'; end if;
  update public.jogadores set vem_hoje = p_vem, atualizado_em = now() where p_ids is null or id = any(p_ids);
end $$;

create or replace function public.trocar_senha(p_atual text, p_nova text) returns void
language plpgsql security definer set search_path = public, extensions as $$
begin
  if not public.senha_ok(p_atual) then raise exception 'senha_invalida'; end if;
  if char_length(coalesce(p_nova,'')) < 6 then raise exception 'senha_curta'; end if;
  update public.config set senha_hash = crypt(p_nova, gen_salt('bf')) where id = 1;
end $$;

grant execute on function public.verificar_senha(text), public.salvar_jogador(text,uuid,text,text,int,int,int,int,int),
  public.excluir_jogador(text,uuid), public.definir_presenca(text,uuid[],boolean), public.trocar_senha(text,text)
  to anon, authenticated;
revoke execute on function public.senha_ok(text) from public, anon, authenticated;

-- Jogadores iniciais (sem avaliação, nota 5 em tudo)
insert into public.jogadores (nome)
select n from unnest(array['Caco Gesing','Camila Antunes','Edmara','Edson','Fabiane Fucheter','Felipe','Gisele','Giseli Eloá','Jaqueline','Je Medeiros','Lisiane','Marcos Sargento','Kate','Patrícia Buss','Cinthia Savi','Sinara','Sirlene Spillere','Jonas','Victor','Neide Honorato','Carlos Della Giustina','Dodó','Luísa Feuser','Jeferson Xavier','Zqui']) n
where not exists (select 1 from public.jogadores);
