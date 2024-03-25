export const PageNotFound = () => {
  return (
    <>
      <section className="absolute w-screen h-screen pt-20 flex items-center justify-center bg-primary flex-col text-white text-center">
        <img
          src="https://cuevana8.com/_next/static/media/404.1d2aa1c3.png"
          className="object-cover"
          alt="404 image"
        />
        <h1 className="text-skyblue text-[9rem] font-bold">404</h1>
        <h2 className="text-2xl text-white font-light">
          Esta página no está desarrollada
          <br />
          Ve hacia el apartado de generos o busca una pelicula
        </h2>
      </section>
    </>
  );
};
