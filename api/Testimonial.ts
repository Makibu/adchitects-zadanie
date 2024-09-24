interface TestimonialSection {
    type: 'testimonial';
    text: string;
    author: string;
}

interface ApiResponse {
    sections: TestimonialSection[]
}

export const fetchTestimonialData = async (): Promise<{ text: string; author: string }> => {
    const res: Response = await fetch("https://adchitects-cms-cbbaa5b528fe.herokuapp.com/page/MPz3uDxgKR", {
        headers: {
            'Authorization': 'Basic ' + btoa(`adchitects:jsrulezzz`),
        },
    });

    if (!res.ok) {
        throw new Error('Failed to fetch testimonial data');
    }

    const data: ApiResponse = await res.json();
    const testimonialSection = data.sections.find((section: TestimonialSection) => section.type === 'testimonial');

    return {
        text: testimonialSection?.text || '',
        author: testimonialSection?.author || '',
    };
};