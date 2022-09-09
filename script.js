main(); // executar a função main

function main() {
    var livros = [
        {
            issn: 1234,
            nome: "Pequeno Príncipe",
            autor: "Francês",
            editora: "Viva",
            idioma: "Português"
        },
    
        {
            issn: 1234,
            nome: "Pequeno Príncipe",
            autor: "Francês",
            editora: "Viva",
            idioma: "Português"
        },
    
        {
            issn: 1234,
            nome: "Pequeno Príncipe",
            autor: "Francês",
            editora: "Viva",
            idioma: "Português"
        },
    
        {
            issn: 1234,
            nome: "Pequeno Príncipe",
            autor: "Francês",
            editora: "Viva",
            idioma: "Português"
        },
    
        {
            issn: 1234,
            nome: "Pequeno Príncipe",
            autor: "Francês",
            editora: "Viva",
            idioma: "Português"
        },
    
        {
            issn: 1234,
            nome: "Pequeno Príncipe",
            autor: "Francês",
            editora: "Viva",
            idioma: "Português"
        }
    ]

    preencherTabela(".tbl-body", livros, "issn");
}

function preencherTabela(identificadorCorpoTabela, dados, nomeColunaCongelada) {

    const tblBody = document.querySelectorAll(identificadorCorpoTabela);

    tblBody.forEach(tabela => {
    
        dados.forEach(dado => {
            
            const novaLinha = document.createElement("tr");

            for (const atributo in dado) {
                if (Object.hasOwnProperty.call(dado, atributo)) {
                    const valor = dado[atributo];

                    const novaColuna = document.createElement("td");

                    if(atributo == nomeColunaCongelada)
                    {
                        novaColuna.classList.add("congelar");
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