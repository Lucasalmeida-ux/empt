import Layout from '../components/layout/Layout'
import Head from 'next/head'

export default function Contact() {
    return (
        <>
            <Head>
                <title>Fale Conosco</title>
                <link rel="icon" href="/favico.ico" />
            </Head>
            <Layout>
                <div className="bg-gradient-to-r from-blue-400 via-blue-300 to-blue-500 p-3">
                    <h1 className="md:text-2xl uppercase font-medium text-center text-white m-5">Formulário de Solicitação de orçamento</h1>
                    <div className="grid grid-cols-6  text-white">
                        <div className="col-span-4 col-start-2">
                            <form>
                                <label htmlFor="name">Nome:</label>
                                <input type="text" id="name" placeholder="Nome Completo" className="outline-none" />

                                <label htmlFor="business">Nome da Empresa:</label>
                                <input type="business" id="business" placeholder="Nome da minha empresa" className="outline-none" />

                                <label htmlFor="email">Email:</label>
                                <input type="email" id="email" placeholder="meumelhoremail@email.com" className="outline-none" />

                                <label htmlFor="tel">Telefone:</label>
                                <input type="tel" id="tel" placeholder="99 99999-9999" className="outline-none" />

                                <label htmlFor="service">Serviço:</label>
                                <select id="service" name="service">
                                    <option value="distribuidoras">Sistema para Distribuidoras</option>
                                    <option value="comercio">Sistema para Comercio Varegista</option>

                                </select>

                                <label htmlFor="obs">Observações:</label>
                                <textarea id="obs" className="outline-none" />

                                <input type="submit" value="Solicitar Orçamento" className="cursor-pointer bg-gray-800 text-gray-200 border-none hover:bg-gray-700" />
                            </form>
                        </div>
                        <div>

                        </div>
                    </div>
                </div>
                
            </Layout>
        </>
    )
}