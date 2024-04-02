let participantes = [
    {
        nome: "Teste Ale",
        email: "teste@ale.com",
        dataInscricao: new Date(2024, 2, 22, 19, 20),
        dataCheckIn: new Date(2024, 2, 25, 22, 10)
    },
    {
        nome: "Maria Silva",
        email: "maria.silva@example.com",
        dataInscricao: new Date(2024, 1, 15, 10, 30),
        dataCheckIn: new Date(2024, 2, 1, 14, 45)
    },
    {
        nome: "João Santos",
        email: "joao.santos@example.com",
        dataInscricao: new Date(2024, 1, 18, 14, 10),
        dataCheckIn: new Date(2024, 2, 5, 9, 20)
    },
    {
        nome: "Ana Oliveira",
        email: "ana.oliveira@example.com",
        dataInscricao: new Date(2024, 1, 20, 11, 45),
        dataCheckIn: new Date(2024, 2, 10, 16, 30)
    },
    {
        nome: "Pedro Costa",
        email: "pedro.costa@example.com",
        dataInscricao: new Date(2024, 1, 25, 16, 20),
        dataCheckIn: new Date(2024, 2, 15, 12, 15)
    },
    {
        nome: "Luisa Fernandes",
        email: "luisa.fernandes@example.com",
        dataInscricao: new Date(2024, 2, 1, 9, 30),
        dataCheckIn: new Date(2024, 2, 20, 17, 50)
    },
    {
        nome: "Carlos Sousa",
        email: "carlos.sousa@example.com",
        dataInscricao: new Date(2024, 2, 5, 13, 40),
        dataCheckIn: new Date(2024, 2, 22, 11, 25)
    },
    {
        nome: "Mariana Carvalho",
        email: "mariana.carvalho@example.com",
        dataInscricao: new Date(2024, 2, 10, 18, 15),
        dataCheckIn: new Date(2024, 2, 24, 9, 35)
    },
    {
        nome: "Rafael Pereira",
        email: "rafael.pereira@example.com",
        dataInscricao: new Date(2024, 2, 12, 10, 50),
        dataCheckIn: new Date(2024, 2, 26, 13, 20)
    },
    {
        nome: "Fernanda Martins",
        email: "fernanda.martins@example.com",
        dataInscricao: new Date(2024, 2, 18, 15, 20),
        dataCheckIn: new Date(2024, 2, 28, 10, 45)
    }
];

const criarNovoParticipante = (participante) => {
    const dataInscricao = dayjs(Date.now())
    .to(participante.dataInscricao)

    const dataCheckIn = dayjs(Date.now())
    .to(participante.dataCheckIn)

    return `
        <tr>
            <td>
                <strong>
                    ${participante.nome}
                </strong>
                <br>
                <small>
                    ${participante.email}
                </small>
            </td>
            <td>${dataInscricao}</td>
            <td>${dataCheckIn}</td>
        </tr>
    `
}

const atualizarLista = (participantes) => {
    let output = ""
    for(let participante of participantes) {
        output = output + criarNovoParticipante(participante)
    }

    document
    .querySelector('tbody')
    .innerHTML = output
}

atualizarLista(participantes)