# Hsyst Auth - Tutorial de Uso
![Logo Hsyst Auth](https://github.com/Hsyst/Hsyst-Auth/blob/main/Hsyst_Auth-semfundo.png)

---

Esse tutorial será guiado em duas partes, o "Hsyst Auth - Main" e o "Hsyst Auth - SSL", ou seja, a versão normal e a com SSL.

# Hsyst Auth - Main

## Passo 1
Instale as dependências para a utilização do serviço.
```sh
npm install crypto express jsonwebtoken sqlite3
```

## Passo 2
Gere o Secret_AES
```sh
npm run secret-aes-gen
```

## Passo 3
Ao gerar o Secret_AES, copie ele, e abra o arquivo `index.js`, e altere a variável `cifraes` pelo valor gerado pelo script que você rodou.

---

Exemplo: Antes --> `const cifraes = "1234"`  /// Aí você vai alterar o `1234` pelo valor gerado pelo secret-aes-gen.


## Passo 4
Altere o JWT_SECRET por um valor de sua preferencia, pode ser uma senha que você usa, ou só um monte de letras e caracteres do seu teclado 🙂.

---

Exemplo: Antes --> `const JWT_SECRET = "1234"` // Aí você altera `1234` por um valor de sua preferencia. Recomendamos que tenha Números, Letras Maiusculas e Minusculas e Caracteres especiais, e tenha entre 20 a 30 caracteres.


## Passo 5
Execute o servidor -__-

```sh
npm run main
```

## Passo 6 (possiveis problemas)
Provavelmente, quando você executar o servidor pela segunda vez, ele vai dar um erro, mas relaxa que isso é esperado. Isso é basicamente ele te falando "Cara, tu vai usar a mesma database ou o que?". Você tem duas opções, a primeira é simplesmente deletar o `tokens.db`. O segundo, é comentar a linha `48`.

---
---

# Hsyst Auth - SSL

## Passo 1
Instale as dependências para a utilização do serviço.
```sh
npm install crypt express jsonwebtoken sqlite3 fs https
```

## Passo 2
Gere o Secret_AES
```sh
npm run secret-aes-gen
```

## Passo 3
Ao gerar o Secret_AES, copie ele, e abra o arquivo `index-ssl.js`, e altere a variável `cifraes` pelo valor gerado pelo script que você rodou.

---

Exemplo: Antes --> `const cifraes = "1234"`  /// Aí você vai alterar o `1234` pelo valor gerado pelo secret-aes-gen.


## Passo 4
Altere o JWT_SECRET por um valor de sua preferencia, pode ser uma senha que você usa, ou só um monte de letras e caracteres do seu teclado 🙂.

---

Exemplo: Antes --> `const JWT_SECRET = "1234"` // Aí você altera `1234` por um valor de sua preferencia. Recomendamos que tenha Números, Letras Maiusculas e Minusculas e Caracteres especiais, e tenha entre 20 a 30 caracteres.


## Passo 5
Execute o servidor -__-

```sh
npm run main-ssl
```

## Passo 6 (possiveis problemas)
Provavelmente, quando você executar o servidor pela segunda vez, ele vai dar um erro, mas relaxa que isso é esperado. Isso é basicamente ele te falando "Cara, tu vai usar a mesma database ou o que?". Você tem duas opções, a primeira é simplesmente deletar o `tokens.db`. O segundo, é comentar a linha `61`.
