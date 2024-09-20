import Hero from "@/components/Hero";
import Testimonial from "@/components/Testimonial";
import Newsletter from "@/components/Newsletter";
import {fetchHeroData} from "@/api/Hero";
import {fetchTestimonialData} from "@/api/Testimonial";

export default async function Home() {
    const heroData = await fetchHeroData();
    const testimonialData = await fetchTestimonialData()

    return (
        <div>
            <Hero text={heroData.text} imgSrc={heroData.imgSrc}/>
            <Testimonial description={testimonialData.description} author={testimonialData.author}/>
            <Newsletter/>
        </div>
    );
}
