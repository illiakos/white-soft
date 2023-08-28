import React from 'react';

interface HeadingProps {
    title: string;
}

const Heading: React.FC<HeadingProps> = ({ title }) => {
    return (
        <main className={"flex justify-center bg-primary-blue font-primary"}>
            <h1 className={"lg:text-8xl md:text-6xl sm:text-5xl text-4xl text-white text-center lg:py-16 md:py-12 sm:py-8 py-4 font-bold"}>
                {`${title} PROJECT PAGE`}
            </h1>
        </main>
    );
};

export default Heading;
