import Team from "../../assets/images/Team.png";

export function JoinUs() {
  return (
    <div className="my-8 container p-4 font-primaryText">
      <div className="">
        <img
          src={Team}
          className="mx-auto max-w-full max-h-full object-fit"
        ></img>
      </div>
      <div className="mx-auto flex gap-8 flex-col max-w-xl">
        <h1 className="text-5xl  font-bold">Join Us</h1>
        <p className="text-lg">Join Us, Sign up to get exclusive access to our latest anime art and edits</p>
      </div>
    </div>
  );
}
