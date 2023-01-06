
# 💻kenzie-Hub-API

## 🛠️:cloud: Inicialização

:white_check_mark: 1. **Fazer o clone do repositório neste link:** https://github.com/Leo-neves20/kenzie-Hub-API-express.git <br>
:white_check_mark: 2. **Abra o terminal e dê o comando "yarn" ou "npm i"** <br>
:white_check_mark: 3. **Faça uma copia do arquivo ".env.exemples" e dê o nome de ".env"** <br>
:white_check_mark: 4. **Crie uma banco postgres** <br>
:white_check_mark: 5. **preencha os campos com os dados do seu banco de dados postgres no arquivo ".env"** <br>
:white_check_mark: 6. **Dê um "yarn dev" ou se usar o npm, Dê um "npm dev"**

_______________________________________________________________________________________________________________________________________________________________________

:heavy_exclamation_mark: **Pronto, agora seu banco de dados está conectado com sua Api. A Url base será** "https://localhost:3001" :heavy_exclamation_mark:

🟢 **POST - /user/register**


* Rota para fazer registro do usuário. ***Senha deve conter 8 dígitos, deve conter uma letra maiúscula, deve conter uma letra minúscula, deve conter um carácter especial, deve conter um número***

     
**Request:**
````
{
	name: string,
	email: string,
	password: string,
	confirm_password: string,
	module: string
}`
````
	
**Response:** 
````
{
    id: string,
    name: string,
    email: string,
    module: string,
    isActive: boolean, 
    createdAt: Date,
    updatedAt: Date,
    deletedAt: Date,
}
````

_______________________________________________________________________________________________________________________________________________________________________

🟢 **POST - /login**

* Rota para fazer o login.

**Request:** 
````
{
  email: string,
  password: string
}
````

**Response:** 
````
{
  token: aoZJSJhOpjwQXDWKRtXz3HjucCaC08hw91vFxxswjIMzUNYxFefGoQZ75spo60XjgvCAWSFAtxPjdMnYpkxLH7E63aa2cf042609
}
````

_______________________________________________________________________________________________________________________________________________________________________

🔵 **GET - /user/data**

* Lista os dados do usuário logado

**Response:** 
````
{
    id: string,
    name: string,
    email: string,
    module: string,
    isActive: boolean, 
    createdAt: Date,
    updatedAt: Date,
    deletedAt: Date,
}
````

_______________________________________________________________________________________________________________________________________________________________________

🟢 **POST - /techs/create**

* Cria tecnologia 

**Request:** 
````
{
  technology: string,
  status: string
}
````

**Response:** 
````
{
    id: number
    technology: string
    status: string
    createdAt: Date
    updatedAt: Date
    deletedAt: Date
}
````

_______________________________________________________________________________________________________________________________________________________________________

🔵 **GET - /techs**

* Lista todas as tecnologias do usuário logado

**Response:** 
````
{
    id: number
    technology: string
    status: string
    createdAt: Date
    updatedAt: Date
    deletedAt: Date
}
````

_______________________________________________________________________________________________________________________________________________________________________

🟡 **PATCH - /techs/:id-da-tech**

 - Atualiza tecnologia selecionada.

**Request:**

````
{
	technology?:  string,
	status?:  string
}
````

**Response:** 
````
{
	id:  number
	technology:  string
	status:  string
	createdAt:  Date
	updatedAt:  Date
	deletedAt:  Date
}
````

_______________________________________________________________________________________________________________________________________________________________________

🔴 **DELETE - /techs/:id-da-tech**

 - Exclui tecnologia selecionada
 _______________________________________________________________________________________________________________________________________________________________________
