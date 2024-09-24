import Hero from "@/components/Hero";
import Testimonial from "@/components/Testimonial";
import Newsletter from "@/components/Newsletter";
import {fetchHeroData} from "@/api/Hero";
import {fetchTestimonialData} from "@/api/Testimonial";

interface HeroData {
    imgSrc: string;
    text: string;
}

interface TestimonialData {
    text: string;
    author: string;
}

export default async function Home() {
    const heroData: HeroData = await fetchHeroData();
    const testimonialData: TestimonialData = await fetchTestimonialData()

    return (
        <div>
            <Hero text={heroData.text} imgSrc={heroData.imgSrc}/>
            <Testimonial description={testimonialData.text} author={testimonialData.author}/>
            <Newsletter/>
        </div>
    );
}
