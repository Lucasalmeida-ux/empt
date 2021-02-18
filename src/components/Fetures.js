import { FaNetworkWired, FaHeadset, FaPenAlt } from 'react-icons/fa'

export default function Fetures() {
    return (
        <div className="p-5  my-5">
            <h1 className="text-center mb-2 md:mb-5 text-xl md:text-2xl font-normal text-gray-600">VANTAGENS DE SER NOSSO CLIENTE</h1>
            <div className="grid md:grid-cols-3 text-center">
                <div className="text-center">
                    <FaNetworkWired className="my-3 mx-auto text-5xl text-blue-300"></FaNetworkWired>
                    <h2 className="font-semibold text-gray-500 uppercase">Implantação Garantida</h2>
                    <p className="md:px-4 text-sm text-gray-600 mt-2">Nós fazemos á instalação remota e o treinamento é feito online ou presencial com aulas explicativas e se houver duvidas, poderão ser tiradas pelo telefone a qualquer hora.</p>
                </div>
                <div className="">
                <FaHeadset className="my-3 mx-auto text-5xl text-blue-300"></FaHeadset>

                    <h2 className="font-semibold text-gray-500 uppercase">
                        Suporte Personalizado
                </h2>
                <p className="md:px-4 text-sm text-gray-600 mt-2">O treinamento é feito online, com aulas explicativas e se houver dúvidas, poderão ser tiradas pelo telefone a qualquer hora.</p>

                </div>
                <div className="">
                <FaPenAlt className="my-3 mx-auto text-5xl text-blue-300"></FaPenAlt>
                    <h2 className="font-semibold text-gray-500 uppercase">
                        Atualizações Constantes
                </h2>
                <p className="md:px-4 text-sm text-gray-600 mt-2">Devido ao alto nível de aderência do sistema, as atualizações são rápidas e seguras sem custo adicional.</p>

                </div>

            </div>
        </div>
    )
}