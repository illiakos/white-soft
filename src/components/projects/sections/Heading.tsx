import React from 'react';

interface HeadingProps {
    title: string;
}

const Heading: React.FC<HeadingProps> = ({ title }) => {
    return (
        <main className={"flex justify-center bg-primary-blue font-primary"}>
            <h1 className={"text-8xl text-white py-16 font-bold"}>
                {`${title} PROJECT PAGE`}
            </h1>
        </main>
    );
};

export default Heading;
