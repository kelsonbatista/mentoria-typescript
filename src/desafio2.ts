// Como podemos melhorar o esse código usando TS? 

enum Profissao {
  Atriz,
  Padeiro,
}

interface Person {
  nome: string,
  idade: number | string,
  profissao: Profissao,
}

let pessoa1: Person = {
  nome: "maria",
  idade: 29,
  profissao: Profissao.Atriz,
};

pessoa1.nome = "maria";
pessoa1.idade = 29;
pessoa1.profissao = Profissao.Atriz;

let pessoa2: Person = {
  nome: "roberto",
  idade: 19,
  profissao: Profissao.Padeiro
}
pessoa2.nome = "roberto";
pessoa2.idade = 19;
pessoa2.profissao = Profissao.Padeiro;

let pessoa3: Person = {
    nome: "laura",
    idade: "32",
    profissao: Profissao.Atriz,
};

let pessoa4: Person = {
    nome: "carlos",
    idade: 19,
    profissao: Profissao.Padeiro,
}