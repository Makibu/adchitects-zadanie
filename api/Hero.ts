interface HeroSection {
    type: 'hero';
    text: string;
    img: string;
}

interface ApiResponse {
    sections: HeroSection[]
}

export const fetchHeroData = async (): Promise<{ text: string; imgSrc: string }> => {
    const res: Response = await fetch("https://adchitects-cms-cbbaa5b528fe.herokuapp.com/page/MPz3uDxgKR", {
        headers: {
            'Authorization': 'Basic ' + btoa(`adchitects:jsrulezzz`),
        },
    });

    if (!res.ok) {
        throw new Error('Failed to fetch hero data');
    }

    const data: ApiResponse = await res.json()
    const heroSection = data.sections.find((section: HeroSection) => section.type === 'hero');

    return {
        text: heroSection?.text || '',
        imgSrc: heroSection?.img || '',
    };
};