export function Footer(){
  return(
    <div className="w-full h-60 bg-white-1000 text-white-200">
      <section className="md:w-1/2 h-full flex flex-col gap-4 items-center justify-center">
        <p className="text-center text-sm px-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo natus, debitis obcaecati nesciunt nihil consectetur?</p>
        <form action="">
          <input type="text" placeholder="your email" className=" w-64"/>
          <button type="submit" className="bg-white-400 w-20 text-white-900">Send</button>
        </form>
      </section>
      <p className="bg-white-1000 text-center">Create by @nahuel_dev</p>
    </div>
  )
}