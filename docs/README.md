## Cookies e Sessões

Uma aplicação web é construída baseada em requisições e respostas (request / response) com isso podemos perceber
que em sua "forma de construção" quando fazemos uma requisição e obtemos uma resposta, essas variáveis somem...
Ou seja, não conseguimos garantir se é o mesmo usuário que está acessando a aplicação e por não sabermos quem está
fazendo esse acesso a cada rota chamamos a aplicação de stateless, pois ela em si não guarda sessão do usuário.

- Para contornar isso utilizamos alguns mecanismos (persistencia de informações entre requisições):
* Cookies:
```sh
# O cookie é um arquivo de texto que fica armazenado na máquina do usuário
# fluxo:
[Coookie] (navegador do usuário) =======> [request]
```
<h5>Promemática</h5>
Pelo fato dos cookies ficarem armazenados no navegador do usuário não podemos confiá-lo 100% das vezes, pois o fato
de estar no navegador ou no browser, não no servidor não temos como controlar níveis de segurança. Por isso só podemos
armazenar nos cookies informações menos sensíveis.
</hr>

* Sessão:
Seus dados são guardados no servidor, porém para que uma sessão funcione temos algumas opções, ou repassar o id da sessão
em todas as URLs ou gravar um cookie de sessão que é responsável por guardar um id de sessão (uma hash) que é enviado para
o servidor que recupera a sessão, recuperando uma informação que está vinculado a uma sessão, com isso a informação não mais
fica nos cookies necessariamente.