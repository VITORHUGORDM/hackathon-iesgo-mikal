# Hackathon IESGO - Regras do Hackathon

## Objetivo do evento
- Integrar os alunos em um fluxo completo de colaboracao Git.
- Criar uma aplicacao web estatica que resolva desafios da vida academica.
- Publicar o resultado no GitHub Pages com automacao via GitHub Actions.

## Tema Campus+ Connect
- **Trilha 1 - Mapa e servicos:** mapa do campus, salas, laboratorios, horarios.
- **Trilha 2 - Produtividade:** agendas, tecnicas de foco, checklist de entregas.
- **Trilha 3 - Comunidade:** doacoes, caronas, mural de eventos, integracao social.
- **Trilha 4 - Saude e bem-estar:** rotinas saudaveis, suporte psicologico, esportes.

## Passo a passo de participacao
1. Fork do repositorio base e deixe uma estrela para apoiar o projeto.
2. Abra o fork no Codespaces com *Create codespace on main* (confirme o ambiente sugerido).
3. Crie uma branch no padrao `feat/seu-usuario/nome-da-feature`.
4. Desenvolva a contribuicao (secoes, componentes, dados) usando Conventional Commits.
5. Realize `git push` e abra um Pull Request para `main`, preenchendo o template e anexando evidencias.
6. Garanta que o GitHub Actions execute com sucesso; corrija eventuais falhas.
7. Depois das aprovacoes e checks verdes, finalize com *Squash & Merge* (preferencial).
8. Configure e publique o projeto no GitHub Pages e envie o link final pelo formulario da turma.

## Requisitos tecnicos obrigatorios
- Cada participante entrega pelo menos um PR em branch propria.
- Todo Pull Request inclui descricao, imagens ou GIFs e checklist preenchido.
- Actions precisam rodar e ficar verdes antes do merge.
- O site deve ficar online via GitHub Pages ao final do hackathon.
- Commits seguem Conventional Commits e o template de PR e respeitado.

## Boas praticas recomendadas
- Manter a estrutura organizada (`assets/`, `css/`, `js/` etc.).
- Fazer code review com feedback objetivo e colaboracao ativa.
- Evitar commits gigantes; prefira entregas pequenas e focadas.
- Garantir responsividade (ex.: Bootstrap) e cuidados basicos de acessibilidade.

## GitHub Actions e Pages
- Utilize o workflow `build & deploy` disponibilizado em `.github/workflows/deploy.yml`.
- Pull Requests ativam os checks de build/lint/test; apenas merges com checks verdes sao aceitos.
- Para publicar, ajuste o repositorio (`Settings > Pages`) apontando para `GitHub Actions`.
- O deploy ocorre automaticamente apos o merge na `main`; inclua o link publicado no README.

## Criterios de avaliacao
| Criterio             | Descricao                                                        | Pontuacao |
| -------------------- | ---------------------------------------------------------------- | --------- |
| Colaboracao Git      | Branch por aluno, PRs, reviews e resolucao de conflitos.         | 0-30      |
| Automacao (CI/CD)    | Actions configurado, checks verdes, deploy continuo.             | 0-20      |
| Entrega no Pages     | Site funcional publicado e link documentado.                     | 0-15      |
| Qualidade tecnica    | Organizacao, responsividade, acessibilidade, ausencia de quebras.| 0-20      |
| Valor do tema        | Relevancia e clareza da solucao para a vida academica.           | 0-15      |
| **Total**            |                                                                  | **100**   |

## Estrutura minima sugerida
```text
.
├─ index.html
├─ assets/
│  ├─ css/styles.css
│  └─ img/
├─ js/app.js
├─ .github/workflows/deploy.yml
└─ .devcontainer/devcontainer.json
```

## Entrega final
- Informe no formulario: link do repositorio, link do GitHub Pages e numero do seu Pull Request.
- Garanta que seu nome apareca nos commits e no historico de contribuicoes do PR.
- Mantenha o README do projeto atualizado com a sua entrega e com o link publicado.

## FAQ rapido
- **Posso usar frameworks?** Sim, desde que o build gere arquivos estaticos para o Pages.
- **Preciso de backend?** Nao; o foco e front estatico com Git, PRs, Actions e Pages.
- **Como comprovo minha participacao?** Com PR aprovado, mergeado e link do Pages no README.
