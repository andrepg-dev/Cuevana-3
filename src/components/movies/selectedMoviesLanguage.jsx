import { ArrowDownIcon } from '../icons/icons';

export const SelectedMoviesLanguage = ({ svgIcon, language, ArrowDownIconBol = true }) => {
  return (
    <>
      <main className="flex justify-between lg:gap-3 text-sm bg-skyblue rounded h-12 pr-3 px-2 cursor-pointer hover:brightness-90">
        <section className='flex gap-3'>
          <div className="flex items-center">{svgIcon}</div>
          <div className="flex flex-col gap-1 justify-center">
            <span>{language}</span>
            <span className="font-semibold uppercase text-[10px] -mt-1">Calidad HD</span>
          </div>
        </section>

        <div className="flex items-center ">
          {ArrowDownIconBol && (
            <span className="w-6 h-6 bg-[#062f68] rounded flex items-center justify-center">
              <ArrowDownIcon className={'w-4 h-4'} />
            </span>
          )}
        </div>
      </main>
    </>
  );
};
