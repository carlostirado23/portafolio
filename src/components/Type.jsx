import Typewriter from "typewriter-effect";

const Type = () => {
  return (
    <div className="TypeEffect">
      <Typewriter
        options={{
          strings: ["Desarrollador Frontend"],
          autoStart: true,
          loop: true,
          delay: 50,
          deleteSpeed: 60,
        }}
      />
    </div>
  );
};

export default Type;

