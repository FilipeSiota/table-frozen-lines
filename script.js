main(); // executar a função main

function main() {
    var livros = [
        {
            issn: 1,
            nome: "Pequeno Príncipe",
            autor: "Francês",
            editora: "Viva",
            idioma: "Português"
        },
    
        {
            issn: 2,
            nome: "Pequeno Príncipe",
            autor: "Francês",
            editora: "Viva",
            idioma: "Português"
        },
    
        {
            issn: 3,
            nome: "Pequeno Príncipe",
            autor: "Francês",
            editora: "Viva",
            idioma: "Português"
        },
    
        {
            issn: 4,
            nome: "Pequeno Príncipe",
            autor: "Francês",
            editora: "Viva",
            idioma: "Português"
        },
    
        {
            issn: 5,
            nome: "Pequeno Príncipe",
            autor: "Francês",
            editora: "Viva",
            idioma: "Português"
        },
    
        {
            issn: 20,
            nome: "Pequeno Príncipe",
            autor: "Francês",
            editora: "Viva",
            idioma: "Português"
        }
    ]

    preencherTabela(".tbl-body", livros, "issn", "nome");
}

function preencherTabela(identificadorCorpoTabela, dados, nomeColunaCongelada1, nomeColunaCongelada2) {

    const tblBody = document.querySelectorAll(identificadorCorpoTabela);

    tblBody.forEach(tabela => {
    
        dados.forEach(dado => {
            
            const novaLinha = document.createElement("tr");

            for (const atributo in dado) {
                if (Object.hasOwnProperty.call(dado, atributo)) {
                    const valor = dado[atributo];

                    const novaColuna = document.createElement("td");

                    if(atributo == nomeColunaCongelada1)
                    {
                        novaColuna.classList.add("congelar-col1");
                        novaColuna.classList.add("col");
                    } else if (atributo == nomeColunaCongelada2) {
                        novaColuna.classList.add("congelar-col2");
                        novaColuna.classList.add("col");
                    }

                    novaColuna.innerText = valor;
                    novaLinha.appendChild(novaColuna);
                }
            }

            tabela.appendChild(novaLinha);
        });
    });
}