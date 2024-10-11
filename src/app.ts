import { createBot,createFlow,MemoryDB,createProvider, addKeyword } from "@bot-whatsapp/bot";
import {BaileysProvider} from '@bot-whatsapp/provider-baileys';



const flowBienvenida = addKeyword('hola').addAnswer('buenas, bienvenido')




const main =async()=>{

    const provider=createProvider(BaileysProvider)
    provider.initHttpServer(3002)

       

    await createBot({
        flow: createFlow([flowBienvenida]),
        database: new MemoryDB(),
        provider
    })


}

main()