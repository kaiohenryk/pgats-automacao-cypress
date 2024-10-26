# Projeto de automação de testes end-to-end com cypress

Projeto de automação de testes E2E utilizando cypress para garantir a validação de funcionalidades de uma aplicação web.

## Funcionalidades

- Testes e2e para verificar a funcionalidade da aplicação.
- Relatórios de testes gerados com Mochawesome.
- Suporte para testes em múltiplos navegadores.

## Pré-requisitos

Antes de começar, é preciso ter o Node.js e o npm instalados em sua máquina. Você pode baixar e instalar a versão mais recente do Node.js em [nodejs.org](https://nodejs.org/).

## Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/kaiohenryk/pgats-automacao-cypress.git
   cd pgats-automacao-cypress
2. Instale as dependências do projeto:
   ```bash
   npm install
## Uso

1. Para abrir a interface do cypress e executar os testes no modo gráfico, utilize o comando:
   ```bash
   npx cypress open
2. Para executar os testes em modo headless (sem interface gráfica), utilize o comando:
   ```bash
   npx cypress run
## Relatórios

Os relatórios de execução dos testes serão gerados na pasta cypress/reports. Você pode visualizar o relatório em HTML na pasta após a execução dos testes.
