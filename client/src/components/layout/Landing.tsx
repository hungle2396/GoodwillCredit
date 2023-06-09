let AnimatedPiggyBank = require("../../UI/img/PiggyBank.gif");

const Landing = () => {
    console.log("In Landing component");
    return (
        <main className="bg_landing min-h-full">

            <div className="landing_quote flex flex-col items-center gap-5">
                <img className="max-w-md mt-10" src={AnimatedPiggyBank} alt="Piggy Bank" />           
                <blockquote className="text-4xl flex flex-col items-center justify-center gap-3 mb-5">
                    <h1>Score your actions, elevate your life</h1>

                    <h1>Welcome To Goodwill Credit!</h1>
                </blockquote>

                <button className="btn-primary py-3 px-12 text-2xl"><a href="/login">See my scores</a></button>
            </div>
        </main>
    )
};

export default Landing;