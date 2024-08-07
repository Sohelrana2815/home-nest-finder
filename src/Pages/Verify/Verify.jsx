import { Link } from "react-router-dom";

const Verify = () => {
  return (
    <div>
      <p className="text-center font-outfit font-bold mt-20">
        We sent a confirmation email into your email.
        <br />
        After verifying your email please{" "}
        <Link to="/login" className="underline text-xl text-purple-600">
          Login
        </Link>
      </p>
    </div>
  );
};

export default Verify;
