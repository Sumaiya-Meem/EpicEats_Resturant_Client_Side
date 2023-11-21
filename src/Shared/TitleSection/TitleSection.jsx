
const TitleSection = ({heading,subHeading}) => {
    return (
        <div className="my-7 w-5/12 text-center mx-auto">
            <p className="text-[#D99904] text-xl  mb-3 p-2">{subHeading}</p>
                <h1 className="uppercase text-[#151515] text-4xl border-y-4 p-2">{heading}</h1>
        </div>
    );
};

export default TitleSection;