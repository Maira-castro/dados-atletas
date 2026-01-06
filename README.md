# 🏃‍♂️ Dados dos Atletas

## 📌 Descrição do Projeto

Este projeto foi desenvolvido como parte do **Projeto de Certificação 2** e tem como objetivo criar uma aplicação em **JavaScript** capaz de receber informações de um atleta, calcular parâmetros importantes e exibi-los ao usuário.

A aplicação utiliza **Programação Orientada a Objetos (POO)** por meio da criação da classe `Atleta`, responsável por armazenar dados e realizar os cálculos necessários.

---

## 🧠 Funcionalidades

- Armazenar os dados do atleta  
- Calcular a **categoria** do atleta com base na idade  
- Calcular o **IMC (Índice de Massa Corporal)**  
- Calcular a **média válida das notas**, descartando a maior e a menor  
- Exibir todas as informações no console  

---

## 📋 Regras de Negócio

### 📌 Categoria do Atleta

- **Infantil**: 9 a 11 anos  
- **Juvenil**: 12 a 13 anos  
- **Intermediário**: 14 a 15 anos  
- **Adulto**: 16 a 30 anos  
- **Sem categoria**: demais idades  

---

### 📌 Cálculo do IMC

```
IMC = peso / (altura × altura)
```
---
### 📌 Cálculo da Média Válida

- O atleta recebe 5 notas

- A maior e a menor nota são descartadas

- A média é calculada com as 3 notas restantes
---
## 🛠️ Tecnologias Utilizadas

- JavaScript
- Node.js (para execução do arquivo)

## 📥 Exemplo de Entrada
```js
const atleta = new Atleta(
  "Cesar Abascal",
  30,
  80,
  1.70,
  [10, 9.34, 8.42, 10, 7.88]
);
```
## 📤 Exemplo de Saída
```
Nome: Cesar Abascal
Idade: 30
Peso: 80
Altura: 1.7
Notas: 10,9.34,8.42,10,7.88
Categoria: Adulto
IMC: 27.68166089965398
Média válida: 9.253333333333334
```

## ▶️ Como Executar o Projeto
1. Clone o repositório:
   ```bash
   git clone https://github.com/Maira-castro/dados-atletas
   ```
2. Acesse a pasta do projeto:
    ```Bash
     cd dados-atletas
    ```
3. Execute o arquivo:
    ```Bash
    node dados-atletas.js
    ```

## 📂 Estrutura do Projeto
```
dados-atletas/
│
├── dados-atletas.js  # Lógica principal do projeto
└── README.md         # Documentação
````