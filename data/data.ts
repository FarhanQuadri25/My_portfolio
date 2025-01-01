interface AllImages {
    first: string,
    second: string
    third: string
    fourth: string

}

interface Data {
    id: number;
    title: string;
    description: string;
    src: string;
    allImages?: AllImages
}

export const DATA_LIST: Data[] = [
    {
        id: 1,
        title: "MY_STORE_DRIVE",
        description: "A sophisticated application built with Next.js, TypeScript, and Tailwind CSS, featuring cloud storage capabilities. Users can securely store, access, and manage their data from anywhere globally. The app also allows seamless sharing of data via email and provides options to delete or upload data to the cloud with ease.",
        src: "/img/First-Project.png",
        allImages: {
            first: "/img/new-store (1).png",
            second: "/img/new-store (1).png",
            third: "/img/new-store (1).png",
            fourth: "/img/new-store (1).png"
        }

    },
    {
        id: 2,
        title: "Ai_Prompt",
        description: "Make a prompt and for your chat bot and save those prompt to database.You can login into your own account and see all the prompt you have created.",
        src: "/img/Second-Project.png",
        allImages: {
            first: "/img/prompt (1).png",
            second: "/img/prompt (2).png",
            third: "/img/prompt (3).png",
            fourth: "/img/prompt (4).png"
        }


    },
    {
        id: 3,
        title: "World-Tracking-App",
        description: "A sophisticated application built with react js,featuring maps to track location of your adventures and also you can add your mark to the map. built in react and react router",
        src: "/img/Third-Project.png",
        allImages: {
            first: "/img/world (1).png",
            second: "/img/world (2).png",
            third: "/img/world (3).png",
            fourth: "/img/world (4).png"
        }
    },
    {
        id: 4,
        title: "ai_img",
        description: "A sophisticated application built in next js and cloudinary will generate a extended version of your image which you can upload through your own account and see all the images you have uploaded the extended version of the image will be generated with ai.",
        src: "/img/Fourth-Project.png",
        allImages: {
            first: "/img/ai-img (1).png",
            second: "/img/ai-img (2).png",
            third: "/img/ai-img (3).png",
            fourth: "/img/ai-img (4).png"
        }
    }
]