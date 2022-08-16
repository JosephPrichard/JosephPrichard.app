import React from "react";
import Link from "next/link";

const TopBanner = () => {
    return (
        <div className="TopBanner">
            <div className="BannerLeft">
                <Link href={"/"}>
                    <div className="Element">
                        <h3> Joseph Prichard </h3>
                    </div>
                </Link>
            </div>
            <div className="BannerRight">
                <Link href={"/projects"}>
                    <div className="Highlight Element">
                        Projects
                    </div>
                </Link>
                <Link href={"/skills"}>
                    <div className="Highlight Element">
                        Skills
                    </div>
                </Link>
                <Link href={"/contact"}>
                    <div className="Highlight Element">
                        Contact
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default TopBanner;