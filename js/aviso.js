/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(document).ready(function() {
 $('#enviar').click(function() {
        // busca informação dos campos
        var nome = $('#nome').val();
        var email = $('#email').val();
        var idade = $('#idade').val();
        var cidade = $('#cidade').val();
        var profissao = $('#profissao').val();
        var mensagem = $('#mensagem').val();

        //confere senha 
        if ((nome === null) || (nome === "")) {
            alert("Preencha o campo nome!");
            return false;
        }

        if (email === null || email === "") {
            alert("Preencha o campo confirma e-mail!");
            return false;
        }

        if (idade === null || idade === "") {
            alert("Preencha o campo confirma idade!");
            return false;
        }
        if (cidade === null || cidade === "") {
            alert("Preencha o campo confirma cidade!");
            return false;
        }
        if (profissao === null || profissao === "") {
            alert("Preencha o campo confirma profissão!");
            return false;
        }
        if (mensagem === null || mensagem === "") {
            alert("Preencha o campo confirma mensagem!");
            return false;
        }
 
 
 })
 });
