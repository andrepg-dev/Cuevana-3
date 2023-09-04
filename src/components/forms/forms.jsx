import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { SearchIcon } from '../icons/icons';

export const SearchForm = ({ placeholder }) => {
  const { register, handleSubmit } = useForm();

  const navigate = useNavigate();

  const handleSubmitFunction = (data) => {
    navigate(`/search?q=${data.searchBar}`);
  };

  return (
    <div className="relative">
      <form onSubmit={handleSubmit(handleSubmitFunction)} className="flex items-center">
        <input
          type="text"
          className="py-2 px-4 pr-10 rounded-full w-[200px] text-sm bg-[#0E152D]/60 text-gray-300 border border-blue-500/20 placeholder:select-none transition-all focus:w-[220px]"
          name="searchBar"
          placeholder={placeholder}
          {...register('searchBar', {
            required: true,
          })}
        />

        <button onClick={handleSubmit(handleSubmitFunction)} className="flex items-center">
          <SearchIcon className={'absolute right-4 text-blue-600 hover:scale-125 cursor-pointer'} />
        </button>
      </form>
    </div>
  );
};
