import { Link } from "react-router-dom"

const LogoContainer = () => {
    return (
        <div>
            <Link to={"/"}>
                <img
                    src="/assets/svg/logo.svg" alt=""
                    className="min-w-10 min-h-10"
                />
            </Link>
        </div>
    )
}

export default LogoContainer;
