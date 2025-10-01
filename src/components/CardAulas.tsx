import Button from "./Button";

const CronogramaAulas = () => {
  return (
    <div className="bg-white border-2 border-gray-300 rounded-2xl p-6 w-64 mx-auto font-sans shadow-lg">
      {/* Cabeçalho */}
      <h1 className="text-2xl font-bold text-center text-gray-800 mb-8">
        AULAS
      </h1>
      
      {/* Dias da semana */}
      <div className="space-y-6">
        {/* Segunda-feira */}
        <div className="text-lg font-semibold text-gray-800">
          SEG
        </div>
        
        {/* Terça-feira */}
        <div className="text-lg font-semibold text-gray-800">
          TER
        </div>
        
        {/* Quarta-feira */}
        <div className="space-y-2">
          <div className="flex items-center space-x-3">
            <div className="bg-[#9A238B] text-white px-2 py-1 rounded text-sm font-semibold">
              QUA
            </div>
            <div className="text-sm text-gray-700">
              <div>10:00 ÀS 11:00</div>
              <div className="font-semibold">VÔLEIBOL</div>
              <div>BLOCO 10 - ASA NORTE</div>
            </div>
          </div>
        </div>
        
        {/* Quinta-feira */}
        <div className="text-lg font-semibold text-gray-800">
          QUI
        </div>
        
        {/* Sexta-feira */}
        <div className="text-lg font-semibold text-gray-800">
          SEX
        </div>
        
        {/* Sábado */}
        <div className="text-lg font-semibold text-gray-800">
          SAB
        </div>
        <Button
        text="CONFIRMAR PRESENÇA"
        showCheckbox={true}
        onStateChange={(state) => {
        console.log("Mudança de estado:", state);
        }}
        />
      </div>
    </div>
  );
};

export default CronogramaAulas;