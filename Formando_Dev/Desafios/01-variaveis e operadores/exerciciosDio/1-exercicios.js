/*
1) Faça um algoritimo que dado as 3 notas por um aluno em semestre da faculdade calcule e imprima a sua média e a classificação conforme a tabela abaixo.

Média = (nota 1 + nota 2 + nota 3) /2

Classificação:
-Média menor que 5, reprovado;
-Média entre 5 e 7, recuperação;
-Média acima de 7, passou de semestre;
*/

         nota1 = 6;
       const nota2 = 7;
      const nota3 = 5;
    const media = (nota1 + nota2 + nota3) / 2;
   console.log (media);

  if (media < 5){
   console.log(reprovado);
     }else if (media >=5 && media <= 7){
      console.log(recuperacao);
       } else{
         console.log('passou de ano');
}