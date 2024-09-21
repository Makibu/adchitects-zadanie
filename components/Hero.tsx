import Image from "next/image";

interface HeroProps {
    text: string;
    imgSrc: string;
}

export default function Hero({text, imgSrc}: HeroProps) {
    return (
        <div
            className={'h-[110svh] w-full flex items-center justify-center relative px-12 md:px-20 2xl:px-[200px]'}>
            <div className={'h-[530px] flex w-full items-center xl:gap-12 mt-24'}>
                <div
                    className={'w-full lg:w-[50%] text-[68px] leading-tight font-medium flex items-center px-8 -mt-[1px] ml-[2px]'}>
                    {text}
                </div>
                <Image src={imgSrc} alt={'HeroImg'} width={800} height={800}
                       className={'w-[50%] lg:pr-[19px] h-full py-[2px] hidden lg:block object-cover'}/>
            </div>
        </div>
    )
}