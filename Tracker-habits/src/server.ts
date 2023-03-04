//typeScript -> Javascript


//typeScript -> Tipagem Estática nada mais é do que trazer inteligencia pro meu editor de código  no caso aqui pro VsCode para ele conseguir identificar problemas antes do meu código ir para produção

// o typeScript ele é um super set que trás um recurso para javaScript

// Back-end API RestFul


//localhost: 3333/ habits
//localhost:3333


//Abrir uma porta na Fastify porta 3333 cada uma destas rotas aqui eu irei acessar no meu navegador

/*
 *Metodos HTTP: Get, Post, Put, Patch e Delete
 */

import Fastify from 'fastify' 
import cors    from '@fastify/cors'
import { appRoutes } from './routes'
const app = Fastify()


app.register(cors)
app.register(appRoutes)

//Abre uma porta para um site 
app.listen({
 port: 3333,
 host:'0.0.0.0'
}).then((url) => {
  console.log(`HTTP server running on ${url}`);

  
})

//setup do backend foi concluído com sucesso

