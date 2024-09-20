import Image from "next/image";

interface HeroProps {
    text: string;
    imgSrc: string;
}

export default function Hero({text, imgSrc}: HeroProps) {
    return (
        <div
            className={'h-[110svh] w-full flex items-center justify-center relative px-12 md:px-20 lg:px-36 xl:px-48'}>
            <div className={'h-[550px] flex w-full items-center gap-20'}>
                <div
                    className={'w-full lg:w-[50%] text-7xl font-semibold flex items-center px-8'}>
                    {text}
                </div>
                <Image src={imgSrc} alt={'HeroImg'} width={1000} height={1000}
                       className={'w-[50%] h-full hidden lg:block object-cover'}/>
            </div>
        </div>
    )
}