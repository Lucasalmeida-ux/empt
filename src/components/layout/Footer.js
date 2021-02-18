import Image from 'next/image'
import { useState } from 'react'
import { FaWhatsappSquare } from 'react-icons/fa'

export default function Footer() {
    const [whatsOn, setWhatsOn] = useState(false)

    return (<>
        <footer className="bg-gray-800 grid md:grid-cols-4 p-3 md:p-7 text-gray-300 text-center md:text-right">
            <div className="px-5">
                <Image src="/logo-w.png" width="200" height="33"></Image>
                <p>Otimize a sua empresa com o que existe de mais moderno e eficiente. Nossa empresa é líder no ramo de gestão empresarial. Descomplique sua rotina de trabalho!</p>
            </div>
            <div>
                <h2 className="text-blue-300 uppercase font-medium">Fale Consoco</h2>
                <a href="http://web.whatsapp.com/send?1=pt_BR&amp;phone=5511952185072" className="text-green-400 hover:text-green-200">whatts : 11 9 5218-5072</a><br />
                telefone: 11 2952-6221<br />
                luana@datacyber.com.br
            </div>
            <div>
                <h2 className="text-blue-300 uppercase font-medium">Suporte</h2>
                <a href="http://web.whatsapp.com/send?1=pt_BR&amp;phone=5511947009576" className=" text-green-400 hover:text-green-200" >whatts : 11 9 4700-9576</a><br />
                telefone : 11 2952-6221 <br />
                suporte@datacyber.com.br
            </div>
            <div>
                <h2 className="text-blue-300 uppercase font-medium">Endereço</h2>
                Rua: Horto Florestal, 703 – Tremembé São Paulo – SP CEP: 02377-000
            </div>
        </footer>
        <div className="fixed bottom-3 right-3">
            <div className={`${whatsOn ? 'block' : 'hidden'}  bg-blue-200 p-3 transition`}>
                <p className="text-gray-600 p-2">
                Oi! Clique em um membro da equipe <br /> para abrir uma conversa no Whatsapp.
                </p>
            <div className="mb-3 bg-white p-3 group hover:bg-gray-100 hover:shadow-md rounded-md">
                <a href="http://web.whatsapp.com/send?1=pt_BR&amp;phone=5511952185072" target="_BLANK" className="grid grid-cols-4 text-green-400 group-hover:text-green-600">
                    <div>
                        <Image src="/wpp/luana.png" width="60" height="60" className="rounded-full" />
                    </div>

                    <div className="col-span-3">
                        <h2 className="uppercase font-medium">Luana Barbosa de Oliveira</h2>
                        <span className="text-gray-400 group-hover:text-gray-600">Comercial</span>
                    </div>

                </a>
            </div>
            <div className="bg-white p-3 group hover:bg-gray-100 hover:shadow-md rounded-md">
                <a href="http://web.whatsapp.com/send?1=pt_BR&amp;phone=5511952185072" target="_BLANK" className="grid grid-cols-4 text-green-400 group-hover:text-green-600">
                    <div>
                        <Image src="/wpp/lucas.png" width="60" height="60" className="rounded-full" />
                    </div>

                    <div className="col-span-3">
                        <h2 className="uppercase font-medium">Lcas Georgenes</h2>
                        <span className="text-gray-400 group-hover:text-gray-600">Suporte</span>
                    </div>

                </a>
            </div>
            </div>
            <FaWhatsappSquare onClick={() => setWhatsOn(!whatsOn)} className={`${whatsOn ? '': 'animate-ping'} float-right text-5xl text-green-500 hover:text-green-300 cursor-pointer`}></FaWhatsappSquare>

        </div>
        <div className="bg-gray-900 text-white px-3 py-2 md:px-7 text-center">© 2019 - Todos os direitos reservados</div>

    </>
    )
}
