// declara um conjunto fake de dados para contatos
var dbfake = {
    "data": [
        {
            "id": 1,
			"nome": "Mario",
            "comentario": "Muito top essa parada ae"
        },
        {
            "id": 2,
            "nome": "Carlos",
            "comentario": "Muito interessante"
        },
        {
            "id":3,
            "nome":"João",
            "comentario": "ola gostei desse post",
        },
        {
            "id":4,
            "nome":"Marcos",
            "comentario":"Achei a materia muito interessante"
        },
        {
            "id":5,
            "nome":"Diego",
            "comentario":"Chato, ja vi"
        }
    ]
}

// Caso exista no Local Storage, recupera os dados salvos
var db = JSON.parse(localStorage.getItem('db'));
if (!db) {
    db = dbfake
};

// Exibe mensagem em um elemento de ID msg
function displayMessage(msg) {
    $('#msg').html('<div class="alert alert-warning">' + msg + '</div>');
}

function insertContato(contato) {
    // Calcula novo Id a partir do último código existente no array
    let novoId = db.data[db.data.length - 1].id + 1;
    let novoContato = {
        "id": novoId,
		"nome": contato.nome,        
        "comentario": contato.comentario
        
    };

    // Insere o novo objeto no array
    db.data.push(novoContato);
    displayMessage("Comentario inserido com sucesso");

    // Atualiza os dados no Local Storage
    localStorage.setItem('db', JSON.stringify(db));
}

