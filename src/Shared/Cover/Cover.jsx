import { Parallax} from 'react-parallax';
const Cover = ({img,title,subtitle}) => {
    return (
        <div>
            <Parallax
        blur={{ min: -30, max: 30}}
        bgImage={img}
        bgImageAlt="Image"
        strength={-200}
        style={{ height: '400px' }}
    >
             <div className="bg-slate-600 bg-opacity-40 text-white p-4 h-[400px] flex flex-col justify-center">
              <h1 className="text-5xl text-center mb-3 p-2">{title}</h1>
              <p className="px-16 text-center text-base w-[60%] mx-auto">
                  {subtitle}
              </p>
             </div>
            
             </Parallax>
    </div>
       
        
    );
};

export default Cover;