import MainContainer from '../components/MainContainer';
import Carrosel from "../components/Carrosel"
import CardAulas from "../components/CardAulas"

export default function HomePage() {
    return(
        <MainContainer>
            <div className='h-[100%] [@media(min-height:830px)]:h-[80%]'>
                <div className="hidden md:block h-full">
                    <main className="h-full w-full">
                        <div className='flex flex-col gap-5 w-full h-full p-8'>   
                            <div className='flex-1 flex flex-row gap-5 items-stretch min-h-0'>
                                <Carrosel/>
                                <CardAulas/>
                            </div>
                        </div>
                    </main>
                </div>
            </div>

            
            <div className="block md:hidden">
                <main>
                    <div className='flex flex-col gap-5 w-full h-full p-8'>   
                        <div className='flex mb-4'>
                            </div>
                            <div className='flex flex-col gap-5 items-start'>
                                    <CardAulas/>
                                    <Carrosel/>
                            </div>
                    </div>
                </main>
            </div>
        </MainContainer>
    )
}