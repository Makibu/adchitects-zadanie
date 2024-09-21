import QuotationMark from "@/public/assets/quotation-mark.svg"
import Image from "next/image";

interface TestimonialProps {
    description: string;
    author: string;
}

export default function Testimonial({description, author}: TestimonialProps) {
    return (
        <div
            className={'bg-c-black w-full py-28 lg:py-[165px] flex flex-col justify-center px-12 md:px-20 2xl:px-[235px] gap-20 lg:gap-[86px] text-[34px]'}>
            <Image src={QuotationMark} alt={'Quotation'} className={'h-[66px] w-[66px] mt-[12px]'} height={800}
                   width={800}/>
            <span className={'text-c-white font-light leading-[55px] font-Inter mt-[3px]'}>
                {description}
            </span>
            <span className={'text-c-gray mt-[36px] mb-[2px] font-normal'}>{author}</span>
        </div>
    )
}