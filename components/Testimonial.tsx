import QuotationMark from "@/public/assets/quotation-mark.svg"
import Image from "next/image";

interface TestimonialProps {
    description: string;
    author: string;
}

export default function Testimonial({description, author}: TestimonialProps) {
    return (
        <div
            className={'bg-c-black w-full py-28 lg:py-40 flex flex-col justify-center px-12 md:px-20 lg:px-36 xl:px-56 gap-20 lg:gap-32'}>
            <Image src={QuotationMark} alt={'Quotation'} className={'h-16 w-16'}/>
            <span className={'text-c-white text-4xl font-light leading-[50px] font-Inter'}>
                {description}
            </span>
            <span className={'text-c-gray text-4xl'}>{author}</span>
        </div>
    )
}