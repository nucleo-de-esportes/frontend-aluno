import Message from "/Message.png";
import MessageAlt from "/MessageAlt.png";

export default function Avisos() {
  const avisos = [
    {
      id: 1,
      titulo: "AVISO 1 - TEXTO MERAMENTE ILUSTRATIVO",
      autor: "PROF. LUIZ FELIPE II",
      data: "6:21",
      lido: false
    },
    {
      id: 2,
      titulo: "AVISO 2 - TEXTO MERAMENTE ILUSTRATIVO",
      autor: "COORDENAÇÃO",
      data: "3:34",
      lido: true
    }
  ];

  return (
    <div className="h-full p-8 w-full">
      <div className="w-full mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">AVISOS</h1>
        
        <div className="bg-white rounded-lg border-2 border-gray-300 p-8">
          {avisos.map((aviso, index) => (
            <div key={aviso.id}>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                    <img src={aviso.lido ? Message : MessageAlt} alt="Símbolo de Mensagem" />
                </div>
                
                <div className="flex-grow">
                  <h2 className="text-xl font-bold text-gray-900 mb-4">
                    {aviso.titulo}
                  </h2>
                  
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-800 font-medium uppercase">
                      {aviso.autor}
                    </span>
                    <span className="text-gray-600">
                      {aviso.data}
                    </span>
                  </div>
                </div>
              </div>
              
              {index < avisos.length - 1 && (
                <hr className="my-6 border-gray-300" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}