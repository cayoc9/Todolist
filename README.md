
# ToDo List Application

## Descrição

Uma aplicação de lista de tarefas (ToDo List) que permite aos usuários criar, visualizar, atualizar e excluir tarefas. A aplicação foi desenvolvida com um **frontend** em **React** utilizando **Redux Toolkit** para gerenciamento de estado e **Material-UI (MUI)** para estilização. O **backend** foi desenvolvido em **Node.js** com **Express** e **Sequelize** para interação com o banco de dados.

## Funcionalidades

- **Adicionar Tarefa**: Adicione novas tarefas com uma descrição.
- **Visualizar Tarefas**: Veja todas as tarefas em uma lista organizada.
- **Editar Tarefa**: Edite a descrição das tarefas existentes.
- **Excluir Tarefa**: Remova tarefas que não são mais necessárias.
- **Completar Tarefa**: Marque tarefas como concluídas ou pendentes.
- **Filtrar Tarefas**: Filtre tarefas por status (todas, pendentes, concluídas).
- **Buscar Tarefas**: Pesquise tarefas por descrição.
- **Notificações**: Receba feedback através de notificações para ações como adicionar, editar ou excluir tarefas.
- **Validações**: Garantia de que a descrição da tarefa não esteja vazia.

## Tecnologias Utilizadas

### Frontend

- **React**: Biblioteca JavaScript para construção de interfaces de usuário.
- **Redux Toolkit**: Gerenciamento de estado de forma simples e eficiente.
- **React Redux**: Integração entre React e Redux.
- **Axios**: Cliente HTTP para realizar requisições ao backend.
- **Material-UI (MUI)**: Biblioteca de componentes React para estilização.
- **Vite**: Ferramenta de build e bundling rápida para projetos React.

### Backend

- **Node.js**: Ambiente de execução JavaScript no lado do servidor.
- **Express.js**: Framework web para Node.js.
- **Sequelize**: ORM para modelagem do banco de dados.
- **Mysql**: Banco de dados relacional popular e Open Source.
- **Cors**: Middleware para habilitar CORS.

## Pré-requisitos

- **Node.js** instalado na máquina (versão 14 ou superior).
- **npm** ou **yarn** para gerenciamento de pacotes.
- **Git** para controle de versão.

## Instalação

### Configuração do Backend

1. Navegue até a pasta do backend:

   ```bash
   cd backend
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```

3. Configure o banco de dados:

   - O projeto utiliza o **MySQL** como banco de dados, gerenciado por `Sequelize` como ORM, configure as credenciais no arquivo `config/database.js` ou em variáveis de ambiente.

4. Execute as migrações (se aplicável):

   ```bash
   npx sequelize db:migrate
   ```

5. Inicie o servidor backend:

   ```bash
   npm start
   ```

   O backend estará rodando em `http://localhost:3000`.

### Configuração do Frontend

1. Abra um novo terminal e navegue até a pasta do frontend:

   ```bash
   cd frontend
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```

3. Inicie o servidor frontend:

   ```bash
   npm run dev
   ```

   O frontend estará rodando em `http://localhost:5173`.

## Uso

1. Acesse `http://localhost:5173` no navegador.
2. Utilize a interface para adicionar, editar, completar ou excluir tarefas.
3. Utilize os filtros e a barra de busca para gerenciar suas tarefas.
4. As notificações aparecerão no canto da tela para informar o status das operações.

## Estrutura do Projeto

### Frontend

```
frontend/
├── public/
│   ├── index.html
│   └── checklist.svg
├── src/
│   ├── api/
│   │   └── axios.js
│   ├── components/
│   │   ├── AppNotification.jsx
│   │   ├── EditTaskModal.jsx
│   │   ├── SearchBar.jsx
│   │   ├── TaskFilters.jsx
│   │   ├── TaskForm.jsx
│   │   ├── TaskItem.jsx
│   │   └── TaskList.jsx
│   ├── redux/
│   │   ├── notificationSlice.js
│   │   ├── store.js
│   │   └── tasksSlice.js
│   ├── App.jsx
│   └── main.jsx
├── package.json
└── vite.config.js
```

### Backend

```
backend/
├── controllers/
│   └── taskController.js
├── models/
│   └── Task.js
├── routes/
│   └── taskRoutes.js
├── config/
│   └── database.js
├── app.js
├── package.json
└── .env (opcional)
```

## API Endpoints

### Tarefas

- `GET /tasks`: Retorna todas as tarefas.
- `POST /tasks`: Cria uma nova tarefa.
- `PUT /tasks/:id`: Atualiza uma tarefa existente.
- `DELETE /tasks/:id`: Exclui uma tarefa.
- `PATCH /tasks/:id/complete`: Alterna o status de uma tarefa entre pendente e concluída.
