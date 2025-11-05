import { useState, useEffect } from "react";
import axios from "axios";
import Button from "./Button";
import { useAuth } from "../hooks/useAuth";

interface Local { nome: string; }
interface Modalidade { nome: string; }
interface Presenca { id: number; aula_id: number; user_id: string; presente: boolean; }
interface Turma { local: Local; modalidade: Modalidade; }
interface Aula {
  id: number;
  data_hora: string;
  data_hora_fim: string;
  turma: Turma;
  presencas: Presenca[];
}


const formatarDataISO = (date: Date): string => {
  return date.toISOString().split('T')[0];
};

const formatarHorario = (dataHora: string, dataHoraFim: string): string => {
    const options: Intl.DateTimeFormatOptions = { hour: '2-digit', minute: '2-digit' };
    const inicio = new Date(dataHora).toLocaleTimeString('pt-BR', options);
    const fim = new Date(dataHoraFim).toLocaleTimeString('pt-BR', options);
    return `${inicio} ÀS ${fim}`;
};

const CardAulas = () => {
  
  const [aulas, setAulas] = useState<Aula[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const { user } = useAuth();
  
  const DIAS_SEMANA = ["SEG", "TER", "QUA", "QUI", "SEX", "SAB"];
  const selectedDayIndex = (selectedDate.getDay() + 6) % 7; 


  useEffect(() => {
    if (!user) return;

    const fetchAulas = async () => {
      try {
        const dateStr = formatarDataISO(selectedDate);
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/user/aulas-por-data?date=${dateStr}`, 
          {
            headers: { Authorization: `Bearer ${user.token}` },
          }
        );
        setAulas(response.data || []);
      } catch (error) {
        console.error("Erro ao buscar aulas:", error);
        setAulas([]);
      } finally {
        if(loading) setLoading(false);
      }
    };

    fetchAulas();
  }, [user, selectedDate]); 

  const handleConfirmarPresenca = async (aulaId: number, isPresente: boolean) => {
    try {
      await axios.put(
        `${import.meta.env.VITE_API_URL}/aulas/${aulaId}/presenca`,
        { presente: isPresente },
        { headers: { Authorization: `Bearer ${user?.token}` } }
      );

      
      setAulas(prevAulas =>
        prevAulas.map(aula =>
          aula.id === aulaId
            ? { ...aula, presencas: isPresente ? [{ id: 0, aula_id: aulaId, user_id: user!.user_id, presente: true }] : [] }
            : aula
        )
      );
    } catch (error) {
      console.error("Erro ao confirmar presença:", error);
    }
  };
  
  const handleSelectDay = (indexDoDiaClicado: number) => {
    const hoje = new Date();
    const hojeIndex = (hoje.getDay() + 6) % 7; 
    
    let diasDeDiferenca = indexDoDiaClicado - hojeIndex;
    
    const novaData = new Date(hoje);
    novaData.setDate(hoje.getDate() + diasDeDiferenca);
    
    setSelectedDate(novaData);
  };
  
  const renderAulasDoDia = () => {
    if (loading) {
      return <div className="text-center text-gray-500 py-4">Carregando aulas...</div>;
    }

    if (aulas.length === 0) {
      return <div className="text-center text-gray-500 font-semibold ">Nenhuma aula para este dia.</div>;
    }

    return aulas.map((aula) => {
      const jaPresente = aula.presencas && aula.presencas.length > 0 && aula.presencas[0].presente;
      return (
        <div key={aula.id} className="space-y-3">
          <div className="space-y-1">
            <div className="text-sm text-gray-700">
              <div>{formatarHorario(aula.data_hora, aula.data_hora_fim)}</div>
              <div className="font-semibold text-base">{aula.turma.modalidade.nome.toUpperCase()}</div>
              <div>{aula.turma.local.nome.toUpperCase()}</div>
            </div>
          </div>
          <Button
            text="CONFIRMAR PRESENÇA"
            showCheckbox={true}
            checked={jaPresente}
            onStateChange={({ checked }) => {
              handleConfirmarPresenca(aula.id, checked);
            }}
          />
        </div>
      );
    });
  };

  return (
    <div className="bg-white border-2 border-gray-300 rounded-2xl p-6 w-64 mx-auto font-sans shadow-lg h-[32rem] flex flex-col">
      <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
        AULAS
      </h1>
      
      <div className="flex flex-row space-x-3 flex-1 min-h-0">
        
        <div className="space-y-4">
          {DIAS_SEMANA.map((diaLabel, index) => {
              const isSelected = index === selectedDayIndex;
              
              return (
                  <div 
                      key={diaLabel}
                      className={`
                          flex-shrink-0
                          px-2 py-1 rounded text-sm font-semibold w-12 text-center
                          cursor-pointer
                          ${isSelected ? "bg-[#9A238B] text-white" : "text-gray-800"}
                      `}
                      onClick={() => handleSelectDay(index)}
                  >
                      {diaLabel}
                  </div>
              );
          })}
        </div>
        
        <div className="flex-1 min-w-0 overflow-y-auto">
            {renderAulasDoDia()}
        </div>
      </div>
    </div>
  );
};

export default CardAulas;