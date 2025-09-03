import MainContainer from '../components/MainContainer';
import { useAuth } from "../hooks/useAuth";
import Carrosel from "../components/Carrosel"
import CardAulas from "../components/CardAulas"

export default function HomePage() {

    const { user } = useAuth();

    return(
        <MainContainer>
            <main>
                <div className='flex flex-col gap-5'>   
                    <div className='flex justify-center'>
                        <p><b>BEM VINDO, {user?.name.toString().toUpperCase()}!</b></p>
                   </div>
                   <div className='flex flex-row gap-5'>
                        <Carrosel/>
                        <CardAulas/>
                   </div>
                </div>
            </main>
        </MainContainer>
    )
}