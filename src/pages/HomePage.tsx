import MainContainer from '../components/MainContainer';
import Carrosel from "../components/Carrosel"
import CardAulas from "../components/CardAulas"
export default function HomePage() {

    return(
        <MainContainer>
            <main>
                <div className='flex flex-col gap-5 w-full h-full p-8 md:px-36'>   
                    <div className='flex justify-center mb-4'>
                   </div>
                   <div className='flex flex-row gap-5 items-start'>
                        <Carrosel/>
                        <CardAulas/>
                   </div>
                </div>
            </main>
        </MainContainer>
    )
}