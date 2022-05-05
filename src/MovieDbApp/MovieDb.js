
import SearchMovie from './SearchMovie';
function MovieDb() {
  return (
    <div className=" border-b-pink   border-b-2 px-4 py-6 bg-grey-600">
    <div className=" px-4 mx-auto flex flex-col flex-wrap items-center justify-between">
      <h1 class="font-bold text-5xl text-orange-400 px-5 mb-6   "> React Movie App by DEEPTI !</h1>
      <SearchMovie/>
    </div>
    </div>
  );
}

export default MovieDb;