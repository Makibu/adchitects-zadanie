export const fetchHeroData = async () => {
    const res = await fetch("https://adchitects-cms-cbbaa5b528fe.herokuapp.com/page/MPz3uDxgKR", {
        headers: {
            'Authorization': 'Basic ' + btoa(`adchitects:jsrulezzz`),
        },
    });

    if (!res.ok) {
        throw new Error('Failed to fetch hero data');
    }

    const data = await res.json();
    const heroSection = data.sections.find((section: any) => section.type === 'hero');

    return {
        text: heroSection?.text || '',
        imgSrc: heroSection?.img || '',
    };
};