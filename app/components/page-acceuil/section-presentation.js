import Image from 'next/image';
import Link from 'next/link';

const SectionPresentation = () => {
  return (
    <section className="bg-[#F0F0F0] h-[700px] w-full">
      <div className="pointer-events-none absolute h-full w-full overflow-hidden opacity-50 [perspective:200px]">
        <div className="absolute inset-0 [transform:rotateX(35deg)]">
          <div className="animate-grid [background-repeat:repeat] [background-size:60px_60px] [height:300vh] [inset:0%_0px] [margin-left:-50%] [transform-origin:100%_0_0] [width:600vw] [background-image:linear-gradient(to_right,rgba(0,0,0,0.3)_1px,transparent_0),linear-gradient(to_bottom,rgba(0,0,0,0.3)_1px,transparent_0)] dark:[background-image:linear-gradient(to_right,rgba(255,255,255,0.2)_1px,transparent_0),linear-gradient(to_bottom,rgba(255,255,255,0.2)_1px,transparent_0)]"></div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent to-90% dark:from-black"></div>
      </div>
      <div className="container md:py-24 h-[700px] lg:py-28 relative max-md:h-auto">
        <div className="flex justify-between w-full max-md:justify-center max-md:flex-col items-center gap-4">
          <div className="md:flex md:pt-5 flex-col md:ml-[8.8rem] md:w-[35%]">
            <h1 className="mb-4 font-extrabold tracking-tight text-center md:text-left leading-none text-4xl xl:text-4xl text-[#50c878]">
              Bienvenue sur SmartLand!
            </h1>
            <h3 className="mt-3 text-2xl text-center md:text-left text-muted-foreground text-black">
              Prédisez l'évolution des prix des terrains, louez ou achetez votre maison facilement.
            </h3>
            <h3 className="mt-3 text-xl text-center md:text-left text-muted-foreground text-black">
              SmartLand vous offre des outils avancés pour gérer vos projets immobiliers à long terme.
            </h3>
            <div className="mt-7 grid gap-3 w-full sm:inline-flex items-center justify-center md:justify-start cursor-pointer">
              <div className="sm:flex items-center">
                <Link href="">
                  <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-primary-foreground hover:bg-primary/90 h-11 rounded-md px-8 cursor-pointer bg-[#50c878]">
                    <Image
                      alt="logo android"
                      width={800}
                      height={800}
                      className="w-5 mr-2"
                      src=""
                    />
                    Se Connecter
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="flex-1 flex justify-center mt-10 max-md:py-24 p-6 md:ml-10">
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <div style={{ position: 'relative' }}>
                <Image
                  alt="something"
                  width={300}
                  height={613}
                  src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fsmartland-phone-image.3aae5fb3.png&amp;w=640&amp;q=75"
                  className="max-sm:-mt-20 -mt-28"
                />
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute top-[100px] -right-[50px] bg-black/30 -rotate-12 z-40 w-32 h-32 rounded-2xl w-20 h-20 border-[0.5px] backdrop-blur-sm bg-black/10 p-4 flex flex-col items-center justify-center">
              <div className="w-full h-full relative p-2">
                <Image
                  src="/Mastercard-Logo.png"
                  alt="Something"
                  className="w-full h-full object-contain rounded-full"
                  width={800}
                  height={800}
                />
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute bottom-[200px] right-[230px] max-md:right-[200px] bg-black/30 -rotate-12 z-40 w-32 h-32 rounded-2xl w-20 h-20 border-[0.5px] backdrop-blur-sm bg-black/10 p-4 flex flex-col items-center justify-center">
              <div className="w-full h-full relative p-2">
                <Image
                  src="/visa.png"
                  alt="something"
                  className="w-full h-full object-contain rounded-full"
                  width={800}
                  height={800}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionPresentation;
