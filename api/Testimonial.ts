export const fetchTestimonialData = async () => {
    const res = await fetch("https://adchitects-cms-cbbaa5b528fe.herokuapp.com/page/MPz3uDxgKR", {
        headers: {
            'Authorization': 'Basic ' + btoa(`adchitects:jsrulezzz`),
        },
    });

    if (!res.ok) {
        throw new Error('Failed to fetch testimonial data');
    }

    const data = await res.json();
    const testimonialSection = data.sections.find((section: any) => section.type === 'testimonial');

    return {
        description: testimonialSection?.text || '',
        author: testimonialSection?.author || '',
    };
};